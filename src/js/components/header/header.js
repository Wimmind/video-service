import React, { Component } from 'react';

import s from '../../../sass/components/header.module.scss'

import logo from '../../../assets/icon/logo.png'; 

export default class Header extends Component {

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
            userNameText = s.hidden
            inputUserName = s.username_input
        } else {
            userNameText = s.username_text
            inputUserName =s.hidden;
        }

        if (userName.length) {
            enterButton = s.sign_out_button
            enterButtonText = 'Выйти'
            enterButtonFunction = logoutButton;
        } else {
            enterButton = s.sign_in_button
            enterButtonText = 'Войти'
            enterButtonFunction = buttonModalFunc;
        }
        return (
            <header className={s.header}>
                <div className={[s.wrapper,'base-wrapper'].join(' ')}>
                    <a 
                        className={s.logo}
                        href={'./'}
                        >
                        <img 
                            src={logo}
                            width={182}
                            height={36}
                            alt="Видеосервис"
                        />
                    </a>
                    <form className={s.search_group}>
                        <input 
                            className={[s.search_input,'input-inlet'].join(' ')}
                            placeholder="Поиск..." 
                        />
                        <button 
                            className={s.search_button}
                            type="submit"
                        >Найти
                        </button>
                    </form>
                    <div className={s.username_group}>
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