import React, {useState, useRef, useEffect} from 'react';

function Add({employeesData, setEmployeesData, setIsAdding}){

    //updating these states after every input change to have controlled input
    const [empid, setEmpId] = useState();
    const [empname, setempname] = useState();
    const [empmail, setempmail] = useState();
    const [department, setdepartment] = useState();
    const [manager, setmanager] = useState();

    //creating a focus on first input field during ONLY first render
    const textinput = useRef(null);
    useEffect(()=>{textinput.current.focus()},[])


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
            <h1>Add Employee</h1>

            <form onSubmit={(e)=> addEmployee(e)} className = 'short container'>
                <label > Employee Id </label>
                <input ref = {textinput} type="text" id="id" onChange={e => setEmpId(e.target.value)} required/>

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