import React, { Component } from 'react';

import './header.scss';
import base from '../../sass/base.module.scss';
import logo from '../../assets/icon/logo.png'; 


export default class Header extends Component {
    state = {
        
    }


    render () {
        const {
            buttonModalFunc,
            logoutButton,
            userName,
            inputFuncChange,
            inputFuncBlur,
            hiddenUsername,
            isUserNameEnter,
            userNameChange
        } = this.props;

        let enterButton;
        let enterButtonText;
        let enterButtonFunction;

        let inputUserName;
        let userNameText;
        if (isUserNameEnter) {
            userNameText = 'hidden'
            inputUserName = 'username-input'
        } else {
            userNameText = 'username-text'
            inputUserName = 'username-input hidden'
        }


        if (userName.length) {
            enterButton = 'sign-out-button'
            enterButtonText = 'Выйти'
            enterButtonFunction = logoutButton;
        } else {
            enterButton = 'sign-in-button'
            enterButtonText = 'Войти'
            enterButtonFunction = buttonModalFunc;
        }
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
                            className="input-inlet search-input" 
                            placeholder="Поиск..." 
                            ref={el=> { this.el = el; }}
                        />
                        <button 
                            className="search-button"
                            type="submit"
                        >Найти
                        </button>
                    </form>
                    <div className='username-group'>
                    <span 
                        onClick={hiddenUsername}
                        className={userNameText}
                    >{userName}</span>
                    <input
                        className={inputUserName}
                        onChange = {inputFuncChange}
                        onBlur = {inputFuncBlur}
                        value = {userNameChange}
                    />
                    <button 
                        onClick={enterButtonFunction}
                        className={enterButton} 
                        type="submit"
                    >{enterButtonText}
                    </button> 
                    </div>
                </div>
            </header>
        );
    }
}