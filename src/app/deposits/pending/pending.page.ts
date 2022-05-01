import { Component, OnInit } from '@angular/core';
import { SmsRetriever } from '@awesome-cordova-plugins/sms-retriever';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Helper } from 'src/models/helper.models';
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
    SmsRetriever.getAppHash()
    .then((res: any) => console.log(res))
    .catch((error: any) => console.error(error));
   }
  ngOnInit() {
  }
 tabs(){
  this.router.navigate(['tabs']);
 }
 start(){
  SmsRetriever.startWatching()
  .then((res: any) => {
    console.log(res);
    this.processSMS(res);
  })
  .catch((error: any) => console.error(error));
 }

 processSMS(data){
   // Design your SMS with App hash so the retriever API can read the SMS without READ_SMS permission
    // Attach the App hash to SMS from your server, Last 11 characters should be the App Hash
    // After that, format the SMS so you can recognize the OTP correctly
    // Here I put the first 6 character as OTP
    const message = data.Message;
    if (message != -1) {
      if(message.indexOf('Vous avez transfere') === -1){
        this.presentToast("SMS invalid");
      }else{
        this.finalForm.patchValue({sms : message});
        this.send();
      }
    
    }
 }
 send(){
  let form = this.previous;
  form['sms'] = this.finalForm.get('sms').value;
  let sms = form['sms'];
  if(sms.indexOf('Vous avez transfere') === -1){
    this.presentToast("SMS invalid");
    return;
  }
  form['transid'] = sms.substring(sms.length - 20, sms.length - 1);
  let firstparts = sms.split('FCFA')[0].split(' ');
  form['amountsms'] = firstparts[firstparts.length - 2];
  let firstpart = sms.split(',')[0];
  form['numbersms'] = firstpart.substring(firstpart.length - 8,firstpart.length);
  this.later(form['sms'],form['transid'],form['amountsms'],form['numbersms']);
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
 async presentToast(message) {
  const toast = await this.toastCtrl.create({
    message: message,
    duration: 600,
  });
  toast.present();
}
}
