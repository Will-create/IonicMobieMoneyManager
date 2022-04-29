import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms'
import { Router,NavigationExtras } from '@angular/router';
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
  private agent;
  constructor( private formBuilder : FormBuilder, private toastCtrl : ToastController,private router : Router,private http: HttpClient) { 
    // load base url
    this.baseUrl = Helper.getApiHostname();
    this.shortCode = Helper.getUssdShortcode();
    if(this.router.getCurrentNavigation().extras.state){
      this.agent = this.router.getCurrentNavigation().extras.state.number;
    };
    this.http.get(this.baseUrl+'api/mobile/distributors/list/', this.httpOptions).subscribe(list=>{
      if(list['count'] > 0){
        this.distributors = list['items'];
      }
    });
    this.depositForm =  this.formBuilder.group({
      distributor_number : '',
      agent_number : this.agent.number,
      passcode : '',
      amount : 0,
    });
  }

  ngOnInit() {
  }
  send(){
  let dist = this.depositForm.get('distributor_number').value;
  let agent_number = this.depositForm.get('agent_number').value;
  let amount = this.depositForm.get('amount').value;
  let passcode = this.depositForm.get('passcode').value;
  if(!dist){
    this.presentToast("Numero distributeur est obligatoire", 'bottom', 600);
    return;
  }

  if(!agent_number){
    this.presentToast("Numero Agent est obligatoire", 'bottom', 600);
    return;
  }

  if(!amount){
    this.presentToast("Le Montant est obligatoire", 'bottom', 600);
    return;
  }
  if(!passcode){
    this.presentToast("Le Mot de passe est obligatoire est obligatoire", 'bottom', 600);
    return;
  }
  let code = this.shortCode+agent_number+"*"+amount+"*"+passcode+"#";
  console.log(code);
  CallNumber.callNumber(code, false)
  .then(res =>{ 
    this.presentToast(res, 'bottom', 600);
  })
  .catch(err => {
    this.presentToast(err, 'bottom', 600);
  });
  }
  err(err){

  }

  next(err){
    let extras : NavigationExtras = {
      state : {
        dist : this.depositForm.get('distributor_number').value,
        agent_number : this.depositForm.get('agent_number').value,
        amount : this.depositForm.get('amount').value,
      }
    }
    this.router.navigate(['deposits/pending'],extras);
  }
  async presentToast(message : string, position : "top" | "middle" | "bottom", duration : number) {
    const toast = await this.toastCtrl.create({
      message: message,
      position: position,
      duration: duration
    });
    toast.present();
  }
}
