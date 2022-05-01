import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-transfered-successfully',
  templateUrl: './transfered-successfully.page.html',
  styleUrls: ['./transfered-successfully.page.scss'],
})
export class TransferedSuccessfullyPage implements OnInit {
  public insertion;
  constructor(private navCtrl: NavController, private router : Router ) {
    if(this.router.getCurrentNavigation().extras.state){
      this.insertion=this.router.getCurrentNavigation().extras.state;
    }
   }

  ngOnInit() {
  }

  tabs() {
    this.navCtrl.navigateRoot(['./tabs']);
  } 
}
