import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';

export default class Header extends React.Component {
  state = {
    geo: []
  }
  componentDidMount() {
    axios.get(`/!json/geo/geo.json`)
      .then(res => {
        const geo = res.data;
        this.setState({ geo });
      })
  }

  PASS(e) {
    let child = e.target;
    let headerGeolocationButton = document.querySelector( ".header__geolocation-button" );
    let headerGeolocationBlock  = document.querySelector(".header__geolocation-block");
    const el = document.querySelectorAll( ".header__geolocation-item" );
    for (var k in el) {
      if ( typeof el[k] == "object" ) { 
        if ( el[k].classList.contains( "header__geolocation-item--active" ) ) {
          el[k].classList.remove( "header__geolocation-item--active" );
        }
      }
    }
    if ( child.tagName == "LI" ) {
      child.classList.add( "header__geolocation-item--active" );
      let txt = child.children[1].innerText;
      headerGeolocationButton.innerText = txt;
      headerGeolocationButton.classList.toggle( "header__geolocation-button--inverted" );
      headerGeolocationBlock.classList.toggle( "header__geolocation-block--active" );
    } else {
      child.closest( ".header__geolocation-item" ).classList.add( "header__geolocation-item--active" );
      let txt = child.innerText;
      headerGeolocationButton.innerText = txt;
      headerGeolocationButton.classList.toggle( "header__geolocation-button--inverted" );
      headerGeolocationBlock.classList.toggle( "header__geolocation-block--active" );
    }
  }

  geo() {
    let doubled;
    let abc = "";
    let change = "";
    let activeElement = "";
    if ( this.state.geo ) {
      doubled = this.state.geo.map( (el, index) =>
        el.map(function(ch, i) {
          abc = ch[0];
          if ("header__geolocation-item--active" != activeElement) {
            activeElement = "header__geolocation-item--active";
            change = ch[0];
            return (
              <li className={`header__geolocation-item ${activeElement}`} key={i}>
                <span className="header__geolocation-abc">{change}</span>
                <span className="header__geolocation-city">{ch}</span>
              </li>
            )
          } else if ( ch[0] != change ) {
            change = ch[0];
            return (
              <li className="header__geolocation-item" key={i}>
                <span className="header__geolocation-abc">{change}</span>
                <span className="header__geolocation-city">{ch}</span>
              </li>
            )
          } else {
            return (
              <li className="header__geolocation-item" key={i}>
                <span className="header__geolocation-abc"></span>
                <span className="header__geolocation-city">{ch}</span>
              </li>
            ) 
          }
        })
      )  
    }
    return (
      <ul className="header__geolocation-list">
        {doubled}
      </ul>
    )
  }

  DISPLAY() {
    let headerGeolocationButton = document.querySelector(".header__geolocation-button");
    headerGeolocationButton.nextSibling.classList.toggle( "header__geolocation-block--active" );
    headerGeolocationButton.classList.toggle( "header__geolocation-button--inverted" );
  }

  render() {
		return (
			<div className="header">
        <div className="container">
          <div className="header__wrap">
            <div className="row">
              <div className="col-lg-6">
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
              <div className="col-lg-6 header__right-block">
                <div className="row justify-content-between">
                  <div className="col-lg-8">
                    <div className="header__geolocation">
                      <a className="header__geolocation-button" onClick={this.DISPLAY} href="#">Алтайский край</a>  
                      <div className="header__geolocation-block" onClick={this.PASS}>
                        {this.geo()}
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