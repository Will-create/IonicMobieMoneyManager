import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload-deposite',
  templateUrl: './upload-deposite.page.html',
  styleUrls: ['./upload-deposite.page.scss'],
})
export class UploadDepositePage implements OnInit {
  constructor(private route: Router) { }

  ngOnInit() {
  }

transfered_successfully() {
    this.route.navigate(['./transfered-successfully']);
  } 
}
