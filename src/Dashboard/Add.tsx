import React, {useState, useRef, useEffect} from 'react';

function Add({employeesData, setEmployeesData, setIsAdding}){

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
        setIsAdding(false);
    }


    return (
        <div>

            <form onSubmit={(e)=> addEmployee(e)} className = 'small-container'>
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

                <input type="submit" value="Submit"/>
                <br/>
                <button className="muted-button" onClick={()=> setIsAdding(false)}> Cancel </button>
            </form>
        </div>
    );
}

export default Add;