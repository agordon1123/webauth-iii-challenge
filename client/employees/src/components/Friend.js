import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const Friend = ({ props }) => {
    return (
        <div className='friend'>
            <Card.Group>
                <Card>
                    <Image src='https://www.mountaineers.org/images/placeholder-images/placeholder-contact-profile/image_preview' />
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
