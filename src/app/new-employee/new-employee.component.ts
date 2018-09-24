import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {Router} from '@angular/router';
import {AppState} from '../app.state';
import {CountriesService} from '../countries.service';

import * as EmployeeActions from '../actions/employee.actions';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.scss']
})
export class NewEmployeeComponent implements OnInit {

  countries: any[];

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private countryService: CountriesService
  ) {}

  addEmployee(
    name,
    userName,
    dateOfBirth,
    hireDate,
    country,
    status,
    area,
    jobTitle,
    tipRate,
    ) {
      this.store.dispatch(new EmployeeActions.AddEmployee({
        name,
        userName,
        dateOfBirth,
        hireDate,
        country,
        status,
        area,
        jobTitle,
        tipRate,
      }));

    this.router.navigate(['/']);
  }

  showMe() {
    console.log(this.countries);
  }

  ngOnInit() {
    this.countryService.getCountries()
      .subscribe(countries => {
        this.countries = countries.map(country => country['name']);
      });
  }

}
