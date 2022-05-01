import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms'
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Helper } from 'src/models/helper.models';
import { CallNumber} from '@ionic-native/call-number';

@Component({
  selector: 'app-shortforms',
  templateUrl: './shortforms.page.html',
  styleUrls: ['./shortforms.page.scss'],
})
export class ShortformsPage implements OnInit {
  httpOptions = {
    headers : new HttpHeaders({ 'Content-Type': 'application/json'})
  };
  public depositForm ;
  private baseUrl : string ;
  private shortCode : string ;
  public distributors ;
  public agent;
  private currentUser;
  private previous;
  constructor( private formBuilder : FormBuilder, private toastCtrl : ToastController,private router : Router,private http: HttpClient) { 
    // load base url
    this.currentUser = Helper.getUserProfile();
    this.baseUrl = Helper.getApiHostname();
    if(this.router.getCurrentNavigation().extras.state){
      this.previous = this.router.getCurrentNavigation().extras.state.number;
      this.agent = this.router.getCurrentNavigation().extras.state.number;
    }
    this.http.get(this.baseUrl+'api/mobile/distributors/list/', this.httpOptions).subscribe(list=>{
      if(list['count'] > 0){
        this.distributors = list['items'];
      }
    });
    this.shortCode = Helper.getUssdShortcode();
    this.depositForm =  this.formBuilder.group({
      distributor_number : '',
      agent_number : this.previous.number,
      sms : '',
    });
  }

  ngOnInit() {
  }
  send(){
    let form = {};
  form['dist'] = this.depositForm.get('distributor_number').value;
  form['agent_number'] = this.depositForm.get('agent_number').value;
  form['sms'] = this.depositForm.get('sms').value;
  let sms = form['sms'];
  if(!form['dist']){
    this.presentToast("Le numero distributeur est obligatoire");
    return;
  }
  if(sms.indexOf('Vous avez recu') === -1){
    this.presentToast("SMS invalid");
    return;
  }
  form['transid'] = sms.substring(sms.length - 20, sms.length - 1);
  let firstparts = sms.split('FCFA')[0].split(' ');
  form['amount'] = firstparts[firstparts.length - 2];
  let firstpart = sms.split(',')[0];
  form['number'] = firstpart.substring(firstpart.length - 8,firstpart.length);
  console.log(form);
  }

  later(sms? : string, transid? : string, amountsms? : string,numbersms? : string){
    let form = this.previous;
    form['sms'] = sms || '';
    form['user'] = this.currentUser;
    form['transid'] = transid || '';
    form['amountsms'] = amountsms || '';
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
