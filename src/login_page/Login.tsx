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
        <div style = {{margin : "100px"}} className="ui middle aligned center aligned grid">
            <div className="six wide column">
                <h1 className="ui blue header">
                    Log-in to your account 
                </h1>
                <form className="ui mini form" onSubmit={(e)=>onFormSubmit(e)}>
                <div className="ui stacked segment">
                    <div className="field">
                    <div className="ui left icon input">
                        <i className="user icon"></i>
                        <input 
                            type="text" 
                            name="email" 
                            placeholder="E-mail address" autoComplete = "off"
                            value = {user}
                            onChange = {(e) => setUser(e.target.value)}
                            required 
                        />
                    </div>
                    </div>

                    <div className="error-text" style={{color:"red"}}>{uerrMsg}</div>

                    <div className="field">
                    <div className="ui left icon input">
                        <i className="lock icon"></i>
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="Password" 
                            autoComplete = "off"    
                            value = {password}
                            onChange = {(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    </div>
                    
                    <div className="error-text" style={{color:"red"}}>{perrMsg}</div>

                    <button className="ui fluid large blue submit button">Login</button>
                </div>

                <div className="ui error message"></div>

                </form>

                <div className="ui message">
                New to us? <a href="#">Sign Up</a>
                </div>
            </div>
            </div>
        );
}

export default Login; 