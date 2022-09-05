import React, {useState} from 'react';
import {Formik, Form, Field} from 'formik';
import Link from '../Routing/Link';
import backend from '../api/backend';

type valuesType = { empName:string, empMail :string, department:string, manager:string }

function Add({token}){

    const onFormSubmit = (values : valuesType) => {
        const input = {
            empName: values.empName,
            empMail: values.empMail,
            department: values.department,
            manager: values.manager
        }

        backend.post('/employee', input, {headers: {"Authorization" : `Basic ${token}`}}).then(
            (response)=>{
                alert("Employee added successfully")
                window.history.pushState({}, "", "/dashboard")
                const navEvent = new PopStateEvent('popstate');
                window.dispatchEvent(navEvent);     
            }
        ).catch(
            (error)=>{
                alert("Error while adding employee");
            }
        )
    
    }


    return (
        <div className = 'small-container'>        
            <h2 > Add New Employee </h2>

            <Formik
                initialValues={{empName:'', empMail :'', department:'', manager:''}}
                onSubmit={(values : valuesType) => {onFormSubmit(values)}}
            >
                <Form>
                    <label>Employee name</label>
                    <Field
                        id="empName"
                        name="empName"
                        type="text"
                    />

                    <label>Email Id</label>
                    <Field 
                        id="empMail" 
                        name= "empMail" 
                        type = "email"
                    />
                    
                    <label>Department</label> 
                    <Field 
                        id="department" 
                        name= "department" 
                        type = "text"
                    />

                    <label>Manager</label> 
                    <Field 
                        id="manager" 
                        name= "manager" 
                        type = "text"
                    />

                    <button className='ui secondary button' type="submit">Submit</button>
                    <Link href = '/dashboard'>                            
                        <button className='ui button'>Cancel</button>
                    </Link>

                </Form>
            </Formik>
        </div>
    );
}

export default Add;