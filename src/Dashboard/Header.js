import React from 'react';

function Header({setIsAdding}){

    return (
        <header>
            <h1>Employee Management System</h1>
            <div>
                <button 
                    className='round-button'
                    onClick = {()=>setIsAdding(true)}
                >
                    Add Employee
                </button>
            </div>
        </header>
    );
}


export default Header;