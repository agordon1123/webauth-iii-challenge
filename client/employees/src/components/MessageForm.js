import React, { useState } from 'react';
import { Form, TextArea, Button } from 'semantic-ui-react';
import Axios from 'axios';

const MessageForm = props => {
    console.log(props);
    const [messageBody, setMessageBody] = useState({
        user_id: 0, 
        sender_user_id: JSON.parse(localStorage.getItem('user')).id, 
        message: ''
    });
    console.log(messageBody);

    const handleSelect = e => {
        setMessageBody({ ...messageBody, user_id: e.target.value });
    };

    const handleChange = e => {
        setMessageBody({ ...messageBody, message: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log('* Message form submitted *');
        Axios
            .post('https://opti-ployment.herokuapp.com/api/messages', messageBody)
            .then(succ => console.log(succ))
            .catch(err => console.log(err));
    };

    return (
        <div className='messageForm'>
            <Form onSubmit={handleSubmit}>
                {
                    props.employees.length &&
                    <select onChange={handleSelect}>
                    {
                        props.employees.map(el => {
                            return <option name='recipient' value={el.id}>{el.username}</option>
                        })
                    }
                    </select>
                }
                <TextArea onChange={handleChange} />
                <Button.Group>
                    <Button onClick={() => props.setDrafting(false)}>Cancel</Button>
                    <Button.Or />
                    <Button type='submit' positive>Send</Button>
                </Button.Group>
            </Form>
        </div>
    );
};

export default MessageForm;
