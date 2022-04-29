import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  private zones : any = [];
  public localites  = [];

  public contacts : any = [];
  public zone : any ;
  public searchTerm : string;
  constructor(private router : Router) { 
    if (this.router.getCurrentNavigation().extras.state){
      let state = this.router.getCurrentNavigation().extras.state;
      this.localites = state.localities;
      this.zone = state.zone
      console.log(this.localites);
     }
  }

  ngOnInit() {
   
  }



}
