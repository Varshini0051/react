import React,{useState} from 'react';
import { deleteEmployee, editEmployee } from './actions';

function EmployeeTable({ employees, onDelete, onEdit }) {
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);


    const handleEditClick = (employee) => {
    setSelectedEmployee(employee);
    setIsEditFormOpen(true);
    };

    const handleEditSubmit = (event) => {
      event.preventDefault();
      if (!selectedEmployee) {
        return;
    }
    
    onEdit(selectedEmployee.id, selectedEmployee);
    setSelectedEmployee(null);
    setIsEditFormOpen(false);
    };
  
  
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => (
          <tr key={employee.id}>
            <td>{employee.name}</td>
            <td>{employee.email}</td>
            <td>{employee.phone}</td>
            <td>
              <button onClick={() => (handleEditClick(employee))}>Edit</button>
              <button onClick={() => onDelete(employee.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
      {isEditFormOpen && selectedEmployee && (
<tfoot>
<tr>
<td colSpan="4">
<form onSubmit={handleEditSubmit}>
<label>
Name:
<input
type="text"
value={selectedEmployee.name}
onChange={(event) =>
setSelectedEmployee({
...selectedEmployee,
name: event.target.value,
})
}
/>
</label>
<label>
Email:
<input
type="email"
value={selectedEmployee.email}
onChange={(event) =>
setSelectedEmployee({
...selectedEmployee,
email: event.target.value,
})
}
/>
</label>
<label>
Phone:
<input
type="tel"
value={selectedEmployee.phone}
onChange={(event) =>
setSelectedEmployee({
...selectedEmployee,
phone: event.target.value,
})
}
/>
</label>
<button type="submit">Save</button>
<button type="button" onClick={() => setIsEditFormOpen(false)}>
Cancel
</button>
</form>
</td>
</tr>
</tfoot>
)}
    </table>
  );
}

export default EmployeeTable;
