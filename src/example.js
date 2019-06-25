import React from 'react';
import axios from 'axios';
 
export default class PersonList extends React.Component {
  state = {
    people: []
  }
  componentDidMount() {
    axios.get(`https://api.direct.yandex.ru/v4/json/`)
      .then(res => {
        const people= res.data;
        console.log( people );
        this.setState({ people});
      })
  }
 
  render() {
    return (
      <ol>
      </ol>
    )
  }
}