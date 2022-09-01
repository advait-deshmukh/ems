import React,{useEffect, useState} from 'react';
import Search from './Search';
import Link from '../Routing/Link';
import backend from '../api/backend';

function List({credentials, setSelectedEmployee}){

    const [searchTerm, setSearchTerm] = useState<string>("");
    const [employeesData, setEmployeesData] = useState <employeeType[]> ([]);

//make the api call only once when the page renders, and set value of employeesData. This way the page will rerender
//to show all the available employees. 
//run useffect for state delete, and change delete when you delete something (think about this later. First get a list and integrate add function)
//DOES EMPLOYEESDATA have to be a state?

    useEffect(()=>{
        backend.get("/employee",
        {
            headers: {"Authorization" : "Basic Z3JlZW46MjIy"}
        }).then(
            (response)=>{
                console.log(response);
                setEmployeesData(response.data.data);
            }
        ).catch(
            (error)=>{
                console.log(error);
                alert("Data fetching failed. Login again.");
            } 
        );

    }, [])

    type employeeType = {
        empId : number,
        empName : string,
        empMail: string,
        department: string,
        manager: string
    }

    
    //filtering searched employees
    const employeesList = employeesData.filter((employee) => employee.empName.includes(searchTerm))

    
    let renderList = employeesList.map((employee, i)=>
        <tr key = {employee.empId}>
                <td>{i+1}</td>
                <td>{employee.empName}</td>
                <td>{employee.empMail}</td>
                <td>{employee.department}</td>
                <td>{employee.manager}</td>
                <td className='text-right'>
                    <Link href = "/edit">
                        <button className='muted-button' onClick ={()=>setSelectedEmployee(employee)}> Edit </button>       
                    </Link>
                </td>
                <td className='text-left'>
                    <button 
                        className='muted-button' 
                        onClick ={()=>setEmployeesData(employeesData.filter((emp)=> emp === employee? false : true))}
                    >
                        Delete
                    </button>
                </td>
        </tr>) 


    return (
        <div>
            <Search  setSearchTerm = {setSearchTerm} searchTerm = {searchTerm}/> 

            <table className="striped-table">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Department</th>
                        <th>Manager</th>
                        <th colSpan={2} className='text-center'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employeesData.length>0 ?
                    (
                        renderList
                    ):(
                        <tr><th colSpan={7} className='text-center'> No Employees</th></tr>
                    )
                    }
                </tbody>
                
            </table>
        </div>
    );
}

export default List;