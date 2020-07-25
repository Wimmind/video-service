import React, { Component } from 'react';

import './header.scss';
import base from '../../sass/base.module.scss';
import logo from '../../assets/icon/logo.png'; 


export default class Header extends Component {
  state = {
    userName: ''
  }

  render () {
    const {userName} = this.state;

    return (
        <header className="header">
            <div className={base.wrapper + ' ' +"header-wrapper"}>
                <a 
                    className="header-logo"
                    href={'./'}
                    >
                    <img 
                        src={logo}
                        width={182}
                        height={36}
                        alt="Видеосервис"
                    />
                </a>
                <form className="search-group">
                    <input 
                        className="search-input" 
                        placeholder="Поиск..." 
                        autoFocus=""
                    />
                    <button 
                        className="search-button"
                        type="submit"
                    >Найти
                    </button>
                </form> 
                <button 
                    className="sign-in-button" 
                    type="submit"
                >Войти
                </button> 
            </div>
        </header>
    );
  }
}