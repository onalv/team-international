import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.scss']
})
export class ViewEmployeeComponent implements OnInit {

  area = 'services';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoHomepage() {
    this.router.navigate(['/']);
  }

}
