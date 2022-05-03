import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Helper } from 'src/models/helper.models';

@Component({
  selector: 'app-receivings',
  templateUrl: './receivings.page.html',
  styleUrls: ['./receivings.page.scss'],
})
export class ReceivingsPage implements OnInit {

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
    this.http.get(this.baseUrl+'api/mobile/distributors/received?dist='+this.distributor.number,this.httpOptions).subscribe(list=>{
      console.log(list);
      this.pendings = list;
    });
  }

  ngOnInit() {
  }

}
