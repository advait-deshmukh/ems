import { isValidDateValue } from '@testing-library/user-event/dist/utils';
import React from 'react';
import {useState} from 'react';
import Link from '../Routing/Link';
import './Login.css'

function Login(){
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [uerrMsg, setUerrMsg] = useState('');
    const [perrMsg, setPerrMsg] = useState('');
    const [href, setHref] = useState('/')


    function Validate() {
        let isValid = true;
        
        //Verifying if its a valid email
        var pattern = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);                         //email regex    
        if (!user) {
            isValid = false;
            setUerrMsg("Please enter your username.");
        }
        else if(!pattern.test(user)) {
            isValid = false;
            setUerrMsg("Please enter valid email address.");
        }
        else{
            isValid = true;
            setUerrMsg("");
        }

        //password should be longer than 6 characters    
        if (!password) {
            isValid = false;
            setPerrMsg("Please enter your password.");
        }
        else if(password.length < 5){
            isValid = false;
            setPerrMsg("Please add at least 6 charachter.");
        }
        else{
            isValid = true;
            setPerrMsg("");
        }
        
        isValid === true? setHref("/dashboard") : setHref("/");
        
        return;
    }
       

    return(
        <div style = {{margin : "100px"}} className="ui middle aligned center aligned grid">
            <div className="six wide column">
                <h1 className="ui blue header">
                    Log-in to your account 
                </h1>
                <form className="ui mini form" onSubmit={(e)=>e.preventDefault()}>
                <div className="ui stacked segment">
                    <div className="field">
                    <div className="ui left icon input">
                        <i className="user icon"></i>
                        {/* input for username */}
                        <input 
                            type="text" 
                            name="email" 
                            placeholder="E-mail address" autoComplete = "off"
                            value = {user}
                            onChange = {(e) => {setUser(e.target.value);  console.log(user);}}
                            required 
                        />
                    </div>
                    </div>

                    <div className="error-text" style={{color:"red"}}>{uerrMsg}</div>

                    <div className="field">
                    <div className="ui left icon input">
                        <i className="lock icon"></i>
                        {/* input for password */}
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="Password" 
                            autoComplete = "off"    
                            value = {password}
                            onChange = {(e) => {setPassword(e.target.value);  Validate();}}
                            required
                        />
                    </div>
                    </div>
                    
                    <div className="error-text" style={{color:"red"}}>{perrMsg}</div>

                    <Link href = {href}>
                        <button className="ui fluid large blue submit button" onClick={event => {event.preventDefault();console.log(href)}}>Login</button>
                    </Link>
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