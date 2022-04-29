import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms'
import { Router } from '@angular/router';
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

    if(this.router.getCurrentNavigation().extras.state){
      this.agent = this.router.getCurrentNavigation().extras.state.number;
      console.log(this.agent);
    };
    this.http.get(this.baseUrl+'api/mobile/distributors/list/', this.httpOptions).subscribe(list=>{
      if(list['count'] > 0){
        this.distributors = list['items'];
      }
    });
    this.shortCode = '*144*4*1*1*';
    this.depositForm =  this.formBuilder.group({
      distributor_number : '',
      agent_number : this.agent.number,
      amount : '',
    });
  }

  ngOnInit() {
  }
  send(){
  let dist = this.depositForm.get('distributor_number').value;
  let agent_number = this.depositForm.get('agent_number').value;
  let amount = this.depositForm.get('amount').value;
  let code = this.shortCode+agent_number+"*"+amount+"#";
  CallNumber.callNumber(code, false)
  .then(res => this.presentToast(res))
  .catch(err => this.presentToast(err));
  }
  async presentToast(message) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 2500,
    });
    setTimeout(()=>{
    this.router.navigate(['/tabs/home']);
    },600)
    toast.present();
  }

}
