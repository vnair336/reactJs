import React from'react';
import'../css/Item.css';

function Item(props){
    return(
        <div className="box">
            <p><b>Name: </b>{props.name}</p>
            <p><b>Email Id: </b>{props.email}</p>
            <p><b>Works in: </b>{props.company}</p>
        </div>
    )
}
export default Item;