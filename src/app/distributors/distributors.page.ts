import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-distributors',
  templateUrl: './distributors.page.html',
  styleUrls: ['./distributors.page.scss'],
})
export class DistributorsPage implements OnInit {
  public distributor;
  constructor(private router : Router) { 
    if(this.router.getCurrentNavigation().extras.state){
      this.distributor = this.router.getCurrentNavigation().extras.state;
    }
  }

  ngOnInit() {
  }

  pending(){}
  sent(){}
  received(){}
}
