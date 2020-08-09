import React, { Component } from 'react';

import s from '../../../sass/components/footer.module.scss'
export default class Footer extends Component {
  render () {
    return (
      <footer className={s.footer}>
        <div className={[s.wrapper,'base-wrapper'].join(' ')}>
          <span className={s.logo}></span>
          <div className={s.info}>
            <span>426057, Россия, Удмуртская Республика, г. Ижевск, ул. Карла Маркса, 246 (ДК «Металлург») </span>
            <span>+7 (3412) 93-88-61, 43-29-29</span>
            <span><a href={'https://htc-cs.ru'}>htc-cs.ru</a></span>
        </div>
        </div>
      </footer>
    );
  }
}

