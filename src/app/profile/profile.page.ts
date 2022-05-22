import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators, Form} from '@angular/forms'
import { Router,NavigationExtras } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Helper } from 'src/models/helper.models';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  public profileForm;
  public profile;
  constructor(private formBuilder : FormBuilder, private router : Router, private toastCtrl : ToastController){    
    this.profile = Helper.getUserProfile();
    console.log(this.profile);
    this.profileForm = this.formBuilder.group(this.profile);
  }
  ngOnInit() {
  }

  save(){
    let form = {};
    form['name'] = this.profileForm.get('name').value;
    form['picture'] = this.profileForm.get('picture').value;
    form['login'] = this.profileForm.get('login').value;
    form['password'] = this.profileForm.get('password').value;
    form['phone'] = this.profileForm.get('phone').value;
    if(!form['name']){
    this.presentToast("Le nom d'utilisateur est obligatoire","bottom", 600);
      return;
    }
    if(!form['login']){
      this.presentToast("Le nom de connection est obligatoire","bottom", 600);
        return;
    }
    if(!form['password']){
        this.presentToast("Le mot de passe est obligatoire","bottom", 600);
      return;
    }
    if(form['password'].length < 4){
      this.presentToast("Le mot de passe doit avoir au moins 4 caracteres","bottom", 800);
    return;
  }
    if(!form['phone']){
      this.presentToast("Le numero de telephone est obligatoire est obligatoire","bottom", 600);
    return;
  }

  if(form['login'] =='spass'){
    this.presentToast("Le nom de connexion doit etre different de spass","bottom", 1000);
    return;
  }
    if(form['password'] == '0000'){
      this.presentToast("Le mot de passe doit etre different de 0000","bottom", 1000);
    return;
    }
    Helper.setUserProfile(JSON.stringify(form));
    this.presentToast("Enregistre avec succes","bottom", 600);
    this.router.navigate(['/tabs/settings']);
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
