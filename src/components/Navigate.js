import React, { useState } from 'react';
import '../css/Navigate.css';
import Home from './Home';
import Form from './Form';
import { Link } from 'react-router-dom';
import homeLogo from '../homeLogo.png'

function Navigate(){
    const [home,setHome]=useState(true);
    const [form,setForm]=useState(false);
    const [data,setData]=useState(false);

    const homeClickedHandler= event => {
        setForm(false);
        setHome(true);
        setData(false);
    }

    const formClickedHandler= event => {
        setForm(true);
        setHome(false);
        setData(false);
    }
    const dataClickedHandler= event => {
        setForm(false);
        setHome(false);
        setData(true);
    }
    
    let Hom;
    if(home){
        Hom=<img src={homeLogo} alt="homeLogo" className="logo"/>
    }
    else if(form){
        Hom= <Form />
    }
    else if(data){
        Hom=<Home />
    }
    else{
        Hom=null;
    }

    let homeStyle=home?'home-selected':'link';
    let formStyle=form?'home-selected':'link';
    let dataStyle=data?'home-selected':'link';

    return(
        <div className="bg">
        <nav className="head">
            <div className="nav-links">
                <p onClick={event => homeClickedHandler(event)} className={homeStyle}><u>Home</u></p>
                <p onClick={event => dataClickedHandler(event)} className={dataStyle}><u>API Data</u></p>
                <p onClick={event => formClickedHandler(event)} className={formStyle}><u>Registration Form</u></p>
                <Link to="/" className='link'><p style={{textAlign:'right'}}>Logout</p></Link>
                <p className="mess">Welcome Varun!!!</p>
           </div>
        </nav>
        <div>{Hom}</div>
        </div>
    )
}

export default Navigate;