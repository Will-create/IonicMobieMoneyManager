import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
 public localite : any;
 public localites : any = [];
public contacts : any = [];
  searchTerm : string ;
  public contacts_count : number = 0;
  constructor(private router : Router) {
    if(this.router.getCurrentNavigation().extras.state){
      var state = this.router.getCurrentNavigation().extras.state;
      this.contacts = state.contacts;
      this.contacts_count = state.contacts.length;
      this.localite = state.localite;
    }
   }

 
  ngOnInit() {
    
  }

  findItem(value :any, callback : any){
    this.localites.forEach((element : any)=> {
      if (element.id == value){
         callback(element);
         return;
      }
    });
  }
}
