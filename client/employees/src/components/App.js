import React from 'react';
import { Route } from 'react-router-dom';
import '../styles/App.css';

// components
import Login from './Login';
import Register from './Register';
import Nav from './Nav';

const App = () => {
  return (
    <div className="App">
      <Nav />

      {/* <Route path='/' component={Landing} /> */}
      <Route path='/login' render={props => <Login {...props} />} />
      <Route path='/register' render={props => <Register {...props} />} />
      {/* <Route path='/dashboard' render={props => <Dashboard {...props} />} /> */}
    </div>
  );
}

export default App;
