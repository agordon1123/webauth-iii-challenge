import React, { useState } from 'react';
import Axios from 'axios';
import { Button, Input } from 'semantic-ui-react';

const Signup = props => {
    const initialState = {
        username: "",
        password: "",
        department: ""
    };

    const [newUser, setNewUser] = useState(initialState);
    console.log(newUser);

    const handleChange = e => {
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        Axios
            .post('https://opti-ployment.herokuapp.com/api/register', newUser)
            .then(res => {
                console.log(res);
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('user', JSON.stringify(res.data.user));
                props.history.push('/dashboard');
            })
            .catch(err => console.log(err));
    };

    return (
        <div className='signup form'>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <p>Create a username:</p>
                <Input
                    type='text'
                    name='username'
                    onChange={handleChange}
                />

                <p>Create a password:</p>
                <Input
                    type='password'
                    name='password'
                    onChange={handleChange}
                />

                <p>Include your department:</p>
                <Input
                    type='text'
                    name='department'
                    onChange={handleChange}
                />

                <br />
                <br />

                <Button type='submit'>Submit</Button>
            </form>
        </div>
    );
};

export default Signup;
