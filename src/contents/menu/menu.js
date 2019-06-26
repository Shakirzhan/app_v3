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
	      <li className={`main-tab__item col-lg-3 ${it.class_active}`} key={`${it.id}`}>
	        <Link to={`${it.url}`}>{`${it.name_url}`}</Link>
	      </li> );
  	}
  	
  	return (
  		<ul className="main-tab row">
    		{ doubled }
    	</ul>
    )
  }
}