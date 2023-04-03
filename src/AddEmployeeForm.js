import React, { useState } from 'react';

function AddEmployeeForm({ onAdd }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newEmployee = {
      id: Date.now(),
      name: name,
      email: email,
      phone: phone,
    };
    onAdd(newEmployee);
    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <label>
        Phone:
        <input
          type="tel"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
      </label>
      <button type="submit">Add Employee</button>
    </form>
  );
}

export default AddEmployeeForm;
