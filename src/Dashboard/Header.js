import React from 'react';

//renders the title and the Add Employee button on the Dashboard. 
//With IsAdding set to true on clicking the Add Employee button, the Add page wull be 
//rendered instead of Dashboard. 
function Header({setIsAdding, setLoggedIn}){

    return (
        <header>
            <div className='text-center '> <h1>Employee Management System</h1> </div>
             <button className='muted-button' onClick={()=> {setLoggedIn(false)}}>Log out</button>
            <div>
                <button 
                    className='full-button '
                    onClick = {()=>setIsAdding(true)}
                >
                    Add Employee
                </button>
            </div>
        </header>
    );
}


export default Header;