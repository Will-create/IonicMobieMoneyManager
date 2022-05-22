import { Component, OnInit, NgZone } from '@angular/core';
import { NavigationExtras,Router } from '@angular/router';
//import {ZoneCrudService} from '../services/zone-crud.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Helper } from 'src/models/helper.models';
import { IonLoaderService } from '../services/ion-loader.service';
@Component({
  selector: 'app-zones',
  templateUrl: './zones.page.html',
  styleUrls: ['./zones.page.scss'],
})
export class ZonesPage implements OnInit {
  httOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private baseUrl: string;
  public zones: any = [];
  public zones_count : number = 0;
  public searchTerm : string;
  constructor(private router: Router, private http: HttpClient,private loadingService : IonLoaderService) {

    this.baseUrl = Helper.getApiHostname();
    this.loadingService.autoLoader();
    this.http.get(this.baseUrl + 'api/mobile/zones/list', this.httOptions).subscribe(list => {
      console.log(list);
      if(list['items']){
        this.zones_count = list['items'].length;
        this.zones = list['items'];
      }
    })
  }
  ngOnInit() {
  }
  details(zone: any) {
    let extras : NavigationExtras = {
      state : {
        localities : zone.localities,
        zone : zone.name

      }
    };

    this.router.navigate(['zones/details'],extras);
  }

}
