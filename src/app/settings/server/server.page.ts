import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Helper } from 'src/models/helper.models';

@Component({
  selector: 'app-server',
  templateUrl: './server.page.html',
  styleUrls: ['./server.page.scss'],
})
export class ServerPage implements OnInit {
  public serverForm;
  constructor(private formBuilder : FormBuilder, private toastCtrl : ToastController,private router : Router) { 
    this.serverForm = this.formBuilder.group({
      hostname : Helper.getApiHostname()
    });
  }
  ngOnInit() {
  }
 save(){
   Helper.setApiHostname(this.serverForm.get('hostname').value);
   this.presentToast();
 }
 async presentToast() {
  const toast = await this.toastCtrl.create({
    header : 'S.PASS TELECOM',
    message: 'Enregistre avec succes',
    duration: 2500,
    icon: 'checkmark-done-outline',
    position: 'top',
  });
  setTimeout(()=>{
  this.router.navigate(['/tabs/home']);
  },600)
  toast.present();
}
}
