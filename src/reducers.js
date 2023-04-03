import { ADD_EMPLOYEE, DELETE_EMPLOYEE, EDIT_EMPLOYEE } from './actions';

const initialState = {
  employees: []
};

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EMPLOYEE:
      return {
        ...state,
        employees: [...state.employees, action.payload]
      };
    case DELETE_EMPLOYEE:
      return {
        ...state,
        employees: state.employees.filter(employee => employee.id !== action.payload)
      };
    case EDIT_EMPLOYEE:
      const { id, updatedEmployee } = action.payload;
      const updatedEmployees = state.employees.map(employee => {
        if (employee.id === id) {
          return {
            ...employee,
            ...updatedEmployee
          };
        }
        return employee;
      });
      return {
        ...state,
        employees: updatedEmployees
      };
    default:
      return state;
  }
};

export default employeeReducer;
