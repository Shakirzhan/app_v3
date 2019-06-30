import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';

export default class Menu extends React.Component {
	state = {
    menu: []
  }
  componentDidMount() {
    axios.get(`/!json/menu/menu.json`)
      .then(res => {
        const menu = res.data;
        this.setState({ menu });
      })
  }

  render() {
  	let doubled;
  	if ( this.state.menu ) {
	  	doubled = this.state.menu.map((it) =>
        <li className={`main-tab__item col-lg-3 ${( it.url == window.location.pathname ) ? "main-tab__item--active" : "" }`} key={`${it.id}`}>
	        <Link to={`${it.url}`}>{`${it.name_url}`}</Link>
	      </li> );
  	}

    let str = window.location.pathname;
    let res = str.match( /det/i );
    if ( res ) {
      doubled = false;  
    }

    return (
  		<ul className="main-tab row">
    		{ doubled }
    	</ul>
    )
  }
}