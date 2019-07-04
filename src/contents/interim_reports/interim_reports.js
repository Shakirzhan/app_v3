import React from 'react'; 
import ReactDOM from 'react-dom';
import axios from 'axios';

export default class SharedContent extends React.Component {
	state = {
    data: []
  }
	componentDidMount() {
    axios.get(`/!json/interim_reports/interim_reports.json`)
      .then(res => {
        const data = res.data;
        this.setState({ data });
      })
  }

  // displayedContacts: this.state.data
	InterimReportsContent() {
		function elements(el) {
      const doubled = el.map( (it) =>  
        <a href="#" className="annual-section__item annual-section__item--pink-dark" key={it.id}>
          <b className="annual-section__item-head">{it.title}</b>
          <b className="annual-section__item-date">{it.date}</b>
        </a>
      );
      return (
        <div className="annual-section__list">
          {doubled}
        </div> 
      );
    }

    const doubled = this.state.data.map( (it) => 
      <div className="annual-section" key={it.id}>
        <b className="annual-section__head">{it.year}</b>
        {elements(it.child_element)}
      </div>    
    );
    return (
      <div className="main-wrap" id="main-wrap">
        {doubled} 
      </div>
    );
	}

	handleFiltr() {
		
		/*
		var filtr = +e.target.value;
    var d = [];
    var displayedData = this.state.data.map(function(el, index) {
      var obj = {};
      var data = el.child_element;
      obj.id = el.id;
      obj.year = el.year;
      obj.child_element = [];
      data.filter(function(it, i) {
        if ( it.bix == filtr ) {
          obj.child_element.push( it );  
        }
      });
      d.push( obj );
    });
    this.setState({
      data: d
    });
    */
  }

	render() {
		return (
			<div>
				<div className="types">
	        <b className="types__head">Типы отчетов:</b>
	        <div className="types__wrap">
	          <label className="types__button types__button--darker">
	            <input type="radio" name="all" value="1" onChange={this.handleFiltr} />
	            <div className="types__visual"></div>
	            <span className="types__txt">ДТП</span>
	          </label>
	        </div>
	        <div className="types__wrap">
	          <label className="types__button types__button--lighter">
	            <input type="radio" name="all" value="2" onChange={this.handleFiltr} />
	            <div className="types__visual"></div>
	            <span className="types__txt">Дорожные работы</span>
	          </label>
	        </div>
	        <div className="types__wrap">
	          <label className="types__button types__button--blue-light">
	            <input type="radio" name="all" value="3" onChange={this.handleFiltr} />
	            <div className="types__visual"></div>
	            <span className="types__txt">Опасные участки</span>
	          </label>
	        </div>
	      </div> 
	      {this.InterimReportsContent()}
	    </div>
		);
	}
}