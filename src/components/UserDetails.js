import React from 'react';
import '../css/UserDetail.css';

function UserDetails(props){

    let panNum;
    if(props.pan==="Yes"){
        panNum=<tr>
                 <td><b>Pan Card Number: </b></td>
                 <td>{props.panNum}</td>
               </tr>
    }
    else{
        panNum=null;
    }

    const onNewRegHandler= () =>{
        return props.history.push("/login");
    }
    return(
        <div>
            <h1 className="headStyle">User Details</h1>
            <table className="main">
                <tr>
                    <td><b>Name: </b></td>
                    <td>{props.name}</td>
                </tr>
                <tr>
                    <td><b>Email Id: </b></td>
                    <td>{props.email}</td>
                </tr>
                <tr>
                    <td><b>Works in: </b></td>
                    <td>{props.compName}</td>
                </tr>
                <tr>
                    <td><b>Has a Pan Card: </b></td>
                    <td>{props.pan}</td>
                </tr>
                {panNum}
            </table>
        </div>
    );

}
export default UserDetails;