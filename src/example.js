import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
 
export default class PersonList extends React.Component {
  state = {
    people: []
  }
  componentDidMount() {
    axios.get(`./!json/people/index.json`)
      .then(res => {
        const people = res.data;
        
        this.setState({ people });
      })
  }



  render() {
    let double;
    if ( this.state.people.data ) {
      double = this.state.people.data.map( it => <li key={it.id}>{it.email}</li> );
    }
    return (
      <ol>
        { double } 
      </ol>
    )
  }
}