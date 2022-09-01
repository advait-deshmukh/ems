import React from 'react';
import {Formik, Field, Form} from 'formik';
import backend from "../api/backend"
import Link from '../Routing/Link';

type valuesType = {
    username : string,
    password : string
}

function Login({getCredentials}){

    const onFormSubmit = (values : valuesType) => {

        getCredentials(values);

        backend.post("/login",
        {
            Username :values.username , Password: values.password 
        }, 
        {
            headers: {"Authorization" : "Basic Z3JlZW46MjIy"}
        }).then(
            (response)=>{
                alert("Login successfull")
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
    


    return (
        <div className="ui middle aligned center aligned grid" style = {{margin : "100px"}}>
            <div className= "six wide column">

                <h1 className="ui blue header"> Log In </h1>
                
                <Formik
                    initialValues={{username:'',password: ''}}
                    onSubmit={(values : valuesType) => onFormSubmit(values)}
                >
                    <Form>
                        <Field
                            id="username"
                            name="username"
                            type="text"
                            placeholder = "Enter username"
                        />

                        <Field 
                            id="password" 
                            name= "password" 
                            type = "password"
                            placeholder = "Enter password"
                        />

                        <button className="ui primary button" type ="submit"> Submit </button>
                    </Form>
                </Formik>
            </div>
            <Link href = '/signup'>
                <button className="ui button" style={{position:"absolute", top:10, left:50}}> Sign Up </button>
            </Link>
        </div> 
    );
}

export default Login; 