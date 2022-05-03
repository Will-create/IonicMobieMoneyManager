import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-distributors',
  templateUrl: './distributors.page.html',
  styleUrls: ['./distributors.page.scss'],
})
export class DistributorsPage implements OnInit {
  public distributor;
  private extras : NavigationExtras;
  constructor(private router : Router) { 
    if(this.router.getCurrentNavigation().extras.state){
      this.distributor = this.router.getCurrentNavigation().extras.state;
    };
    this.extras = {
      state : this.distributor
    }
  }

  ngOnInit() {
   
  }

  pending(){
   this.router.navigate(['distributors/pending'],this.extras);
  }
  sent(){
   this.router.navigate(['distributors/sendings'],this.extras);

  }
  received(){
   this.router.navigate(['distributors/receivings'],this.extras);

  }
}
