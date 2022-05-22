import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Helper } from 'src/models/helper.models';
import { IonLoaderService } from '../services/ion-loader.service';

@Component({
  selector: 'app-localites',
  templateUrl: './localites.page.html',
  styleUrls: ['./localites.page.scss'],
})
export class LocalitesPage implements OnInit {
  httpOptions = {
    headers : new HttpHeaders({'Content-Type':'application/json'})
  };
  private baseUrl : string;
  public searchTerm : string ;
  public localites : any = [];
  public localite_count : number = 0;
  constructor(private router : Router,private http :HttpClient, private loadingService : IonLoaderService) {
    this.baseUrl = Helper.getApiHostname();
    this.loadingService.autoLoader(1000);
    this.http.get(this.baseUrl+'api/mobile/localites/list/',this.httpOptions).subscribe(list=>{
      if(list['count']>0){
        this.localites = list['items'];
        this.localite_count = list['count'];
      }
    })
   }

  ngOnInit() {
  }
  details (localite: any){
    let extras : NavigationExtras = {
      state : {
        contacts : localite.contacts,
        localite : localite.name
      }
    } 

    this.router.navigate(['localites/details'],extras);
  }

}
