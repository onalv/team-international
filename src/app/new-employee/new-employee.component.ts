import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {Router} from '@angular/router';
import {AppState} from '../app.state';
import {CountriesService} from '../countries.service';

import * as EmployeeActions from '../actions/employee.actions';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.scss']
})
export class NewEmployeeComponent implements OnInit {

  employeeForm: FormGroup;
  countries: any[];
  dateOfBirth: NgbDateStruct;
  hireDate: NgbDateStruct;

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private countryService: CountriesService
  ) {}

  onSubmit() {
    this.store.dispatch(new EmployeeActions.AddEmployee(this.employeeForm.value));
    this.router.navigate(['/']);
  }

  ngOnInit() {
    this.countryService.getCountries()
      .subscribe(countries => {
        this.countries = countries.map(country => country['name']);
      });

    this.employeeForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      dateOfBirth: new FormControl('', [Validators.required]),
      country: new FormControl({}, [Validators.required]),
      userName: new FormControl('', [Validators.required]),
      hireDate: new FormControl('', [Validators.required]),
      status: new FormControl(false),
      area: new FormControl('Services'),
      jobTitle: new FormControl({}, [Validators.required]),
      tipRate: new FormControl('', [Validators.required]),
    });
  }

  get name() { return this.employeeForm.get('name'); }

}
