import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Helper } from 'src/models/helper.models';

@Component({
  selector: 'app-generals',
  templateUrl: './generals.page.html',
  styleUrls: ['./generals.page.scss'],
})
export class GeneralsPage implements OnInit {
  httpOptions = {
    headers : new HttpHeaders({'Content-Type' : 'application/json'})
  }
  public generalForm;
  public distributors;
  private  baseUrl : string;
  constructor(private formBuilder : FormBuilder, private toastCtrl : ToastController,private router : Router,private http : HttpClient) { 


   
  }

  
  ngOnInit() {
    this.baseUrl = Helper.getApiHostname();
    this.http.get(this.baseUrl+'api/mobile/distributors/list/', this.httpOptions).subscribe(list=>{
      if(list['count'] > 0){
        this.distributors = list['items'];
      }

    });
    this.generalForm = this.formBuilder.group({
      shortcode : Helper.getUssdShortcode(),
      current_sim : Helper.getCurrentSim()
    });
  }
 save(){
   Helper.setUssdShortcode(this.generalForm.get('shortcode').value);
   Helper.setCurrentSim(this.generalForm.get('current_sim').value);
   this.presentToast();
 }
 async presentToast() {
  const toast = await this.toastCtrl.create({
    message: 'Enregistre avec succes',
    duration: 2500,
    position: 'bottom',
  });
  setTimeout(()=>{
  this.router.navigate(['/tabs/home']);
  },600)
  toast.present();
}
}
