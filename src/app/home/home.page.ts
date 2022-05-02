import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Helper } from 'src/models/helper.models';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  httpOptions  = {
    headers : new HttpHeaders({'Content-Type' : 'application'})
  }
  private baseUrl : string;

  public distributors : any = [
  ];
  constructor(private route: Router, private http : HttpClient){
    this.baseUrl = Helper.getApiHostname();
    this.http.get(this.baseUrl+'api/mobile/distributors/list/',this.httpOptions).subscribe(list=>{
      if(list['count']>0)
      this.distributors = list['items'];
    })
  }
  ngOnInit() {
    
  }
	
  statement() {
    this.route.navigate(['./statement']);
  } 
  account() {
    this.route.navigate(['./account']);
  } 
  zones() {
    this.route.navigate(['./zones']);
  } 
  localites() {
    this.route.navigate(['./localites']);
  } 
  contacts() {
    this.route.navigate(['./contacts']);
  } 
  deposits() {
    this.route.navigate(['./deposits']);
  } 
  withdrawals() {
    this.route.navigate(['./withdrawals']);
  } 
  stats() {
    this.route.navigate(['./stats']);
  } 
  settings() {
    this.route.navigate(['./settings']);
  } 
  more() {
    this.route.navigate(['./more']);
  } 
 fund_transfer_options() {
    this.route.navigate(['./fund-transfer-options']);
  } 
 loan() {
    this.route.navigate(['./loan']);
  } 
 list_of_deposites() {
    this.route.navigate(['./list-of-deposites']);
  }  
 loan_info() {
    this.route.navigate(['./loan-info']);
  } 
  dist(dist){
    let extras :NavigationExtras = {
      state : dist
    }
    this.route.navigate(['distributors'],extras);
  }
}
 