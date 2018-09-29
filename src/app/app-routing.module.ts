import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {EmployeesComponent} from './components/employees/employees.component';
import {NewEmployeeComponent} from './components/new-employee/new-employee.component';
import {ViewEmployeeComponent} from './components/view-employee/view-employee.component';
import {CanDeactivateGuard} from './guards/can-deactivate.guard';

const routes: Routes = [
  { path: 'add-employee', component: NewEmployeeComponent, canDeactivate: [CanDeactivateGuard] },
  { path: 'view-employee/:employee_id', component: ViewEmployeeComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: '', redirectTo: '/employees', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
