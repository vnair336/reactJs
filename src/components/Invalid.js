import React from 'react';

function invalid(props){

    const invalidStyle = {
        color:'red',
        fontStyle:'italic'
    }
    if(props.creds){
    return(
        <div>
            <h3 style={invalidStyle}>Invalid Credentials</h3>
        </div>
    )}
    else{
        return null;
    }
}

export default invalid;