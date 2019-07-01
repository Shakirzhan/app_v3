import React from 'react';
import ReactDOM from 'react-dom';

class PopularQuestions extends React.Component {
	DISPLAY(e) {
		let el = e.target;
		let questionEl = document.querySelectorAll( ".question__dscr" );
		if ( el.tagName == "B" ) {
			for ( var k in questionEl ) {
				if ( typeof questionEl[k] == "object" ) {
					if ( questionEl[k].classList.contains( "question__dscr--show" ) ) {
						questionEl[k].classList.remove( "question__dscr--show" );	
					}
				}
			}
			el.nextSibling.classList.toggle( "question__dscr--show" );
		}
	}

	render() {
		return (
			<div className="main-form" onClick={this.DISPLAY}>
				<div key="1">
	        <b className="question__head">Как определяется стоимость работ по ландшафтному дизайну?</b>
	        <p className="question__dscr question__dscr--show">Конечная стоимость зависит от нескольких факторов: сложности работ, используемых материалов, площади участка и количества изделий, произведенных на заказ. Стоимость рассчитывается индивидуально для каждого проекта.</p> 
     	 	</div>
     	 	<div key="2">
	        <b className="question__head">Есть ли гарантия на ваши работы?</b>
	        <p className="question__dscr">Мы заключаем договор с каждым клиентом, который заказывает услуги в нашей компании. По условиям договора гарантия на все виды работ действует 1 год после сдачи проекта. В этот период вы можете связаться с нами, изложить проблему и вызвать специалиста на участок. Если случай гарантийный, то мы бесплатно выполним необходимые работы.</p> 
     	 	</div>
     	 	<div key="3">
	        <b className="question__head">Можно ли получить услугу «ландшафтное проектирование» дистанционно?</b>
	        <p className="question__dscr">Да, мы можем подготовить проект для вашего участка без выезда на объект. Для этого нам необходим план участка, список ваших пожеланий и бюджет на реализацию. Мы можем выслать макеты по e-mail или отправить распечатанные версии почтой.</p> 
     	 	</div>
			</div>
		)
	}
}

export default class QuestionContent extends React.Component {
	render() {
		return (
			<div>
	      <div className="main-form">
	        <h2 className="main-form__main-head main-form__main-head--bold">Задать вопрос</h2>
	        <div className="main-form__section">
	          <b className="main-form__head">Ваш email</b>
	          <input type="text" name="text" className="main-form__txt" placeholder="help@transdorstroy.ru" />
	        </div>
	        <div className="main-form__section">
	          <b className="main-form__head">Ваш вопрос</b>
	          <textarea className="main-form__txt" placeholder="Введите вопрос"></textarea>
	        </div>
	        <div className="jobs__btn-wrap">
	          <a href="#" className="jobs__button jobs__button-blue">Отправить</a>
	        </div>
	      </div>
	     	<PopularQuestions />
      </div>
    )
	}
}