import React from 'react';
import Link from '../Routing/Link'


function Title(){

    return (
        <header>
            
            <div className='text-center '> <h1>Employee Management System</h1> </div>

            <Link href = "/"> 
                <button className='ui button' >Log out</button>
            </Link>

            <Link href = "/add"> 
                <button className='fluid ui button blue'> Add Employee </button>
            </Link>
            
        </header>   
    );
}


export default Title;