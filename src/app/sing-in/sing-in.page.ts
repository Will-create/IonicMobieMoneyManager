import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import {Form, FormBuilder,FormGroup} from "@angular/forms"

import { Router } from '@angular/router';
import { Helper } from 'src/models/helper.models';
@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.page.html',
  styleUrls: ['./sing-in.page.scss'],
})
export class SingInPage implements OnInit {
  private currentUser? : any;
  public loginForm : any;
  public isDefaultUser : boolean;
  private saved_login : string;
  constructor(private navCtrl: NavController, private route: Router,public formBuilder : FormBuilder,private toastCtrl : ToastController) { 
    this.currentUser = Helper.getUserProfile();
    this.isDefaultUser = Helper.isDefaultUser();
    this.saved_login = Helper.getSavedProfileLogin();
    this.loginForm = this.formBuilder.group({
      login : this.saved_login,
      password : ''
    })
  }

  ngOnInit() {
  }
  tabs() {
    let form  = {};
    form['login'] = this.loginForm.get('login').value;
    form['password'] = this.loginForm.get('password').value;
    if(!form['login']){
      this.presentToast("Le nom d'utilisateur ou numero de telephone est obligatoire")
      return;
    }
    if(!form['password']){
      this.presentToast('Le mot de passe est obligatoire');
    }

    if(this.isDefaultUser){
        if(form['login'] == 'spass' && form['password'] == '0000'){
          this.presentToast('Bienvenue');
          this.navCtrl.navigateRoot(['./tabs']);
        }else{
          this.presentToast('Nom d\'utilisateur ou numero de telephone incorrect ');
        }
    }else{
      if(form['login']== this.currentUser.login && form['password']==this.currentUser.password){
      this.presentToast('Bienvenue');
      Helper.setSavedProfileLogin(form['login']);
      this.navCtrl.navigateRoot(['./tabs']);
      
    }else{
      this.presentToast('Nom d\'utilisateur ou numero de telephone incorrect');
    }

    }

  }
  sign_up() {
    this.route.navigate(['./sign-up']);
  } 	
  async presentToast(message) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 600,
    });
    toast.present();
  }

}
