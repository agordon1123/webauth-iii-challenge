import React, { useState, useEffect } from 'react';
import { Input, Menu, Container, Header, Message } from 'semantic-ui-react';
import Axios from 'axios';
import Friend from './Friend';

const Dashboard = props => {
    const [employees, setEmployees] = useState([]);
    const [activeTab, setActiveTab] = useState({ activeItem: 'News' })
    console.log(employees);

    useEffect(() => {
        Axios
            .get('http://localhost:5400/api/users')
            .then(res => setEmployees(res.data))
            .catch(err => console.log(err));
    }, [])

    const handleItemClick = (e, { name }) => setActiveTab({ activeItem: name });
    
    return (
        <div className='dashboard'>
            <Menu pointing>
                <Menu.Item
                    name='News'
                    active={activeTab.activeItem === 'News'}
                    onClick={handleItemClick}
                />

                <Menu.Item
                    name='Messages'
                    active={activeTab.activeItem === 'Messages'}
                    onClick={handleItemClick}
                />

                <Menu.Item
                    name='Friends'
                    active={activeTab.activeItem === 'Friends'}
                    onClick={handleItemClick}
                />

                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Input icon='search' placeholder='Search...' />
                    </Menu.Item>
                </Menu.Menu>
            </Menu>

            {
                activeTab.activeItem === 'News' ?
                <Container text>
                    <Header as='h2'>Department Newsfeed</Header>

                    <p className='dashboard-news-text'>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                    ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
                    magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                    ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
                    quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
                    arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                    Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
                    dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
                    Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
                    Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
                    viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
                    Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
                    </p>

                    <p className='dashboard-news-text'>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                    ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
                    magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                    ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
                    quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
                    arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                    Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
                    dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
                    Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
                    Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
                    viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
                    Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
                    </p>
                </Container>
                : null
            }

            {
                activeTab.activeItem === 'Messages' ?
                <Message
                    style={{maxWidth: '700px', margin: '0 auto'}}
                    icon='inbox'
                    header='You have no new messages!'
                    content='Download our app to stay up-to-date while on-the-go.'
                />
                : null
            }

            {
                activeTab.activeItem === 'Friends' ?
                // <Header as='h2'>Friends</Header>
                // &&
                employees.length && employees.map(el => {
                    return <Friend key={el.id} props={el} employees={employees} />
                })
                : null
            }
        </div>
    );
};

export default Dashboard;
