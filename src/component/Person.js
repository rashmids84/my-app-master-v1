import React from 'react';
import axios from 'axios';


export default class Person extends React.Component{
    state = { 
        persons: [],
    };
   componentDidMount(){
       axios.get('http://jsonplaceholder.typicode.com/users').then(res => {

       console.log(res);
       this.setState({persons: res.data});

    })
   } 
   render() {
       return<ul>{this.state.persons.map(person => <li>{person.email}</li>)}
       </ul>
      
   }
}

