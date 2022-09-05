import React from 'react';
import { Formik, Field, Form } from 'formik';
import backend from '../api/backend';
import Link from '../Routing/Link'

type valueType = {
    username: string,
    password: string
}

const onFormSubmit = (values: valueType) => {
    backend.post("/newuser", {id :values.username , password: values.password }).then(
        (respoonse)=>{
            alert("User created");
            window.history.pushState({}, "", "/");
            const navEvent = new PopStateEvent('popstate');
            window.dispatchEvent(navEvent);     
        }
    ).catch(
        (Error)=>{
           alert(Error.response.data.error.message);
        }
    )
}

const Signup = () => {

    return (
        <div className="ui middle aligned center aligned grid" style = {{margin : "100px"}} >
            <div className= "six wide column">

                <h1 className="ui blue header"> Sign up </h1>
                <div data-testid="home">
                    <Formik
                        initialValues={{username:'',password: ''}}
                        onSubmit={(values: valueType) => onFormSubmit(values)}
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

                            <button className='ui primary button' type="submit">Submit</button>
                            <Link href = '/'>                            
                                <button className='ui button'>Cancel</button>
                            </Link>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div> 
    );
}

export default Signup;  

