import React, { useState } from 'react';
import { Button, Input } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

const Login = props => {
    const initialState = {
        username: "",
        password: ""
    };

    const [credentials, setCredentials] = useState(initialState);
    console.log(credentials);

    const handleChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        Axios
            .post('https://opti-ployment.herokuapp.com/api/login', credentials)
            .then(res => {
                localStorage.setItem('token', res.data.token);
                props.setLoggedInUser(res.data.user);
                props.history.push('/dashboard')
                console.log(res);
            })
            .catch(err => console.log(err));
    };

    return (
        <div className='login form'>
            <h1>Log In</h1>

            <span className='register-container'>
                New here?
                <Link to='/register'>Register</Link>
            </span>

            <br />
            <br />

            <form onSubmit={handleSubmit}>
                <p>Username:</p>
                <Input
                    type='text'
                    name='username'
                    onChange={handleChange}
                    className='ui input'
                />

                <p>Password:</p>
                <Input
                    type='password'
                    name='password'
                    onChange={handleChange}
                    className='ui input'
                />

                <br />
                <br />

                <Button className='ui button' type='submit'>Login</Button>
            </form>
        </div>
    );
};

export default Login;
