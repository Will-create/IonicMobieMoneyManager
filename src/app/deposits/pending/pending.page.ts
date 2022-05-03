import { Component, OnInit } from '@angular/core';
import { SmsRetriever } from '@awesome-cordova-plugins/sms-retriever';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Helper } from 'src/models/helper.models';
declare var SMSReceive: any;
@Component({
  selector: 'app-pending',
  templateUrl: './pending.page.html',
  styleUrls: ['./pending.page.scss'],
})
export class PendingPage implements OnInit {
  httpOptions = {
    headers : new HttpHeaders({'Content-Type':'application/json'})
  }
  public finalForm ;
  private previous;
  private SMS : string;
  private baseUrl : string;
  private currentUser;
  constructor( private toastCtrl : ToastController,private builder : FormBuilder,private router : Router,private http :HttpClient) {
    this.currentUser = Helper.getUserProfile();
    this.baseUrl = Helper.getApiHostname();
    if(this.router.getCurrentNavigation().extras.state){
      this.previous = this.router.getCurrentNavigation().extras.state;
    }
    this.finalForm = this.builder.group({
      sms  : ''
    });
   this.start();
   }
  ngOnInit() {
  }
 tabs(){
  this.router.navigate(['tabs']);
 }
 start(){
  SMSReceive.startWatch(
    () => {
      console.log('watch started');
      document.addEventListener('onSMSArrive', (e: any) => {
        console.log('onSMSArrive()');
        var IncomingSMS = e.data;
        console.log(JSON.stringify(IncomingSMS));
      });
    },
    () => { console.log('watch start failed') }
  )
 }
stop() {
  SMSReceive.stopWatch(
    () => { console.log('watch stopped') },
    () => { console.log('watch stop failed') }
  )
}

processSMS(data) {
  // Check SMS for a specific string sequence to identify it is you SMS
  // Design your SMS in a way so you can identify the OTP quickly i.e. first 6 letters
  // In this case, I am keeping the first 6 letters as OTP
    const message = data.body;
    this.SMS = data.body;
    this.finalForm.patchValue({sms : message});
   this.presentToast('Received message from '+data.address+" Service center :"+data.service_center);
   this.send();
    this.stop();
}
 send(){
  let form = this.previous;
  form['sms'] = this.finalForm.get('sms').value;
  let sms = form['sms'];
  if(sms.indexOf('Vous avez transfere') === -1){
    this.presentToast("SMS invalid");
    return;
  }
  let last = sms.substring(sms.length - 1) == '.' ? 1 : 0; 
  console.log(last);
  form['transid'] = sms.substring(sms.length - 20, sms.length - last);
  let firstparts = sms.split('FCFA')[0].split(' ');
  form['amountsms'] = firstparts[firstparts.length - 2];
  let firstpart = sms.split(',')[0];
  form['numbersms'] = firstpart.substring(firstpart.length - 8,firstpart.length);
  let self = this;
  this.checkIftransactionExist('deposits',form['transid'],function(exist){
    if(exist){
      self.presentToast('Le sms saisie existe deja en base de donnee. Verifiez le SMS');
      return;
    }
    self.later(form['sms'],form['transid'],form['amountsms'],form['numbersms']);
  });
 }
 later(sms? : string, transid? : string, amountsms? : string,numbersms? : string){
   let form = this.previous;
   form['sms'] = sms || '';
   form['user'] = this.currentUser;
   form['transid'] = transid || '';
   form['amountsms'] = amountsms || '';
   if(form['sms'] ){
    form['isdraft'] = false; 
    form['status'] = 'Termine'; 
   }else{
    form['isdraft'] = true; 
   }
   console.log(form);
   this.http.post(this.baseUrl+'api/mobile/deposits/post',form,this.httpOptions).subscribe(insertion =>{
     console.log(insertion);
   if(insertion['success']){
    this.presentToast('Transfert enregistre avec succes');
    let state = insertion['value'];
    state['type'] = 'sending';
    let extras : NavigationExtras = {
      state : insertion['value']
    }
    this.router.navigate(['transfered-successfully'],extras);
   }else{
    this.presentToast(insertion[0].error);
   }
   })
 }
 checkIftransactionExist(table,transid,callback){
  this.http.get(this.baseUrl+'api/mobile/transactions/service?table='+table+'&transid='+transid,this.httpOptions).subscribe(response=>{
    console.log(response);
    callback(response['value']);
  })
 }
 async presentToast(message) {
  const toast = await this.toastCtrl.create({
    message: message,
    duration: 600,
  });
  toast.present();
}
}
