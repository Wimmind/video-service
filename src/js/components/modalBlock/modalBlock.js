import React, { Component } from 'react';

import s from '../../../sass/components/modalBlock.module.scss'


export default class App extends Component {


  render () {
    const {
      modalHidden,
      closeModalBlock,
      changeUserName,
      userName,
      onModalHidden
    } = this.props;

    let modalBlock = s.authorization_block;
    let fadeBlock = s.fade_block;

    if (modalHidden){
      modalBlock = s.hidden;
      fadeBlock = s.hidden;
    }

    return (
       <div className={fadeBlock}>
         <div className={modalBlock}>
          <form>
            <p className={s.authorization_block_title}>Вход</p>
            <input
              name="name" 
              className='input-inlet'
              placeholder="Логин" 
              autoFocus={true}
              onChange={changeUserName}
              value={userName}
              required/>
            <input
              type='password'
              className='input-inlet'
              placeholder="Пароль" />
            <div className={s.checkbox_group}>
            <input
              className={s.input_checkbox}
              type='checkbox'
              id='checkbox'/>
            <label htmlFor='checkbox'>
              Запомнить
            </label>
            </div>
            <button 
              onClick={closeModalBlock}
              className={s.modal_sign_in_button}
              type="submit"
            >Войти
            </button> 
          </form>
          <button className={s.close_modal_block} onClick={onModalHidden}></button>
         </div>
        </div>
    );
  }
}

