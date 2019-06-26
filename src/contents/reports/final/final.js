import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';

export default class FinalReports extends React.Component {
	state = {
    main_report: []
  }
  componentDidMount() {
    axios.get(`./!json/reports/final/main_reports.json`)
      .then(res => {
        const main_report = res.data;
        this.setState({ main_report });
      })
  }

	render() {
		let doubled;
		function elements(el) {
      const doubled = el.map((it) =>
        <Link to={`/det/${it.id}`} className={`annual-section__item ${it.class}`} key={it.id}>
          <b className="annual-section__item-head">{it.title}</b>
          <b className="annual-section__item-date">{it.date}</b>
        </Link>
      );
      return(
        <div className="annual-section__list">
          {doubled} 
        </div> 
      );
    }
    if ( this.state.main_report ) {
	    doubled = this.state.main_report.map((it) =>
	      <div className="annual-section" key={it.id}>
	        <b className="annual-section__head">{it.year}</b>
	        {elements(it.child_element)} 
	      </div> 
	    );
	  }
    return (
      <div className="main-wrap">
        {doubled} 
      </div>
    );
	}
}