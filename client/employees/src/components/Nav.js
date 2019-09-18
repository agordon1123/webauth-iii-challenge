import React from 'react';
import { NavLink } from 'react-router-dom';

const logout = () => {
    localStorage.removeItem('token');
}

const Nav = () => {
    return (
        <div className='nav'>
            <p>Hello from Nav</p>
            <NavLink to='/dashboard'>Home</NavLink>
            <NavLink to='/login'>Login</NavLink>
            <NavLink to='/' onClick={() => logout()} >Logout</NavLink>
        </div>
    );
};

export default Nav;
