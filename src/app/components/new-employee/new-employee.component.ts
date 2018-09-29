import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {Router} from '@angular/router';
import {AppState} from '../../app.state';
import {CountriesService} from '../../services/countries.service';

import * as EmployeeActions from '../../actions/employee.actions';
import * as EmployeeIdActions from '../../actions/employeeId.actions';
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
  newEmployeeId: number;
  // area = 'kitchen'; true for area "Services" and false when area is Kitchen
  // dateOfBirth: NgbDateStruct;
  // hireDate: NgbDateStruct;

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private countryService: CountriesService
  ) {}

  onSubmit() {
    this.store.dispatch(new EmployeeIdActions.IncrementId());
    this.store.select('employeeId').subscribe(employee => this.newEmployeeId = employee);

    const newEmployee = Object.assign({}, this.employeeForm.value, {id: this.newEmployeeId});
    this.store.dispatch(new EmployeeActions.AddEmployee(newEmployee));
    // console.log(this.employeeForm.value);
    // console.log(this.newEmployeeId);
    this.router.navigate(['/']);
  }

  gotoHomepage() {
    this.router.navigate(['/']);
  }

  handleServiceChange(area) {
    this.employeeForm.patchValue({area: area});
  }

  updateJobTitle(jobTitle: string) {
    this.employeeForm.patchValue({jobTitle: jobTitle});
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
      area: new FormControl('services'),
      jobTitle: new FormControl('', [Validators.required]),
      tipRate: new FormControl('', [Validators.required]),
    });
  }

  get name() { return this.employeeForm.get('name'); }
  get dateOfBirth() { return this.employeeForm.get('dateOfBirth'); }
  get country() { return this.employeeForm.get('country'); }
  get userName() { return this.employeeForm.get('userName'); }
  get hireDate() { return this.employeeForm.get('hireDate'); }
  get status() { return this.employeeForm.get('status'); }
  get area() { return this.employeeForm.get('area'); }
  get jobTitle() { return this.employeeForm.get('jobTitle'); }
  get tipRate() { return this.employeeForm.get('tipRate'); }

}
