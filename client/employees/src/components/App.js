import React from 'react';
import { Route } from 'react-router-dom';
import '../styles/App.css';

// components
import Nav from './Nav';
import Landing from './Landing';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import PrivateRoute from '../components/PrivateRoute';

const App = () => {
  return (
    <div className="App">
      <Route path ='/' render={props => <Nav {...props} />} />
      <Route exact path='/' render={props => <Landing {...props} />} />
      <Route path='/login' render={props => <Login {...props} />} />
      <Route path='/register' render={props => <Register {...props} />} />
      <PrivateRoute path='/dashboard' component={Dashboard} />
    </div>
  );
}

export default App;
