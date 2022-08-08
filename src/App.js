import React,{useState} from 'react';
import Login from './login_page/Login.js'
import Dashboard from './Dashboard/Dashboard.js'


function App(){

    const [loggedIn, setLoggedIn] = useState(false);

    return(
        <div>
            { loggedIn ?
                <Dashboard setLoggedIn = {setLoggedIn}/>  
            : 
                <Login setLoggedIn = {setLoggedIn}/> 
            }
        </div>
    );
}

export default App; 