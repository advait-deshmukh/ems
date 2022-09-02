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
                    <Title/>
                    <List 
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