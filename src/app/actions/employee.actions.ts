import { Action } from '@ngrx/store';
import { EmployeeModel } from '../models/employee.model';

export const ADD_EMPLOYEE = '[EMPLOYEE] Add';

export class AddEmployee implements Action {
  readonly type = ADD_EMPLOYEE;

  constructor(public payload: EmployeeModel) {}
}

export type Actions = AddEmployee;
