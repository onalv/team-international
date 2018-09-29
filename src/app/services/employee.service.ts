import { Injectable } from '@angular/core';
import {EmployeeModel} from '../models/employee.model';
import {Observable, of} from 'rxjs';
import {AppState} from '../app.state';
import {Store} from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees: Observable<EmployeeModel[]>;
  employeesArray: EmployeeModel[];

  constructor(private store: Store<AppState>) {
    this.employees = this.store.select('employee');
  }

  getEmployees(): Observable<EmployeeModel[]> {
    return this.store.select('employee');
  }

  getEmployee(id: number) {
    this.employees.subscribe(employees => {
      this.employeesArray = employees as EmployeeModel[];
    });

    return this.employeesArray.filter(employee => employee.id === id)[0];
  }
}
