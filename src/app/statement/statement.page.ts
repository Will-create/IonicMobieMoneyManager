import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-statement',
  templateUrl: './statement.page.html',
  styleUrls: ['./statement.page.scss'],
})
export class StatementPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  list_of_deposites() {
    this.route.navigate(['./list-of-deposites']);
  } 

}
