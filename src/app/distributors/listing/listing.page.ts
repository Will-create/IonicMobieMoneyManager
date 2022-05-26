import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { IonLoaderService } from 'src/app/services/ion-loader.service';
import { Helper } from 'src/models/helper.models';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.page.html',
  styleUrls: ['./listing.page.scss'],
})
export class ListingPage implements OnInit {
  httpOptions  = {
    headers : new HttpHeaders({'Content-Type' : 'application'})
  }
  private baseUrl : string;
  public distributors;
  constructor(private route: Router, private http : HttpClient, private loadingService : IonLoaderService){
    this.baseUrl = Helper.getApiHostname();
   // this.loadingService.autoLoader(500);
    this.http.get(this.baseUrl+'api/mobile/distributors/list/',this.httpOptions).subscribe(list=>{
      if(list['count']>0)
      this.distributors = list['items'];
    })
  }
  ngOnInit() {
  }
  dist(dist){
    let extras :NavigationExtras = {
      state : dist
    }
    this.route.navigate(['distributors'],extras);
  }
}
