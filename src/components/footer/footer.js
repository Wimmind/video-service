import React, { Component } from 'react';
import './footer.scss';
import base from '../../sass/base.module.scss';

export default class Footer extends Component {
  state = {
    
  }

  render () {
    return (
      <footer className='footer'>
        <div className={base.wrapper + ' ' +"footer-wrapper"}>
          <span className='footer-logo'></span>
          <div className='footer-info'>
            <span>426057, Россия, Удмуртская Республика, г. Ижевск, ул. Карла Маркса, 246 (ДК «Металлург») </span>
            <span>+7 (3412) 93-88-61, 43-29-29</span>
            <span><a href={'https://htc-cs.ru'}>htc-cs.ru</a></span>
        </div>
        </div>
      </footer>
    );
  }
}

