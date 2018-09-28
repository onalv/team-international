import { Action } from '@ngrx/store';
import { EmployeeModel } from '../models/employee.model';

export const ADD_EMPLOYEE = '[EMPLOYEE] Add';
export const MODIFY_EMPLOYEE = '[EMPLOYEE] Modify';
export const DELETE_EMPLOYEE = '[EMPLOYEE] Delete';

export class AddEmployee implements Action {
  readonly type = ADD_EMPLOYEE;

  constructor(public payload: EmployeeModel) {}
}

export class ModifyEmployee implements Action {
  readonly type = MODIFY_EMPLOYEE;

  constructor(public payload: EmployeeModel) {}
}

export class DeleteEmployee implements Action {
  readonly type = DELETE_EMPLOYEE;

  constructor(public payload: number) {}
}

export type Actions = AddEmployee | ModifyEmployee | DeleteEmployee;
