import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Helper } from 'src/models/helper.models';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.page.html',
  styleUrls: ['./pending.page.scss'],
})
export class PendingPage implements OnInit {
  httpOptions = {
    headers : new HttpHeaders({'Content-Type': 'application/json'})
  }
  private baseUrl : string;
  public distributor;
  public pendings;
  public pendings_count = 0;
  private extras;
  constructor(private router : Router, private http : HttpClient) { 
    if(this.router.getCurrentNavigation().extras.state){
      this.distributor = this.router.getCurrentNavigation().extras.state;
    }

    this.baseUrl = Helper.getApiHostname();
    this.http.get(this.baseUrl+'api/mobile/distributors/pending?dist='+this.distributor.number,this.httpOptions).subscribe(list=>{
      console.log(list);
      this.pendings = list;
    });
  }

  ngOnInit() {
  }
  details(pending){
    this.extras = {
      state : pending
    }
    this.router.navigate(['distributors/pending/details'],this.extras);

  }

}
