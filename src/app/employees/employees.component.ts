import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {Observable} from 'rxjs';

import {EmployeeModel} from '../models/employee.model';
import {EmployeeService} from '../employee.service';

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

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit() {
    this.employees = this.employeeService.getEmployees();
  }

}
