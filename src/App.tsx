import React,{FC ,useState} from 'react';
import Login from './login_page/Login'
import Add from './Dashboard/Add';
import Edit from './Dashboard/Edit';
import Title from './Dashboard/Title'
import List from './Dashboard/List';
import {data} from './Data/Data'
import Route from './Routing/Route';


const App : FC = ()=>{

    const [employeesData, setEmployeesData] = useState(data);
    const [selectedEmployee, setSelectedEmployee ] = useState({})
    
    const onDeleteClick = (emp) =>{
        setEmployeesData(employeesData.filter((employee)=>{
            if(employee === emp)
                return false;
            else 
                return true;
       }))
    }

    return(
        <div>
            <Route path= "/">
                <Login /> 
            </Route>

            <Route path = "/dashboard">
                <div>
                    <Title/>
                    <List 
                        employeesData = {employeesData}
                        onDeleteClick = {onDeleteClick}
                        setSelectedEmployee = {setSelectedEmployee}
                    />
                </div>
            </Route>

            <Route path= "/add">
                <Add 
                    employeesData = {employeesData}
                    setEmployeesData = {setEmployeesData}
                />
            </Route>

            <Route path= "/edit">
                <Edit 
                    employeesData = {employeesData}
                    selectedEmployee = {selectedEmployee}
                    setEmployeesData = {setEmployeesData}
                /> 
            </Route>

        </div>
        
    );
}

export default App; 