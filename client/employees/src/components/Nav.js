import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = props => {
    console.log(props);

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        props.history.push('/');
    };
    
    return (
        <div className='nav'>
            <NavLink className='nav-link' to='/dashboard'>Home</NavLink>
            <NavLink className='nav-link' to='/login'>Login</NavLink>
            <NavLink className='nav-link' to='/' onClick={() => logout()} >Logout</NavLink>
        </div>
    );
};

export default Nav;
