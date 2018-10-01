import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
// @vendors
import { Observable } from 'rxjs';
// @Components
import {NewEmployeeComponent} from '../components/new-employee/new-employee.component';

@Injectable({
  providedIn: 'root',
})
export class CanDeactivateGuard implements CanDeactivate<NewEmployeeComponent> {

  canDeactivate(
    component: NewEmployeeComponent,
  ): Observable<boolean> | boolean {

    if (component.employeeForm.pristine === true || component.submitted === true) {
      return true;
    }

    return component.dialogService.confirm('Changes have been made, do you want to discard them?');
  }
}
