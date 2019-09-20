import React from 'react';
import { Button, Header, Icon } from 'semantic-ui-react'

const Landing = props => {
    return (
        <div>
            <Header
                as='h1'
                content='Opti-ployment'
                style={{
                    fontSize: '4em',
                    fontWeight: 'normal',
                    marginBottom: 0,
                    marginTop: '3em',
                }}
                />

            <Header
                as='h2'
                content='Do whatever you want when you want to.'
                style={{
                    fontSize: '1.7em',
                    fontWeight: 'normal',
                    marginTop: '1.5em',
                }}
                />
            <Button onClick={() => props.history.push('/register')} primary size='huge'>
                Get Started
                <Icon name='right arrow' />
            </Button>
        </div>
    );
};

export default Landing;
