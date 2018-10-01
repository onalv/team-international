import * as EmployeeIdActions from '../actions/employeeId.actions';

const initialState = 1;

export function reducerId(state: number = initialState, action: EmployeeIdActions.Actions) {
  switch (action.type) {
    case EmployeeIdActions.INCREMENT_ID:
      return state + 1;
    default:
      return state;
  }
}
