import React,{useState} from 'react';
import Add from './Add';
import Edit from './Edit';
import Title from './Title'
import List from './List';
import {data} from '../Data/Data'


function Dashboard({setLoggedIn}){
    //isAdding and isEditing states control whether to show Dashboard/Add/Edit page
    //employeesData array holds all the employee data and is updated with each add/edit/delete
    //selectedEmployee holds the info about the employee being edited
    const [employeesData, setEmployeesData] = useState(data);
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [selectedEmployee, setSelectedEmployee ] = useState({})


    //Callback function when edit button is clicked on the list.
    //It gets the id of the employee clicked on, uses filter to find that employee 
    //from the employeeData array and updates selectedEmployee state.
    //When isEditing is set to true, Edit page is rendered instead of Dashboard
    const onEditClick = (emp) =>{
        setSelectedEmployee(emp);
        setIsEditing(true);    //this reders the edit page   
    }


    //callback function when delete button is clicked on the list
    //It simply updates the employeeData array by filtering out employee with given id
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