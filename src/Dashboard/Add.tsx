import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import Link from '../Routing/Link';
import backend from '../api/backend';
import { AuthHeader } from '../Services/LocalStorage';
import * as Yup from 'yup';

type valuesType = { empName:string, empMail :string, department:string, manager:string }

function Add(){

    const onFormSubmit = (values : valuesType) => {
        const input = {
            empName: values.empName,
            empMail: values.empMail,
            department: values.department,
            manager: values.manager
        }

        backend.post('/employee', input, {headers: {"Authorization" : `${AuthHeader()}`}}).then(
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

    const validate = Yup.object({
        empName: Yup.string().required('Required'),
        empMail : Yup.string().required('Required'),
        department: Yup.string().required('Required'),
        manager: Yup.string().required('Required')
    })

    return (
        <Formik
            initialValues={{empName:'', empMail :'', department:'', manager:''}}
            onSubmit={(values : valuesType) => {onFormSubmit(values)}}
            validationSchema = {validate}
        >
            {formik => (
                <div className = 'small-container'>        
                    <h2 > Add New Employee </h2>
                <Form>
                    <label>Employee name</label>
                    <Field
                        id="empName"
                        name="empName"
                        type="text"
                        required
                    />
                    <ErrorMessage name = 'empName'/>

                    <label>Email Id</label>
                    <Field 
                        id="empMail" 
                        name= "empMail" 
                        type = "email"
                        required
                    />
                    <ErrorMessage name = 'empMail'/>
                    
                    <label>Department</label> 
                    <Field as="select" name="department" required>
                        <option value="" disabled selected hidden>Choose a department</option>
                        <option value="Features">Features</option>
                        <option value="Integration">Integration</option>
                        <option value="DevRelations">DevRelations</option>
                    </Field>
                    <ErrorMessage name = 'department'/>

                    <label>Manager</label> 
                    <Field as="select" name="manager" required>
                        <option value="" disabled selected hidden> Choose a manager</option>
                        <option value="red" >red</option>
                        <option value="green">green</option>
                        <option value="blue">blue</option>
                    </Field>
                    <ErrorMessage name = 'manager'/>

                    <br/>
                    <button className='ui secondary button' type="submit">Submit</button>
                    <Link href = '/dashboard'>                            
                        <button className='ui button'>Cancel</button>
                    </Link>

                </Form>
                </div>
            )}
        </Formik>
        
    );
}

export default Add;