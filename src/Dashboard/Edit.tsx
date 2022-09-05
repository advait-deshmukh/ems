import React,{useState} from 'react';
import {Formik, Form, Field, validateYupSchema} from 'formik'
import backend from '../api/backend';
import Link from '../Routing/Link';

type valuesType = { empName:string, empMail :string, department:string, manager:string }

function Edit({ selectedEmployee, token }){

    const onFormSubmit = (values : valuesType) =>{
        const input = {
            empName: values.empName,
            empMail: values.empMail,
            department: values.department,
            manager: values.manager
        }
        const id = selectedEmployee.id;

        backend.put(`/employee/${id}`, input, {headers:{"Authorization" : `Basic ${token}`}}).then(
            ()=>{
                alert("Employee edited successfully")
                window.history.pushState({}, "", "/dashboard")
                const navEvent = new PopStateEvent('popstate');
                window.dispatchEvent(navEvent);     
            }
        ).catch(
            ()=>{
                alert("Error while editing employee");
            }
        )
    }   


    return (
        <div className = 'small-container'>        
            <h2 > Edit Employee </h2>

            <Formik
                initialValues={{
                    empName: selectedEmployee.empName, 
                    empMail: selectedEmployee.empMail, 
                    department: selectedEmployee.department, 
                    manager: selectedEmployee.manager
                }}
                onSubmit={(values : valuesType) => {onFormSubmit(values)}}
            >
                <Form>
                    <label>Employee name</label>
                    <Field
                        id="empName"
                        name="empName"
                        type="text"
                        placeholder = {selectedEmployee.empName}
                    />

                    <label>Email Id</label>
                    <Field 
                        id="empMail" 
                        name= "empMail" 
                        type = "email"
                        placeholder = {selectedEmployee.empMail}
                    />
                    
                    <label>Department</label> 
                    <Field 
                        id="department" 
                        name= "department" 
                        type = "text"
                        placeholder = {selectedEmployee.department}
                    />

                    <label>Manager</label> 
                    <Field 
                        id="manager" 
                        name= "manager" 
                        type = "text"
                        placeholder = {selectedEmployee.manager}
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
export default Edit;