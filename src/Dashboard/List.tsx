import React,{useState} from 'react';
import Search from "./Search"

function List({employeesData, handleEdit, handleDelete}){

    const [searchTerm, setSearchTerm] = useState("");

    //Creating a list of JSX elements where each element represents one employee with
    //buttons to edit and delete the employee
    employeesData = employeesData.filter((employee) => employee.empname.includes(searchTerm))

    let renderList = employeesData.map((employee, i)=>
        <tr key = {employee.empid}>
                <td>{i+1}</td>
                <td>{employee.empname}</td>
                <td>{employee.empmail}</td>
                <td>{employee.department}</td>
                <td>{employee.manager}</td>
                <td className='text-right'>
                    <button className='muted-button' onClick ={()=>handleEdit(employee.empid)}>
                        Edit
                    </button>
                </td>
                <td className='text-left'>
                    <button className='muted-button' onClick ={()=>handleDelete(employee.empid)}>
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
                        <th colSpan={7} className='text-center'> No Employees</th>
                    )
                    }
                </tbody>
                
            </table>
        </div>
    );
}

export default List;