import React from 'react';
import axios from 'axios';
import Item from './Item';
import apiLogo from '../apiData.png'


class Home extends React.Component{
    state= {
        items:[]
    }

    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                const posts= response.data.slice(0,5);
                console.log(posts);
                this.setState({items:posts})
            } )
    }

    render(){
   
    const item = this.state.items.map(i => {
        return(
            <Item key={i.id} name={i.name} email={i.email} company={i.company.name} />
        );
    })
    return(
        <div>
            <h1 className="headStyle">Existing Users</h1>
            <img src={apiLogo} alt="apiLogo" className="logo"/><br />
            {item}
        </div>
    )
}}
export default Home; 