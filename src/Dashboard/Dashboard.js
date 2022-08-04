import React,{useState, useEffect} from 'react';
import Add from './Add.js';
import Edit from './Edit.js';
import Header from './Header.js'
import List from './List.js';
import Swal from 'sweetalert2';
import {data} from '../Data/Data.js'


function Dashboard(){
    const [employeesData, setEmployeesData] = useState(data);
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [selectedEmployee, setSelectedEmployee ] = useState(null)


    function handleEdit(id){
        console.log(id); 
    }

    function handleDelete(){
        
    }

    return(
        <div className= 'container'>
            {/* showing the list */}
            {!isAdding && !isEditing && 
                <div>
                    <Header setIsAdding = {setIsAdding}/>
                    <List 
                        employeesData = {employeesData}
                        handleEdit= {() => handleEdit()}
                        handleDelete = {()=> handleDelete()}
                    />
                </div>
            }

            {/* Adding Page */}
            {isAdding && 
                <Add 
                    employeesData = {employeesData}
                    setEmployeesData = {setEmployeesData}
                    setIsAdding = {setIsAdding}
                />    
            }

            {/* Editing Page */}
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