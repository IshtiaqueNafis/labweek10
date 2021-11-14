import React from 'react';
import {useDispatch} from "react-redux";
import {Button, Header, Segment} from "semantic-ui-react";
import {Form, Formik} from 'formik';
import * as Yup from 'yup';
import MyTextInput from "../../../common/Form/MyTextInput";
import MySelectInput from "../../../common/Form/MySelectInput";
import {ProvinceData} from "../../../data/Province";
import {Link} from "react-router-dom";
import {createData} from "../../../redux/addingAction";


const ProfileForm = ({history}) => {
    const dispatch = useDispatch();


    const initialValues = {
        email: '',
        name: '',
        address: '',
        city: '',
        province: '',
        postalCode: ''

    }

    const validationSchema = Yup.object({
        email: Yup.string().required(),
        name: Yup.string().required(),
        address: Yup.string().required(),
        city: Yup.string().required(),
        province: Yup.string().required(),
        postalCode: Yup.string().required(),

    })

    return (
        <Segment clearing>

            <Formik initialValues={initialValues} // this is the value for inital items for the forms
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                        dispatch(createData({...values}))
                        history.push('/')
                    }
                    }
            >
                {({isSubmitting, dirty, isValid}) => (
                    <Form className={'ui form'}>
                        <Header sub color={'teal'} content={'Data Entry Form'}/>
                        <MyTextInput name={'email'} placeholder={'Email'}/>
                        <MyTextInput name={'name'} placeholder={'name'}/>
                        <MyTextInput name={'city'} placeholder={'city'}/>
                        <MyTextInput name={'address'} placeholder={'address'}/>
                        <MySelectInput name={'province'} placeholder={'Province'}
                                       options={ProvinceData}></MySelectInput>
                        <MyTextInput name={'postalCode'} placeholder={'PostalCode'}/>

                        <Button loading={isSubmitting} // this will load the screen
                                disabled={!isValid || !dirty || isSubmitting}
                            // region ***{!isValid || !dirty || isSubmitting} ***
                            /*
                            !isValid --> means fields are empty
                            !dirty values are  deeply equal from initial values
                            isSubmitting means submission is in progress.
                             */

                            //endregion

                                type="submit" floated={'right'} positive content={'Submit'}/>
                        <Button
                            as={Link}
                            to={'/'}

                            type="submit"
                            floated={'right'}
                            content={'Cancel'}
                            disabled={isSubmitting}

                        />
                    </Form>
                )}


            </Formik>

        </Segment>
    );
};

export default ProfileForm;
