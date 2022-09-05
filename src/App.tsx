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
    const [logged, setLogged] = useState<boolean>(false);
    

    return(
        <div>
            <Route path= "/">
                <Login 
                    token={token} 
                    setToken = {setToken}   
                    setLogged = {setLogged}/> 
            </Route>


            <Route path= "/signup">
                <Signup /> 
            </Route>


            <Route path = "/dashboard">
                <div>
                    <Title 
                        token={token} 
                        setToken = {setToken}   
                        logged = {logged}
                        setLogged = {setLogged}
                    />
                    <List 
                        setSelectedEmployee = {setSelectedEmployee} 
                        token={token} 
                        logged = {logged}
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