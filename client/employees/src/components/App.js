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
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <div className="App">
      <Route path ='/' render={props => <Nav {...props} setLoggedInUser={setLoggedInUser} />} />
      <Route exact path='/' render={props => <Landing {...props} />} />
      <Route path='/login' render={props => <Login {...props} setLoggedInUser={setLoggedInUser} />} />
      <Route path='/register' render={props => <Register {...props} setLoggedInUser={setLoggedInUser} />} />
      <PrivateRoute path='/dashboard' user={loggedInUser} component={Dashboard} />
    </div>
  );
}

export default App;
