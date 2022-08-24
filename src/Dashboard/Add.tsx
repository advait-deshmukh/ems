import React, {useState} from 'react';
import Link from '../Routing/Link';

function Add({employeesData, setEmployeesData}){

    const [empid, setEmpId] = useState('');
    const [empname, setempname] = useState('');
    const [empmail, setempmail] = useState('');
    const [department, setdepartment] = useState('');
    const [manager, setmanager] = useState('');


    function addEmployee(e){
        e.preventDefault()
        const newEmployee = { empid, empname, empmail, department, manager};
        employeesData.push(newEmployee);
        //*update the database along with updating the state*//
        setEmployeesData(employeesData);
    }


    return (
        <div>

            <form className = 'small-container'>
                <h1>Add New Employee</h1>

                <label > Employee Id </label>
                <input type="text" id="id" onChange={e => setEmpId(e.target.value)} required/>

                <label > Full Name </label>
                <input type="text" id="name" onChange={e => setempname(e.target.value)} required/>

                <label > Email </label>
                <input type="text" id="mail" onChange={e => setempmail(e.target.value)} required/>

                <label > Department </label>
                <input type="text" id="department" onChange={e => setdepartment(e.target.value)} required/>

                <label > Manager </label>
                <input type="text" id="Manager" onChange={e => setmanager(e.target.value)} required/>

                <Link href = "/dashboard">
                    <button onClick={(e)=> addEmployee(e)}> Submit </button>
                </Link>
                <br/>
                <Link href = "/dashboard">
                    <button className="muted-button"> Cancel </button>
                </Link>
            </form>
        </div>
    );
}

export default Add;