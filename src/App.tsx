import React,{FC ,useState} from 'react';
import Login from './login_page/Login'
import Dashboard from './Dashboard/Dashboard'

const App : FC = ()=>{

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