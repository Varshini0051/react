import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './login.css';
import EmployeeTable from './EmployeeTable';
import AddEmployeeForm from './AddEmployeeForm';

const Login = ({setAuthenticated}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();
  const users = [
    { username: 'varshini', password: 'pass' },
    { username: 'sarini', password: 'pass1' },
    { username: 'nandha', password: 'pass2' },
    { username: 'dhivya', password: 'pass3' },
    { username: 'aravindh', password: 'pass4' }
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = users.find((user) => user.username === username && user.password === password);
    if (user) {
      setAuthenticated(true);
      history.push('/dashboard');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className='login-container'>
     
      <form className='login-form' onSubmit={handleSubmit}>
      <h2>Login</h2>
        <div>
        <label for="username"><b><i class="fa fa-user"></i>&nbsp;Username:</b></label>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <label for="password"><b><i class="fa fa-lock"></i>&nbsp;Password:</b></label>
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button></div>
        </form>
    </div>
  );
};

export default Login;
