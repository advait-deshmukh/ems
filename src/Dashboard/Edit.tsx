import React,{useState} from 'react';
import Link from '../Routing/Link';

function Edit({employeesData, selectedEmployee, setEmployeesData }){
    
    const [empid, setEmpId] = useState(selectedEmployee.empid);
    const [empname, setempname] = useState(selectedEmployee.empname);
    const [empmail, setempmail] = useState(selectedEmployee.empmail);
    const [department, setdepartment] = useState(selectedEmployee.department);
    const [manager, setmanager] = useState(selectedEmployee.manager);


    function onFormSubmit(event){
        
        event.preventDefault();
        const editedEmployee = {empid, empname, empmail, department, manager};

        for(let i=0; i<employeesData.length; i++){
            if(employeesData[i].empid === editedEmployee.empid){
                employeesData.splice(i, 1, editedEmployee);
                break;
            }
        }

        //*update the database along with updating the state*//

        setEmployeesData(employeesData);
    }   


    return (
        <div>
            <form onSubmit = {(e) => onFormSubmit(e)} className = 'small-container'>
                <h1>Edit Employee Information</h1>
                
            {/* Employee Id not allowed to be edited. */}
                <label > Employee Id  </label>
                <input value ={`${empid} `} id="id" onChange={e => setEmpId(e.target.value)} disabled type="text"/>

                <label > Full Name </label>
                <input value ={empname} id="name" onChange={e => setempname(e.target.value)} required type="text"/>

                <label > Email </label>
                <input value ={empmail} id="mail" onChange={e => setempmail(e.target.value)} required type="text"/>

                <label > Department </label>
                <input value ={department} id="department" onChange={e => setdepartment(e.target.value)} required type="text"/>

                <label > Manager </label>
                <input value ={manager} id="Manager" onChange={e => setmanager(e.target.value)} required type="text"/>

                <Link href = "/dashboard">
                    <button onClick={(event)=> onFormSubmit(event)}> Submit </button>
                </Link>
                <br/>
                <Link href = "/dashboard">
                    <button className="muted-button"> Cancel </button>
                </Link>
            </form>
        </div>
    );
}

export default Edit;