import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';

export default class viewReport extends React.Component {
	state = {
    view: []
  }
  componentDidMount() {
  	var str = window.location.pathname;
  	var num = parseInt(str.replace(/\D+/g,""));
  	axios.get(`/!json/reports/view/${num}/view_report.json`)
      .then(res => {
        let view = res.data;
        this.setState({ view });
      })
  }

	render() {
		let doubled;
		if ( this.state.view ) {
			doubled = this.state.view.map( (it) => 
				<div className="main-form__section" key={it.id}>
          <b className="main-form__head">{it.name}</b>
          <input type="text" defaultValue={it.element} name="text" className="main-form__txt" placeholder="Автомобильная дорога регионального и межмунициального значения" />
        </div>
			);
		}
		return (
			<div className="main-form">
        <div className="main-form__child">
          <h2 className="main-form__child-head">Наименование автомобильной дороги</h2>
         	{doubled} 
        </div>
      </div>
		)
	}
}