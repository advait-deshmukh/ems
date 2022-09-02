import React from 'react';
import backend from '../api/backend';
import Link from '../Routing/Link'


function Title(){

    const handleLogout = () =>{
        backend.get('/logout', {
            headers: {"Authorization" : "Basic Z3JlZW46MjIy"}
        }).then(
            (response) => {
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


    return (
        <header>
            
            <div className='text-center '> <h1>Employee Management System</h1> </div>

            <button className='ui button' onClick={() => handleLogout()}> Log out </button>

            <Link href = "/add"> 
                <button className='fluid ui secondary button'> Add Employee </button>
            </Link>
            
        </header>   
    );
}


export default Title;