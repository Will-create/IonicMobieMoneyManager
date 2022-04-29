import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  public contact : any = {};
  public numbers :any = [];
  constructor(private router : Router) { 
    if(this.router.getCurrentNavigation().extras.state){
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

  }
  withdraw(number : any ){
    
  }
}
