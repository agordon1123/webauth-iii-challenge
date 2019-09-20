import React from 'react';
import { Card } from 'semantic-ui-react';

const Friend = ({ props }) => {
    return (
        <div>
            <Card.Group>
                <Card>
                    <Card.Content>
                        <Card.Header content={props.username} />
                        <Card.Meta content={props.department} />
                        <Card.Description content={`${props.username} is a ${props.department} living in New York.`} />
                    </Card.Content>
                </Card>
            </Card.Group>
        </div>
    );
};

export default Friend;
