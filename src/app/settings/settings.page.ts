import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
  general(){
    this.router.navigate(['settings/generals']);

  }

  language(){
      this.router.navigate(['./change-language']);
  }
  server(){
    this.router.navigate(['settings/server']);

    
  }
  user(){
    this.router.navigate(['./profile']);

  }

}
