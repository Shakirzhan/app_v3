import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./templates/header"
import Footer from "./templates/footer"
import Conten from "./contents/content"
import axios from 'axios';
 
export default class Application extends React.Component {
	state = {
    menu: []
  }
  componentDidMount() {
    axios.get(`http://shakirzhan.ru/api/`)
      .then(res => {
        const menu = res.data;
        this.setState({ menu });
      })
  }

  render() {
  	console.log( this.state.menu );
  	const res = this.state.menu.map( el => 
  		<li key={el.id}>{el.email}</li>
  	);
    return(
    	<Router>
	    	<Header />
        <Conten /> 
        <Footer /> 
      </Router>
    )
  }
}