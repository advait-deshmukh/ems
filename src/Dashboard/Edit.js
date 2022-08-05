import React,{useRef, useState, useEffect} from 'react';

function Edit({employeesData, selectedEmployee, setEmployeesData, setIsEditing }){
    
    //Each input field in the Edit form is updating one of the following states,
    //which have default values set to selectedEmployee.
    //These updated values then replace the orignal values from the employeeData array-
    //-when the form is submitted. If pressed cancel, employeeData is not updated.
    const [empid, setEmpId] = useState(selectedEmployee.empid);
    const [empname, setempname] = useState(selectedEmployee.empname);
    const [empmail, setempmail] = useState(selectedEmployee.empmail);
    const [department, setdepartment] = useState(selectedEmployee.department);
    const [manager, setmanager] = useState(selectedEmployee.manager);


    //creating a focus on first input field during ONLY first render
    const textinput = useRef(null);
    useEffect(()=>{textinput.current.focus()},[])


    //Invokes when the form is submitted. It replaces the old employee with the edited 
    //one in employeesData array and updates the state. 
    //By making IsEditing false, the Dashboard page will be rendered again instead of Edit page
    function onFormSubmit(e){
        e.preventDefault();
        const editedEmployee = {empid, empname, empmail, department, manager};

        for(let i=0; i<employeesData.length; i++){
            if(employeesData[i].empid === editedEmployee.empid){
                employeesData.splice(i, 1, editedEmployee)
            }
        }
        //*update the database along with updating the state*//
        setEmployeesData(employeesData);
        setIsEditing(false);
    }   


    return (
        <div>
            <form onSubmit={(e)=> onFormSubmit(e)} className = 'small-container'>
                <h1>Edit Employee Information</h1>
                
            {/* Employee Id not allowed to be edited. */}
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