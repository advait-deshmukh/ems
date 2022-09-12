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


    return(
        <div>
            <Route path= "/">
                <Login />
            </Route>


            <Route path= "/signup">
                <Signup /> 
            </Route>


            <Route path = "/dashboard">
                <div>
                    <Title />
                    <List />
                </div>
            </Route>


            <Route path= "/add">
                <Add />
            </Route>


            <Route path= "/edit">
                <Edit/> 
            </Route>

        </div>
        
    );
}

export default App; 