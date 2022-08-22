import React,{useState} from 'react';
import Add from './Add';
import Edit from './Edit';
import Title from './Title'
import List from './List';
import {data} from '../Data/Data'


function Dashboard({setLoggedIn}){

    const [employeesData, setEmployeesData] = useState(data);
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [selectedEmployee, setSelectedEmployee ] = useState({})


    const onEditClick = (emp) =>{
        setSelectedEmployee(emp);
        setIsEditing(true);    //this reders the edit page   
    }


    const onDeleteClick = (emp) =>{
        setEmployeesData(employeesData.filter((employee)=>{
            if(employee === emp)
                return false;
            else 
                return true;
       }))
    }


    return(
        <div className= 'container'>
            {/* showing the employee list */}
            {!isAdding && !isEditing && 
                <div>
                    <Title setIsAdding = {setIsAdding} setLoggedIn = {setLoggedIn}/>
                    <List 
                        employeesData = {employeesData}
                        onEditClick= {onEditClick}
                        onDeleteClick = {onDeleteClick}
                    />
                </div>
            }

            {/* Showing the Adding Page */}
            {isAdding && 
                <Add 
                    employeesData = {employeesData}
                    setEmployeesData = {setEmployeesData}
                    setIsAdding = {setIsAdding}
                />    
            }

            {/* Shwoing the Editing Page */}
            {isEditing && 
                <Edit 
                    employeesData = {employeesData}
                    selectedEmployee = {selectedEmployee}
                    setEmployeesData = {setEmployeesData}
                    setIsEditing = {setIsEditing}
                />    
            }
        </div>
    );
}

export default Dashboard;