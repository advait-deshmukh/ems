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
            (response)=>{
                alert("Employee edited successfully")
                window.history.pushState({}, "", "/dashboard")
                const navEvent = new PopStateEvent('popstate');
                window.dispatchEvent(navEvent);     
            }
        ).catch(
            (error)=>{
                alert("Error while editing employee");
            }
        )
    }   


    return (
        <div className = 'small-container'>        
            <h1 > Edit Employee </h1>

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

                </Form>
            </Formik>
        </div>
    );
    // return (
    //     <div>
    //         <form onSubmit = {(e) => onFormSubmit(e)} className = 'small-container'>
    //             <h1>Edit Employee Information</h1>
                
    //         {/* Employee Id not allowed to be edited. */}
    //             <label > Employee Id  </label>
    //             <input value ={`${empid} `} id="id" onChange={e => setEmpId(e.target.value)} disabled type="text"/>

    //             <label > Full Name </label>
    //             <input value ={empname} id="name" onChange={e => setempname(e.target.value)} required type="text"/>

    //             <label > Email </label>
    //             <input value ={empmail} id="mail" onChange={e => setempmail(e.target.value)} required type="text"/>

    //             <label > Department </label>
    //             <input value ={department} id="department" onChange={e => setdepartment(e.target.value)} required type="text"/>

    //             <label > Manager </label>
    //             <input value ={manager} id="Manager" onChange={e => setmanager(e.target.value)} required type="text"/>

    //             <Link href = "/dashboard">
    //                 <button onClick={(event)=> onFormSubmit(event)}> Submit </button>
    //             </Link>
    //             <br/>
    //             <Link href = "/dashboard">
    //                 <button className="muted-button"> Cancel </button>
    //             </Link>
    //         </form>
    //     </div>
    // );
}

export default Edit;