import React from 'react';
import {useState, useEffect, useRef} from 'react';
import './Login.css'

function Login({setLoggedIn}){
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [uerrMsg, setUerrMsg] = useState('');
    const [perrMsg, setPerrMsg] = useState('');

    
    async function onFormSubmit(e){
        e.preventDefault();
        //...authentication using the backend...
       

        if(Validate() == true){
            setUser("");
            setPassword('');
            setPerrMsg('');
            setUerrMsg('');
            //assuming the credentials are right
            setLoggedIn(true);
        }
    }

    function Validate(){
        let errors = {username : '', password: ''};
        let isValid = true;
     
        if (!user) {
          isValid = false;
          errors["username"] = "Please enter your username.";
        }
        
        //Verifying if its a valid email
        if (typeof user !== "undefined") {
            var pattern = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);                         //email veification
            if (!pattern.test(user)) {
                isValid = false;
                errors["username"] = "Please enter valid email address.";
            }
        }
    
        if (!password) {
          isValid = false;
          errors["password"] = "Please enter your password.";
        }
    
    
        //password should be longer than 6 characters
        if (typeof password !== "undefined") {
          if(password.length < 6){
              isValid = false;
              errors["password"] = "Please add at least 6 charachter.";
          }
        }
    
        setPerrMsg(errors.password);
        setUerrMsg(errors.username)
    
        return isValid;
    }
       


    return(
        <div className = 'LoginPage'>

            <h1 className ="heading">Login</h1>
            
            <form onSubmit={(e)=>onFormSubmit(e)} className="ui form container">
                <label>Username: </label>
                <input 
                    id= "username" 
                    autoComplete = "off"
                    value = {user}
                    onChange = {(e) => setUser(e.target.value)}
                    required
                />
                <div className="error-text" style={{color:"red"}}>{uerrMsg}</div>
                
                <label>password: </label>
                <input 
                    type = "password"
                    id= "password" 
                    autoComplete = "off"
                    value = {password}
                    onChange = {(e) => setPassword(e.target.value)}
                    required
                />
                    <div className="error-text" style={{color:"red"}}>{perrMsg}</div>

                <button className="ui primary button" onClick={(e)=>onFormSubmit(e)}>
                    Log In
                </button>

                <p className = 'footer'> 
                    Create new accout <br/>
                    <span><a href="/">Sign up</a></span>
                </p>
            </form>
        </div>
        );
}

export default Login; 