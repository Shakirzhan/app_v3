import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Header extends React.Component {
	render() {
		return (
			<div className="header">
        <div className="container">
          <div className="header__wrap">
            <div className="row">
              <div className="col-lg-8">
                <div className="header__logo">
                  <div id="header__logo">
                    <Link to="/"><img src="/img/logo_v_2.svg" alt="logo" /></Link>
                  </div>
                  <div className="header__logo-wrap">
                    <b className="header__logo-head">Трансдорстат</b>
                    <span className="header__logo-slogan">Унифицированная система сбора отчетностсти</span>
                  </div>  
                </div>
              </div>
              <div className="col-lg-4 header__right-block">
                <div className="row justify-content-between">
                  <div className="col-lg-8">
                    <div className="header__geolocation">
                      <a className="header__geolocation-button" href="#">Алтайский край</a>  
                      <div className="header__geolocation-block">
                        <ul className="header__geolocation-list"></ul> 
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="header__login">
                      <a className="header__login-button" href="#">Вход</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
		)
	}
}