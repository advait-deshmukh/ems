import React from 'react';
import Search from './Search';


function Title({setIsAdding, setLoggedIn}){

    return (
        <header>
            <div className='text-center '> <h1>Employee Management System</h1> </div>

            <button className='ui button' onClick={()=> {setLoggedIn(false)}}>Log out</button>
            
            <button 
                className='fluid ui button blue'
                onClick = {()=>setIsAdding(true)}
            >
                Add Employee
            </button>
            
        </header>
    );
}


export default Title;