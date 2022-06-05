import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Helper } from 'src/models/helper.models';

@Component({
  selector: 'app-sendings',
  templateUrl: './sendings.page.html',
  styleUrls: ['./sendings.page.scss'],
})
export class SendingsPage implements OnInit {

  httpOptions = {
    headers : new HttpHeaders({'Content-Type': 'application/json'})
  }
  private baseUrl : string;
  public distributor;
  public pendings;
  public pendings_count = 0;
  constructor(private router : Router, private http : HttpClient) { 
    if(this.router.getCurrentNavigation().extras.state){
      this.distributor = this.router.getCurrentNavigation().extras.state;
    }

    this.baseUrl = Helper.getApiHostname();
    this.http.get(this.baseUrl+'api/mobile/distributors/sent?dist='+this.distributor.number,this.httpOptions).subscribe(list=>{
      console.log(list);
      this.pendings = list;
    });
  }

  ngOnInit() {
  }

}
