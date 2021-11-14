import React from 'react';
import {useSelector} from "react-redux";
import ProfileList from "./ProfileList";
import {Button, Grid} from "semantic-ui-react";
import {Link} from "react-router-dom";

const ProfileDashBoard = () => {
  const  data = useSelector(state => state.data.data);
    console.log(data);

    return (
        <Grid>
            <Grid.Row>

                <ProfileList profiles={data}/>
            </Grid.Row>

            <Grid.Row>

                <Button
                    as={Link}
                    to={'/new'}
                    type="submit"
                    color={'violet'}
                    floated={'right'}
                    content={'add a new data'}


                />
            </Grid.Row>


        </Grid>
    );
};

export default ProfileDashBoard;
