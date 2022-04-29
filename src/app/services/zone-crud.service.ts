import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Helper} from '../../models/helper.models';
@Injectable({
  providedIn: 'root'
})

export class Zone {
  id : string;
  name : string;
  country : string;
}
export class ZoneCrudService {
  private baseUrl : string ;
  httpOptions = {
    headers : new HttpHeaders({'Content-Type': 'application/json'})
  }
  constructor(private http : HttpClient) { 
    this.baseUrl = Helper.getApiHostname();
  }
  
  /**
   * @param callback `function` to handle the retrieved list
   * @return List of all zones
   */
  getZonesList(callback : Function){
    this.http.get(this.baseUrl+'api/zones/list',this.httpOptions).subscribe(response =>{
      callback(response);
    })
  };
  
}
