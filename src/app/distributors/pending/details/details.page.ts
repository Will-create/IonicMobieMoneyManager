import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Helper } from 'src/models/helper.models';
@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
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
   
   }
  ngOnInit() {
  }

  tabs(){
    this.router.navigate(['tabs']);
   }
  send(){
    let form = this.previous;
    console.log(form);
    form['sms'] = this.finalForm.get('sms').value;
    let sms = form['sms'];
    if(sms.indexOf('Vous avez transfere') === -1){
      this.presentToast("SMS invalid");
      return;
    };
    let last = sms.substring(sms.length - 1) == '.' ? 1 : 0; 
  
    form['transid'] = sms.substring(sms.length - 20, sms.length - last);
    let firstparts = sms.split('FCFA')[0].split(' ');
    form['amountsms'] = firstparts[firstparts.length - 2];
    let firstpart = sms.split(',')[0];
    form['numbersms'] = firstpart.substring(firstpart.length - 8,firstpart.length);
    let self = this;
    console.log(form);
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
