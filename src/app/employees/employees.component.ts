import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {Observable} from 'rxjs';

import {EmployeeModel} from '../models/employee.model';
import {EmployeeService} from '../employee.service';
import {Store} from '@ngrx/store';
import {AppState} from '../app.state';

import * as EmployeeActions from '../actions/employee.actions';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  employees: Observable<EmployeeModel[]>;
  currentYear = new Date().getFullYear();

  gotoNewEmployee() {
    this.router.navigate(['/add-employee']);
  }

  constructor(
    private store: Store<AppState>,
    private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit() {
    this.employees = this.employeeService.getEmployees();
  }

  deleteEmployee(id) {
    console.log(typeof id);
    this.store.dispatch(new EmployeeActions.DeleteEmployee(id));
  }

}
