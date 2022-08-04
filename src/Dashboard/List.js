import React from 'react';

function List({employeesData, handleEdit, handleDelete}){

    const renderedList = employeesData.map((employee, i)=>
            <tr key = {i}>
                    <td>{i+1}</td>
                    <td>{employee.fname}</td>
                    <td>{employee.lname}</td>
                    <td>{employee.email}</td>
                    <td>{employee.salary}</td>
                    <td>{employee.date}</td>
                    <td className='test-right'>
                        <button className='button muted-button' onClick ={()=>handleEdit(i)}>
                            Edit
                        </button>
                    </td>
                    <td className='test-left'>
                        <button className='button muted-button' onClick ={()=>handleDelete(i)}>
                            Delete
                        </button>
                    </td>
            </tr>
    )

    return (
        <div>
            <table className="striped-table">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Frist Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Salary</th>
                        <th>Date</th>
                        <th colSpan={2} className='text-center'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employeesData.length>0 ?
                    (
                        renderedList  
                    ):(
                        <th colSpan={8} className='text-center'> No Employees</th>
                    )
                    }
                </tbody>
                
            </table>
        </div>
    );
}

export default List;