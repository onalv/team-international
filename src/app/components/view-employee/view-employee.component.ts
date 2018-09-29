import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.state';
import {CountriesService} from '../../services/countries.service';
import * as EmployeeActions from '../../actions/employee.actions';
import {EmployeeModel} from '../../models/employee.model';
import {EmployeeService} from '../../services/employee.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.scss']
})
export class ViewEmployeeComponent implements OnInit {

  employeeForm: FormGroup;
  employee: EmployeeModel;
  countries: any[];
  idEmployee: number;
  viewMode: any;
  // area = 'kitchen';
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
    const newEmployee = Object.assign({}, this.employeeForm.value, {id: this.idEmployee});
    this.store.dispatch(new EmployeeActions.ModifyEmployee(newEmployee));
    this.router.navigate(['/']);
    console.log(newEmployee);
  }

  updateJobTitle(jobTitle: string) {
    this.employeeForm.patchValue({jobTitle: jobTitle});
  }

  gotoHomepage() {
    this.router.navigate(['/']);
  }

  handleServiceChange(area) {
    this.employeeForm.patchValue({area: area});
    this.employeeForm.patchValue({jobTitle: ''});
  }

  getEmployee(): void {
    this.idEmployee = +this.route.snapshot.paramMap.get('employee_id');
    this.employee = this.employeeService.getEmployee(this.idEmployee);
  }

  ngOnInit() {
    this.getEmployee();
    this.countryService.getCountries()
      .subscribe(countries => {
        this.countries = countries.map(country => country['name']);
      });
    this.route
      .queryParams.subscribe(params => this.viewMode = !!params['viewmode'] || false);
    console.log(this.viewMode);
    this.employeeForm = new FormGroup({
      name: new FormControl({value: this.employee['name'], disabled: this.viewMode}, [Validators.required]),
      dateOfBirth: new FormControl({value: this.employee['dateOfBirth'], disabled: this.viewMode}, [Validators.required]),
      country: new FormControl({value: this.employee['country'], disabled: this.viewMode}, [Validators.required]),
      userName: new FormControl({value: this.employee['userName'], disabled: this.viewMode}, [Validators.required]),
      hireDate: new FormControl({value: this.employee['hireDate'], disabled: this.viewMode}, [Validators.required]),
      status: new FormControl({value: this.employee['status'], disabled: this.viewMode}),
      area: new FormControl({value: this.employee['area'], disabled: this.viewMode}),
      jobTitle: new FormControl({value: this.employee['jobTitle'], disabled: this.viewMode}, [Validators.required]),
      tipRate: new FormControl({value: this.employee['tipRate'], disabled: this.viewMode}, [Validators.required]),
    });
    // this.area = this.employee['area'];
    // this.employeeForm.patchValue({name: this.employee['name']});

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
