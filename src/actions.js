export const ADD_EMPLOYEE = 'ADD_EMPLOYEE';
export const DELETE_EMPLOYEE = 'DELETE_EMPLOYEE';
export const EDIT_EMPLOYEE = 'EDIT_EMPLOYEE';

export const addEmployee = (employee) => {
  return {
    type: ADD_EMPLOYEE,
    payload: employee
  };
};

export const deleteEmployee = (id) => {
  return {
    type: DELETE_EMPLOYEE,
    payload: id
  };
};

export const editEmployee = (id, updatedEmployee) => {
  return {
    type: EDIT_EMPLOYEE,
    payload: { id, updatedEmployee }
  };
};
