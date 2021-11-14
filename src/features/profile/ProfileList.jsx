import React from 'react';
import ProfileListItem from "./ProfileListItem";
import {v4 as uuidv4} from "uuid";

const ProfileList = ({profiles}) => {
    return (
        <>
            {profiles.map(profile => (
                <ProfileListItem key={uuidv4()} profile={profile}/>
            ))}

        </>
    );
};

export default ProfileList;
