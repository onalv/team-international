import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {EmployeesComponent} from './employees/employees.component';
import {NewEmployeeComponent} from './new-employee/new-employee.component';
import {ViewEmployeeComponent} from './view-employee/view-employee.component';
import {EditEmployeeComponent} from './edit-employee/edit-employee.component';

const routes: Routes = [
  { path: 'add-employee', component: NewEmployeeComponent },
  { path: 'edit-employee', component: EditEmployeeComponent },
  { path: 'view-employee', component: ViewEmployeeComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: '', redirectTo: '/employees', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
