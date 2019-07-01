import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Menu from "./menu/menu"
import FinalReports from "./reports/final/final.js"
import viewReport from "./reports/view/view.js"
import QuestionContent from "./question/question.js"

export default class Conten extends React.Component {
  render() {
    return (
			<div className="main">
        <div className="container">
          <div className="main--white">
            <Route component={Menu} />

            <div>
            	<Route exact path="/" component={FinalReports} />
            	<Route path="/det/" component={viewReport} />

              <Route path="/question" component={QuestionContent} />
            </div>
          </div>
        </div>
      </div>
		)
	}
}