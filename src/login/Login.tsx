import React from 'react';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import backend from "../api/backend"
import Link from '../Routing/Link';
import * as Yup from 'yup';

type valuesType = {
    username : string,
    password : string
}

function Login(){

    const onFormSubmit = (values : valuesType) => {
        //generating the token here for now, will get it from the backend later
        const token = window.btoa(values.username + ':' + values.password);

        backend.post("/login",
        {
            Username :values.username , Password: values.password 
        }, 
        {
            headers: {"Authorization" : `Basic ${token}`}
        }).then(
            (response)=>{
                localStorage.setItem("token", token);
                window.history.pushState({}, "", "/dashboard")
                const navEvent = new PopStateEvent('popstate');
                window.dispatchEvent(navEvent);     
            }
        ).catch(
            (error)=>{
                alert("Login failed. Try again")
            } 
        );
    }                
    
type errorType = {
    username : string,
    password : string
}

    const validate = Yup.object({
        username: Yup.string().required('Required'),
        password : Yup.string().required('Required')
    })


    return (       
        <Formik
            initialValues={{username:'',password: ''}}
            onSubmit={(values : valuesType) => onFormSubmit(values)}
            validationSchema = {validate}
        >
            {formik => (
                <div className="ui middle aligned center aligned grid" style = {{margin : "100px"}}>
                    <div className= "six wide column">
                        <h1 className="ui header"> Log In </h1>
                        <Form>
                            <Field
                                id="username"
                                name="username"
                                type="text"
                                placeholder = "Enter username"
                            />
                            <ErrorMessage name = 'username'/>

                            <Field 
                                id="password" 
                                name= "password" 
                                type = "password"
                                placeholder = "Enter password"
                            />
                            <ErrorMessage name = 'password'/> <br/>

                            <button className="ui secondary button" type ="submit"> Submit </button>
                            <Link href = '/signup'>
                                <button className="ui button"> Sign Up </button>
                            </Link>
                        </Form>
                    </div>
                </div>
            )}
        </Formik>  
    );
}

export default Login; 