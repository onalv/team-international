import { EmployeeModel } from '../models/employee.model';
import * as EmployeeActions from '../actions/employee.actions';

const initialState: EmployeeModel = {
  id: 1,
  name: 'Andres García',
  dateOfBirth: {'year': 1982, 'month': 12, 'day': 12},
  country: 'Canada',
  userName: 'andrecito',
  hireDate: {'year': 2015, 'month': 12, 'day': 12},
  status: true,
  area: 'services',
  jobTitle: 'Waitress',
  tipRate: 0.01
};

export function reducer(state: EmployeeModel[] = [initialState], action: EmployeeActions.Actions) {
  switch (action.type) {
    case EmployeeActions.ADD_EMPLOYEE:
      return [...state, action.payload];
    case EmployeeActions.MODIFY_EMPLOYEE:
      const oldEmployee = state.find(employee => employee.id === action.payload.id);
      const modifiedEmployee = Object.assign({}, oldEmployee, action.payload);
      const newStateModify = state.filter(employee => employee.id !== action.payload.id);
      return [...newStateModify, modifiedEmployee];
    case EmployeeActions.DELETE_EMPLOYEE:
      return state.filter(employee => employee.id !== action.payload);
    default:
      return state;
  }
}
