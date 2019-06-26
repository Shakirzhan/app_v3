import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Footer extends React.Component {
	render() {
		return (
			<div className="footer">
        <div className="container">
          <div className="footer__wrap">
            <div className="row">
              <div className="col-lg-4">
                <div className="footer__logo">
                  <div>
                    <img src="/img/logo-b.svg" alt="foot-logo" />
                  </div>
                  <div className="footer__logo-wrap">
                    <b className="footer__logo-head">Трансдорстат</b>
                    <span className="footer__logo-slogan">Унифицированная система сбора отчетностсти</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="menu row">
                  <div className="menu-section col-lg-4">
                    <b className="menu-head">Помощь и поддержка</b>
                    <ul className="menu-list">
                      <li className="menu-item">
                        <a href="#">Вход и регистрация</a>
                      </li>
                      <li className="menu-item">
                        <a href="#">Задать вопрос</a>
                      </li>
                    </ul>
                  </div>
                  <div className="menu-section col-lg-4">
                    <b className="menu-head">Партнёрам</b>
                    <ul className="menu-list">
                      <li className="menu-item">
                        <a href="#">Государственным органам</a>
                      </li>
                      <li className="menu-item">
                        <a href="#">Коммерческим организациям</a>
                      </li>
                      <li className="menu-item">
                        <a href="#">Документы</a>
                      </li>
                    </ul>
                  </div>
                  <div className="menu-section col-lg-4">
                    <b className="menu-head">Полезные ресурсы</b>
                    <ul className="menu-list">
                      <li className="menu-item">
                        <a href="#">Российская общественная инициатива</a>
                      </li>
                      <li className="menu-item">
                        <a href="#">Интернет-портал правовой информации</a>
                      </li>
                    </ul>
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