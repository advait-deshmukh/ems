//removing the selectedId from the local storage after clicking on submit or cancel, so that directly going
//to /edit url wouldn't show random employees info.
import React,{useEffect, useState} from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik'
import backend from '../api/backend';
import Link from '../Routing/Link';
import { AuthHeader, getSelectedId, removeSelectedId } from '../Services/LocalStorage';
import * as Yup from 'yup';

type valuesType = { empName:string, empMail :string, department:string, manager:string };
type employeeType = {
    id : number,
    empName : string,
    empMail: string,
    department: string,
    manager: string
}

function Edit(){

    const [selectedEmployee, setSelectedEmployee] = useState<employeeType>( {id : 0, empName : "", empMail: "", department: "",manager: ""})


    //fetching the data of selected employee
    useEffect(()=>{
        backend.get(`/employee/${getSelectedId()}`, {headers:{"Authorization" : `${AuthHeader()}`}}).then(
            (response)=>{
                setSelectedEmployee(response.data.results);
            }
        ).catch(
            ()=>{
                alert("Error shworing edit page");
            }
        )

    }, [])
    
    
    const onFormSubmit = (values : valuesType) =>{
        const id = getSelectedId(); removeSelectedId();
        
        const input = {
            empName: values.empName,
            empMail: values.empMail,
            department: values.department,
            manager: values.manager
        }

        //submitting the edited data of the selected employee
        backend.put(`/employee/${id}`, input, {headers:{"Authorization" : `${AuthHeader()}`}}).then(
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

    const validate = Yup.object({
        empName: Yup.string().required('Required'),
        empMail : Yup.string().required('Required'),
        department: Yup.string().required('Required'),
        manager: Yup.string().required('Required')
    })


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
                validationSchema = {validate}
                enableReinitialize
            >
                <Form>
                    <label>Employee name</label>
                    <Field
                        id="empName"
                        name="empName"
                        type="text"
                    />
                    <ErrorMessage name = 'empName'/>

                    <label>Email Id</label>
                    <Field 
                        id="empMail" 
                        name= "empMail" 
                        type = "email"
                    />
                     <ErrorMessage name = 'empMail'/>
                    
                    <label>Department</label> 
                    <Field as="select" name="department" required>
                        <option defaultValue={selectedEmployee.department} > {selectedEmployee.department} </option>
                        {selectedEmployee.department === "DevRelations" ? null : <option value="DevRelations">Dev Relations</option>}
                        {selectedEmployee.department === "Features" ? null : <option value="Features">Features</option>}
                        {selectedEmployee.department === "Integration" ? null : <option value="Integration">Integration</option>}
                    </Field>
                    <ErrorMessage name = 'department'/>

                    <label>Manager</label> 
                    <Field as="select" name="manager" required>
                        <option value={selectedEmployee.manager} selected>{selectedEmployee.manager}</option>
                        {selectedEmployee.manager === "red" ? null :<option value="red" >red</option>}
                        {selectedEmployee.manager === "green" ? null :<option value="green">green</option>}
                        {selectedEmployee.manager === "blue" ? null :<option value="blue">blue</option>}
                    </Field>
                    <ErrorMessage name = 'manager'/>

                    <br/>
                    <button className='ui secondary button' type="submit">Submit</button>
                    <Link href = '/dashboard'>                            
                        <button className='ui button' onClick= {()=>removeSelectedId()}>Cancel</button>
                    </Link>

                </Form>
            </Formik>
        </div>
    );
}
export default Edit;