import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ExtraOptions, NavigationExtras, Router } from '@angular/router';
import { Helper } from 'src/models/helper.models';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.page.html',
  styleUrls: ['./stats.page.scss'],
})
export class StatsPage implements OnInit {
  httpOptions = {
    headers : new HttpHeaders({'Content-Type' : 'application/json'})
  }
  public searchTerm : string;
  public numbers : any = [];
  public numbers_count : number = 0;
  private baseUrl : string;
  constructor(private router : Router, private http : HttpClient) { 
    this.baseUrl = Helper.getApiHostname();
    this.http.get(this.baseUrl+'api/mobile/numbers/list/',this.httpOptions).subscribe(list=>{
      if(list['count'] > 0){
        this.numbers = list['items'];
        this.numbers_count = list['items'].length;
      }
    });
  }
  ngOnInit() {
  }
  details(number : any){
    let extras : NavigationExtras = {
      state : {
        number : number
        
      }
    };
    this.router.navigate(['stats/details'],extras);

  }
  deposit(number : any){
    let extras : NavigationExtras = {
      state : {
        number : number
        
      }
    };
    this.router.navigate(['deposits/shortforms'],extras);

  }
  withdraw(number : any){
    let extras : NavigationExtras = {
      state : {
        number : number
      }
    };
    this.router.navigate(['withdrawals/shortforms'],extras);
  }
  
}
