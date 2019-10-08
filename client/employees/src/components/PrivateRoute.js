import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, loggedInUser, ...rest }) => (
    <Route
        {...rest}
        render={props => 
            localStorage.getItem('token') ? (
                <Component loggedInUser={loggedInUser} {...props} />
            ) : (
                <Redirect to='/login' />
            )
        }
    />
);

export default PrivateRoute;
