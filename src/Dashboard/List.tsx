import React,{useState} from 'react';
import Search from './Search';
import Link from '../Routing/Link';

function List({employeesData,setEmployeesData, setSelectedEmployee}){

    const [searchTerm, setSearchTerm] = useState("");
    //filtering searched employees
    employeesData = employeesData.filter((employee) => employee.empname.includes(searchTerm))

    
    let renderList = employeesData.map((employee, i)=>
        <tr key = {employee.empid}>
                <td>{i+1}</td>
                <td>{employee.empname}</td>
                <td>{employee.empmail}</td>
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