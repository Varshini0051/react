import React,{useState} from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Dashboard from './Dashbord';
import Login from './Login'
import PrivateRoute from './Hoc';
import { connect } from 'react-redux';
import Provider from 'react-redux';
//import EmployeeTable from './EmployeeTable';
//import AddEmployeeForm from './AddEmployeeForm';

function App () {
  const [authenticated, setAuthenticated] = useState(false);
  return (
    <Router>
    <Switch>
    <Route path="/login" render={()=> <Login setAuthenticated={setAuthenticated}/>}/>
    <PrivateRoute path="/dashboard" component={Dashboard} isAuthenticated={authenticated}/>
    <Redirect exact from='/' to ='/dashboard'/>
    </Switch>
    </Router>
  );
}

export default App;
