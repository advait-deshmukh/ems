import React,{FC ,useState} from 'react';
import Login from './login/Login'
import Add from './Dashboard/Add';
import Edit from './Dashboard/Edit';
import Title from './Dashboard/Title'
import List from './Dashboard/List';
import Route from './Routing/Route';
import Signup from './login/Signup';

type employeeType = {
    id : number,
    empName : string,
    empMail: string,
    department: string,
    manager: string
}
const App : FC = ()=>{

    const [selectedEmployee, setSelectedEmployee ] = useState<employeeType>();
    const [token, setToken] = useState<string>();
    

    return(
        <div>
            <Route path= "/">
                <Login token={token} setToken = {setToken}/> 
            </Route>


            <Route path= "/signup">
                <Signup /> 
            </Route>


            <Route path = "/dashboard">
                <div>
                    <Title token={token} />
                    <List 
                        setSelectedEmployee = {setSelectedEmployee} 
                        token={token} 
                    />
                </div>
            </Route>


            <Route path= "/add">
                <Add token={token} />
            </Route>

            <Route path= "/edit">
                <Edit 
                    selectedEmployee = {selectedEmployee}
                    token={token} 
                /> 
            </Route>

        </div>
        
    );
}

export default App; 