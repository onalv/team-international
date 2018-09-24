import { EmployeeModel } from '../models/employee.model';
import * as EmployeeActions from '../actions/employee.actions';

const initialState: EmployeeModel = {
  name: 'Andres García',
  // dateOfBirth: new Date(1983, 4, 12),
  dateOfBirth: {'year': 1982, 'month': 12, 'day': 12},
  country: 'Canada',
  userName: 'andrecito',
  // hireDate: new Date(2015, 5, 15 ),
  hireDate: {'year': 2015, 'month': 12, 'day': 12},
  status: true,
  area: 'Services',
  jobTitle: 'Waitress',
  tipRate: 0.01
};

export function reducer(state: EmployeeModel[] = [initialState], action: EmployeeActions.Actions) {
  switch (action.type) {
    case EmployeeActions.ADD_EMPLOYEE:
      return [...state, action.payload];
    default:
      return state;
  }
}
