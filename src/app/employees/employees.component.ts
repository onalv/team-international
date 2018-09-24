import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import {EmployeeModel} from '../models/employee.model';
import {AppState} from '../app.state';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  employees: Observable<EmployeeModel[]>;

  gotoNewEmployee() {
    this.router.navigate(['/add-employee']);
  }

  constructor(private store: Store<AppState>, private router: Router) {
    this.employees =  store.select('employee');
  }

  ngOnInit() {
  }

}
