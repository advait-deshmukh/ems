import React, {useState} from 'react';
import {Formik, Form, Field} from 'formik';
import Link from '../Routing/Link';
import backend from '../api/backend';

type valuesType = { empName:'', empMail :'', department:'', manager:'' }

function Add(){

    const [empid, setEmpId] = useState('');
    const [empname, setempname] = useState('');
    const [empmail, setempmail] = useState('');
    const [department, setdepartment] = useState('');
    const [manager, setmanager] = useState('');


    const onFormSubmit = (values : valuesType) => {
        const input = {
            empName: values.empName,
            empMail: values.empMail,
            department: values.department,
            manager: values.manager
        }

        backend.post('/employee', input, {headers:{"Authorization" : "Basic Z3JlZW46MjIy"}}).then(
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
            <h1 > Add New Employee </h1>

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

                </Form>
            </Formik>
        </div>

        /* //     <form className = 'small-container'>
        //         <h1>Add New Employee</h1>

        //         <label > Employee Id </label>
        //         <input type="text" id="id" onChange={e => setEmpId(e.target.value)} required/>

        //         <label > Full Name </label>
        //         <input type="text" id="name" onChange={e => setempname(e.target.value)} required/>

        //         <label > Email </label>
        //         <input type="text" id="mail" onChange={e => setempmail(e.target.value)} required/>

        //         <label > Department </label>
        //         <input type="text" id="department" onChange={e => setdepartment(e.target.value)} required/>

        //         <label > Manager </label>
        //         <input type="text" id="Manager" onChange={e => setmanager(e.target.value)} required/>

        //         <Link href = "/dashboard">
        //             <button onClick={(e)=> addEmployee(e)}> Submit </button>
        //         </Link>
        //         <br/>
        //         <Link href = "/dashboard">
        //             <button className="muted-button"> Cancel </button>
        //         </Link>
        //     </form>
        // </div> */
    );
}

export default Add;