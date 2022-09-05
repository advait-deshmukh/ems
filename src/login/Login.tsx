import React from 'react';
import {Formik, Field, Form} from 'formik';
import backend from "../api/backend"
import Link from '../Routing/Link';

type valuesType = {
    username : string,
    password : string
}

function Login({token, setToken, setLogged}){

    const onFormSubmit = (values : valuesType) => {
        token = window.btoa(values.username + ':' + values.password);
        setToken(token);

        backend.post("/login",
        {
            Username :values.username , Password: values.password 
        }, 
        {
            headers: {"Authorization" : `Basic ${token}`}
        }).then(
            (response)=>{
                setLogged(true);
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

                <h1 className="ui header"> Log In </h1>
                
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

                        <button className="ui secondary button" type ="submit"> Submit </button>
                        <Link href = '/signup'>
                            <button className="ui button"> Sign Up </button>
                        </Link>
                    </Form>
                </Formik>
            </div>
            
        </div> 
    );
}

export default Login; 