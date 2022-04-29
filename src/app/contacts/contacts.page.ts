import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Helper } from 'src/models/helper.models';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {
  public searchTerm : string;
  public contacts : any = [];
  public contacts_count : number = 0;
  httpOptions = {
    headers : new HttpHeaders({'Content-Type' : 'application/json'})
  }
  private baseUrl : string;

  constructor(private http : HttpClient, private router : Router) {
    this.baseUrl = Helper.getApiHostname();
    this.http.get(this.baseUrl+'api/mobile/contacts/list/',this.httpOptions).subscribe(list=>{
      if(list['count']>0){
        this.contacts = list['items'];
        this.contacts_count = list['items'].length;
      }
    })
   }

  ngOnInit() {
  }
  details(contact:any){
    let extras : NavigationExtras = {
      state : {
        numbers : contact.numbers,
        contact : contact
      }
    }
    this.router.navigate(['contacts/details'],extras);
  }
}
