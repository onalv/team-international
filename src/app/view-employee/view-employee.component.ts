import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AppState} from '../app.state';
import {CountriesService} from '../countries.service';
import * as EmployeeActions from '../actions/employee.actions';
import {EmployeeModel} from '../models/employee.model';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.scss']
})
export class ViewEmployeeComponent implements OnInit {

  employeeForm: FormGroup;
  employee: EmployeeModel;
  countries: any[];
  area = 'kitchen';
  // dateOfBirth: NgbDateStruct;
  // hireDate: NgbDateStruct;

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private countryService: CountriesService,
    private route: ActivatedRoute,
    private employeeService: EmployeeService
  ) {}

  onSubmit() {
    this.store.dispatch(new EmployeeActions.AddEmployee(this.employeeForm.value));
    this.router.navigate(['/']);
  }

  gotoHomepage() {
    this.router.navigate(['/']);
  }

  handleServiceChange(area) {
    this.area = area;
  }

  getEmployee(): void {
    const id = +this.route.snapshot.paramMap.get('employee_id');
    console.log(this.employeeService.getEmployee(id)['id']);
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
      // area: new FormControl('Services'),
      // jobTitle: new FormControl({}, [Validators.required]),
      tipRate: new FormControl('', [Validators.required]),
    });

    this.getEmployee();

  }

  get name() { return this.employeeForm.get('name'); }
  get dateOfBirth() { return this.employeeForm.get('dateOfBirth'); }
  get country() { return this.employeeForm.get('country'); }
  get userName() { return this.employeeForm.get('userName'); }
  get hireDate() { return this.employeeForm.get('hireDate'); }
  get status() { return this.employeeForm.get('status'); }
  // get area() { return this.employeeForm.get('area'); }
  // get jobTitle() { return this.employeeForm.get('jobTitle'); }
  get tipRate() { return this.employeeForm.get('tipRate'); }

}
