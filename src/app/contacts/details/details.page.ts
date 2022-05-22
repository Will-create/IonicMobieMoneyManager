import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { IonLoaderService } from 'src/app/services/ion-loader.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  public contact : any = {};
  public numbers :any = [];
  constructor(private router : Router,public loadingService : IonLoaderService) { 
    if(this.router.getCurrentNavigation().extras.state){
      this.loadingService.autoLoader();
      let state = this.router.getCurrentNavigation().extras.state;
      this.contact = state.contact;
      this.numbers = state.numbers;
    }
  }

  ngOnInit() {
  }
  callNumber(number : string){

  }
  deposit(number : any){
    let extras : NavigationExtras = {
      state : {
        number : number
        
      }
    };
    this.router.navigate(['deposits/shortforms'],extras);

  }
  withdraw(number : any){
    let extras : NavigationExtras = {
      state : {
        number : number
      }
    };
    this.router.navigate(['withdrawals/shortforms'],extras);
  }
}
