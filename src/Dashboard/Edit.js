import React,{useRef, useState, useEffect} from 'react';

function Edit({employeesData, selectedEmployee, setEmployeesData, setIsEditing }){
//NOT ALLOWED TO CHANGE THE ID
    
    //updating these states after every input change to have controlled input
    const [empid, setEmpId] = useState(selectedEmployee.empid);
    const [empname, setempname] = useState(selectedEmployee.empname);
    const [empmail, setempmail] = useState(selectedEmployee.empmail);
    const [department, setdepartment] = useState(selectedEmployee.department);
    const [manager, setmanager] = useState(selectedEmployee.manager);

    //creating a focus on first input field during ONLY first render
    const textinput = useRef(null);
    useEffect(()=>{textinput.current.focus()},[])


    function addEmployee(e){
        e.preventDefault();
        const editedEmployee = {empid, empname, empmail, department, manager};

        for(let i=0; i<employeesData.length; i++){
            if(employeesData[i].empid == editedEmployee.empid){
                employeesData.splice(i, 1, editedEmployee)
            }
        }
        //*update the database along with updating the state*//
        setEmployeesData(employeesData);
        setIsEditing(false);
    }   


    return (
        <div>
            <h1>Edit Employee Information</h1>

            <form onSubmit={(e)=> addEmployee(e)} className = 'short container'>
                <label > Employee Id  </label>
                <input ref = {textinput} value ={`${empid} `} id="id" onChange={e => setEmpId(e.target.value)} disabled type="text"/>

                <label > Full Name </label>
                <input value ={empname} id="name" onChange={e => setempname(e.target.value)} required type="text"/>

                <label > Email </label>
                <input value ={empmail} id="mail" onChange={e => setempmail(e.target.value)} required type="text"/>

                <label > Department </label>
                <input value ={department} id="department" onChange={e => setdepartment(e.target.value)} required type="text"/>

                <label > Manager </label>
                <input value ={manager} id="Manager" onChange={e => setmanager(e.target.value)} required type="text"/>

                <input type="submit" value="Submit"/>
                <br/>
                <button className="muted-button" onClick={()=> setIsEditing(false)}> Cancel </button>
            </form>
        </div>
    );
}

export default Edit;