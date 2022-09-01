import React,{FC ,useState} from 'react';
import Login from './login/Login'
import Add from './Dashboard/Add';
import Edit from './Dashboard/Edit';
import Title from './Dashboard/Title'
import List from './Dashboard/List';
import Route from './Routing/Route';
import Signup from './login/Signup';


const App : FC = ()=>{

    const [selectedEmployee, setSelectedEmployee ] = useState({})
    const [credentials, setCredentials] = useState({username:"", password:""});
    
    //username and password from login page
    const getCredentials = (values) => {
        setCredentials(values)
    }
    

    return(
        <div>
            <Route path= "/">
                <Login getCredentials = {(v) => getCredentials(v)}/> 
            </Route>


            <Route path= "/signup">
                <Signup /> 
            </Route>


            <Route path = "/dashboard">
                <div>
                    <Title/>
                    <List 
                        credentials  = {credentials}
                        setSelectedEmployee = {setSelectedEmployee}
                    />
                </div>
            </Route>


            <Route path= "/add">
                <Add />
            </Route>

            <Route path= "/edit">
                <Edit 
                    selectedEmployee = {selectedEmployee}
                /> 
            </Route>

        </div>
        
    );
}

export default App; 