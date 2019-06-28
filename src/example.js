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
    axios.get(`https://shakirzhan.ru/api/`)
      .then(res => {
        const menu = res.data;
        this.setState({ menu });
      })
  }

  render() {
    if ( this.state.menu ) {
      console.log( this.state.menu );   
    }
  	
  	return(
    	<Router>
	    	<Header />
        <Conten /> 
        <Footer /> 
      </Router>
    )
  }
}