import React from 'react';
import backend from '../api/backend';
import Link from '../Routing/Link';
import {AuthHeader} from '../Services/LocalStorage';
import '../CSS/dropdown.css';

function Title(){

    const handleLogout = () =>{
        backend.post('/logout', {}, {
            headers: {"Authorization" : `${AuthHeader()}`}
        }).then(
            (response) => {
                localStorage.removeItem('token')
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


    if(AuthHeader())
        return (
            <header>
                <div className="ui secondary pointing menu">
                    <Link href = "/add" className = "active item"> 
                        <div >Add Employee</div>
                    </Link>
 
                    <div className="right menu">
                        <a className="ui active item" onClick={() => handleLogout()}>
                            Logout
                        </a>
                    </div>                   
                </div>

                <h1 className='text-center' style={{fontSize: "3rem"}}>Employee Management System</h1> 
                <br/>


            </header> 
        );  
    else
        return null
}


export default Title;


//code for adding a menu in the menubar
                    {/* <div className="item">
                        <div className="dropdown ">
                            <div className="dropbtn"> 
                                Sort
                                <i className="fa fa-caret-down"></i>
                                </div>
                                <div className="dropdown-content">
                                <a onClick ={(e)=>{e.preventDefault(); setSortKey("id")}}> By employee Id</a>
                                <a onClick ={(e)=>{e.preventDefault(); setSortKey("department")}}> By department</a>
                                <a onClick ={(e)=>{e.preventDefault(); setSortKey("name")}}> By employee name</a>
                            </div>
                        </div>
                    </div>
                     */}