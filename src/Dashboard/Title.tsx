import React from 'react';
import backend from '../api/backend';
import Link from '../Routing/Link'


function Title({token,setToken, setLogged, logged}){

    const handleLogout = () =>{
        backend.post('/logout', {}, {
            headers: {"Authorization" : `Basic ${token}`}
        }).then(
            (response) => {
                setToken("");
                setLogged(false);
                alert("Logged out successfully");
                window.history.pushState({}, "","/")
                const navEvent = new PopStateEvent('popstate');
                window.dispatchEvent(navEvent);
            }
        ).catch(
            (error)=>{
                alert("could not log out");
            }
        )

    } 

    if(logged)
        return (
            <header>
                <div className="ui secondary pointing menu">
                    <Link href = "/add"> 
                        <div className="ui active item">Add Employee</div>
                    </Link>
                    <div className="right menu">
                        <a className="ui active item" onClick={() => handleLogout()}>
                            Logout
                        </a>
                    </div>
                </div>

                <h1 className='text-center'>Employee Management System</h1> 
            </header> 
        );  
    else
        return null
}


export default Title;