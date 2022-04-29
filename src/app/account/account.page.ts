import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { APP_CONFIG, AppConfig } from '../app.config'; 
import { BuyappalertPage } from '../buyappalert/buyappalert.page';
import { ModalController } from '@ionic/angular';
import { Helper } from 'src/models/helper.models';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
 public userprofile;
  constructor(@Inject(APP_CONFIG) public config: AppConfig, private navCtrl: NavController, private route: Router,
    private modalController: ModalController) { 
      this.userprofile = JSON.parse(Helper.getUserProfile());
    }

  ngOnInit() {
  }

  profile() {
    this.route.navigate(['./profile']);
  }
  thumb_impression() {
    this.route.navigate(['./thumb-impression']);
  }
  nearby_bank() {
    this.route.navigate(['./nearby-bank']);
  }
  change_language() {
    this.route.navigate(['./change-language']);
  }
  terms_conditions() {
    this.route.navigate(['./terms-conditions']);
  }
  faqs() {
    this.route.navigate(['./faqs']);
  }
  support() {
    this.route.navigate(['./support']);
  }
  sing_in() {
    this.navCtrl.navigateRoot(['./sing-in']);
  }
  // buyappalert() {
  //   window.open("http://bit.ly/cc_OpusBanking", '_system', 'location=no');
  // }

  buyappalert() {
    this.modalController.create({ component: BuyappalertPage }).then((modalElement) => modalElement.present());
  } 

  developed_by() {
    window.open('https://opuslab.works', '_system', 'location=no')
  }
}
