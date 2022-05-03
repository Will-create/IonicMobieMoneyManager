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
  public agent;
  private dialmode : string;
  constructor( private formBuilder : FormBuilder, private toastCtrl : ToastController,private router : Router,private http: HttpClient) { 
    // load base url
    this.baseUrl = Helper.getApiHostname();
    this.shortCode = Helper.getUssdShortcode();
    this.dialmode = Helper.getDialMode();
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
      amount : '',
    });
  }

  ngOnInit() {
  }
  send(){
    let form = {};

    form['dist'] = this.depositForm.get('distributor_number').value;
    form['amount'] = this.depositForm.get('amount').value;
    form['agent_number'] = this.agent.agentcode;
    form['idreceiver'] = this.agent.id;
    form['receiver'] = this.agent.ownername;
    form['tonumber'] = this.agent.number;
  if(!form['dist']){
    this.presentToast("Numero distributeur est obligatoire", 'bottom', 600);
    return;
  }
  if(!form['amount']){
    this.presentToast("Le Montant est obligatoire", 'bottom', 600);
    return;
  }

  let code = this.shortCode.replace('numero',form['agent_number']).replace('montant',form['amount']).replace('#','#');
  console.log(code);
  let extras : NavigationExtras = {state : form}
  this.router.navigate(['deposits/pending'],extras);
  CallNumber.callNumber(code, false)
  .then(res =>{ 
  })
  .catch(err => {
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
