import { connect } from 'react-redux';
import EmployeeTable from './EmployeeTable';
import AddEmployeeForm from './AddEmployeeForm';
import { addEmployee, deleteEmployee, editEmployee } from './actions';
import './Dashboard.css';
import Provider from 'react-redux';

function Dashboard({ employees, onAddEmployee, onDeleteEmployee, onEditEmployee }) {
  return (
    <div>
      <div><h1>EMPLOYEE TABLE:</h1></div>
      <EmployeeTable
        employees={employees}
        onDelete={onDeleteEmployee}
        onEdit={onEditEmployee}
      />
      <AddEmployeeForm onAdd={onAddEmployee} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    employees: state.employees
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddEmployee: (employee) => dispatch(addEmployee(employee)),
    onDeleteEmployee: (id) => dispatch(deleteEmployee(id)),
    onEditEmployee: (id, updatedEmployee) => dispatch(editEmployee(id, updatedEmployee))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
