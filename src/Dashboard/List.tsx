import React,{useEffect, useState} from 'react';
import Search from './Search';
import Link from '../Routing/Link';
import backend from '../api/backend';

type employeeType = {
    id : number,
    empName : string,
    empMail: string,
    department: string,
    manager: string
}

const stylingObject  = {display: "block",
  marginLeft: "auto",
  marginRight: "auto"
};


function List({setSelectedEmployee, token, logged}){

    const [searchTerm, setSearchTerm] = useState<string>("");
    const [employeesData, setEmployeesData] = useState <employeeType[]> ([]);
    const [deleteCount, setDeleteCount] = useState<number>(0);


    useEffect(()=>{
        backend.get("/employee",
        {
            headers: {"Authorization" : `Basic ${token}`}
        }).then(
            (response)=>{
                setEmployeesData(response.data.data);
            }
        ).catch(
            (error)=>{
                if(logged) alert("Data fetching failed. Login again.");
            } 
        );

    }, [deleteCount])


    const handleDelete = (employee:employeeType) => {
        backend.delete(`/employee/${employee.id}`,{headers:{"Authorization" : "Basic Z3JlZW46MjIy"}}).then(
            (response)=>{
                alert("Deleted employee successfully");
                setDeleteCount(deleteCount+1);
            }
        ).catch(
            (error)=>{
                alert("Error while deleting the employee");
            }
        )
        
    }
    

    //filtering searched employees
    const employeesList = employeesData.filter((employee) => employee.empName.includes(searchTerm))

    
    let renderList = employeesList.map((employee, i)=>
        <tr key = {employee.empMail}>
                <td>{i+1}</td>
                <td>{employee.id}</td>
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
                        onClick ={()=> handleDelete(employee)}
                    >
                        Delete
                    </button>
                </td>
        </tr>) 


    if(logged)
        return (
            <div>
                <Search  setSearchTerm = {setSearchTerm} searchTerm = {searchTerm}/> 
                <br/>

                <table className="ui striped-table">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Id</th>
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
                            <tr><th colSpan={8} className='text-center'> No Employees</th></tr>
                        )
                        }
                    </tbody>
                    
                </table>
            </div>
        );
    else    
        return(
            <div className="ui middle aligned center aligned grid" style = {{margin : "150px"}}>
                <div className="ui raised card">
                    <div className="content">
                        <div className="header" style={{textAlign : 'center'}}> 
                            <p >Log in</p>
                            <p>to see the Dashboard</p> 
                        </div>
                        <br/>
                    </div>
                    <Link href = '/'>
                        <div className="ui bottom attached secondary button">
                            Log in
                        </div>
                    </Link>
                </div>
            </div>
        );
}

export default List;