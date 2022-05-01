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

  public generalForm;
  constructor(private formBuilder : FormBuilder, private toastCtrl : ToastController,private router : Router) { 
    this.generalForm = this.formBuilder.group({
      shortcode : Helper.getUssdShortcode()
    });
  }

  
  ngOnInit() {
  }
 save(){
   Helper.setUssdShortcode(this.generalForm.get('shortcode').value);
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
