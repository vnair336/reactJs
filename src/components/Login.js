import React, {useState} from 'react';
import "../css/Login.css";
import Invalid from "./Invalid";
import logo from '../newLogo.jpg';

function Login(props){

    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const [invalidCreds,setInvalidCreds]=useState(false);

    const loginHandler = () =>{
    const uname='Varun';
    const pass='abc123';

    if(username && password){
    if(username !== uname && password !== pass){
        setInvalidCreds(true);
        alert('Invalid Credentials');
    }
    else{
        props.history.push('/login')
    }}}
       
        return (
            <div className="bg">
                <h1 className="headStyle">Login</h1>
                <img src={logo} alt="logo" className="logo"/>
                <div className="main">
                <form>
                    <input type="text" name="username" value={username} placeholder="Username" className="textbox"
                            onChange={event => setUsername(event.target.value)} required /><br />
                    <input type="password" name="password" value={password} placeholder="Password" className="textbox"
                            onChange={event => setPassword(event.target.value)} required /><br />
                    <input type="submit" value="Log In" className="button_sub" onClick={loginHandler} />
                </form>
                </div>
                    <Invalid creds={invalidCreds} />
            </div>
        );
        
    }
    

export default Login