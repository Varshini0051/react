import React,{useState} from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Dashboard from './Dashbord';
import Login from './Login'
import PrivateRoute from './Hoc';

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
