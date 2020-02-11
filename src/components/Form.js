import React, { useState } from 'react';
import UserDetails from './UserDetails';
import '../css/Form.css';
import RegLogo from "../regImg.png"

function Form(props){
    const [name,setName]=useState("");
    const [compName,setCompName]=useState("");
    const [email,setEmail]=useState("");
    const [pan,setPan]=useState("No");
    const [panNum,setPanNum]=useState("");
    const [submitForm,setSubmitForm]=useState(false)

    const onResetHandler = () => {
        setName('');
        setCompName('');
        setEmail('');
        setPan('No');
        setPanNum('');
        setSubmitForm(false);
        document.getElementById('panBox').checked=false;
    }

    const onSubmitHandler = () =>{
        if(name==="" || compName==="" || email===""){
            alert("One or more fields are Empty!!")
            setSubmitForm(false)
        }
        else{
            setSubmitForm(true);
        }
    }

    let panNumAl;
        if(pan==='Yes'){
            panNumAl= <tr style={{color:"rgb(79, 8, 90)", fontWeight:'bold'}}>
                    <td>Enter Pan Card No.</td>
                    <td><input className="textbox" name="panNum" value={panNum}
                            onChange={event => setPanNum(event.target.value)} required /></td>
                    </tr>
        }
        else{
            panNumAl=null
        }
    if(!submitForm){
    return(
        <div className="bg">
            <h1 className="headStyle">Registration Form</h1>
            <div className="main">
            <img src={RegLogo} alt="RegLogo" className="logo"/> 
            <table className="tab">
                <tr>
                    <td><b>Enter Name: </b></td>
                    <td><input name="name" className="textbox" value={name}
                            onChange={event => setName(event.target.value)} required /></td>
                </tr>
                <tr>
                    <td><b>Enter Email Id: </b></td>
                    <td><input type="email" className="textbox" name="email" value={email}
                            onChange={event => setEmail(event.target.value)} required /></td>
                </tr>
                <tr>
                    <td><b>Enter Company Name: </b></td>
                    <td><input className="textbox" name="compName" value={compName}
                            onChange={event => setCompName(event.target.value)} required /></td>
                </tr>
                <tr>
                    <td><b>Pan card Available: </b></td>
                    <td><input  type="checkbox" className="cbox" id="panBox"
                            onClick={() => setPan('Yes')} required /></td>
                </tr>
                {panNumAl}
            </table>
            <input type="reset" value="Reset" className="but_sub" onClick={onResetHandler} />
            <input type="button" value="Submit" className="but_sub" onClick={onSubmitHandler} />
            </div>
        </div>
    );
}
else{
    return(
        <div className="bg">
            <UserDetails name={name} compName={compName} email={email} pan={pan} panNum={panNum}/>
        </div>
    );
}}
export default Form;