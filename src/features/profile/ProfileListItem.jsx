import React from 'react';
import {Icon, Label, Message} from "semantic-ui-react";

const ProfileListItem = ({profile}) => {
    const {address, postalCode, province, name, email, city} = profile;
    return (
        <Message>
            <Message.Header>Profile Information</Message.Header>
            <Label>
                <Icon name='user' /> {name}




            </Label>

            <Label>
                <Icon name='envelope open outline' /> {email}
            </Label>

            <Label>
                <Icon name='address book outline' />  {address}
            </Label>

            <Label>
                <Icon name='warehouse' /> {city}
            </Label>

            <Label>
                <Icon name='slideshare' /> {postalCode}
            </Label>


            <Label>
                <Icon name='slideshare' /> {province}
            </Label>

        </Message>
    );
};

export default ProfileListItem;
