import React, { Component } from 'react';

import './App.scss';
import base from './sass/base.module.scss';

import Footer from './components/footer/footer';
import Header from './components/header/header';
import IndexMovies from './components/index-movies/index-movies';
import IndexChannels from './components/index-channels/index-channels';
export default class App extends Component {
  state = {
    isMovies: true,
    modalHidden: true,
    userName: localStorage.getItem('userName') || '',
    userNameForHeader: localStorage.getItem('userName') || '',
    isUserNameEnter : false
  }

  

  onMovie = () => {
    this.setState({isMovies: true})  
  }

  onChannels = () => {
    this.setState({isMovies: false})  
  }

  closeModalBlock = (e) => {
    e.preventDefault()
    this.setState({modalHidden: true}) 
    this.setState({userNameForHeader: this.state.userName})  
    this.setState({isUserNameEnter:false}) 
    localStorage.setItem('userName', this.state.userName);
  }

  hiddenUsername = () => {
    this.setState({isUserNameEnter: true})
  }

  showModalBlock = (e) => {
    e.preventDefault()
    this.setState({modalHidden: false})  
  }

  logout = (e) => {
    e.preventDefault();
    this.setState({userName: ''})  
    this.setState({userNameForHeader:''}) 
  
  }

  changeUserName = (e) => {
    e.preventDefault();
    this.setState({userName: e.target.value})  
  }


  render () {
    const {
      isMovies,
      modalHidden,
      userName,
      userNameForHeader,
      isUserNameEnter
    } = this.state;

    let tagMovies = 'tab-item';
    let tagChannels = 'tab-item';
    let modalBlock = 'authorization-block';
    let fadeBlock = 'fade-block';
    let index;

    if (isMovies){
      tagMovies += ' tab-item_active'
      index = <IndexMovies/>
    }
    else {
      tagChannels += ' tab-item_active'
      index = <IndexChannels/>
    }

    if (modalHidden){
      modalBlock += ' hidden';
      fadeBlock += ' hidden'
    }

    return (
      <div className='app-wrapper'>
       <Header 
        buttonModalFunc={this.showModalBlock}
        logoutButton = {this.logout}
        userName={userNameForHeader}
        userNameChange ={userName}
        inputFuncChange = {this.changeUserName}
        inputFuncBlur = {this.closeModalBlock}
        isUserNameEnter = {isUserNameEnter}
        hiddenUsername = {this.hiddenUsername}
      />
       <main className="main">
        <div className={base.wrapper}>
          <div className="tabs-container">
            <li className="tabs-list">
              <ul className={tagMovies} onClick={this.onMovie}>Фильмы</ul>
              <ul className={tagChannels} onClick={this.onChannels}>Телеканалы</ul>
            </li>
          </div>
          {index}
        </div>
       </main>
       <Footer/>
       <div className={fadeBlock}>
         <form className={modalBlock}>
           <p className="authorization-block_title">Вход</p>
          <input 
            className='input-inlet'
            placeholder="Логин" 
            autoFocus={true}
            onChange={this.changeUserName}
            value={userName}
          />
          <input 
            className='input-inlet'
            placeholder="Пароль" 
            
          />
          <div className='checkbox-group'>
          <input
            className='input-checkbox'
            type='checkbox'
            id='checkbox'
          />
          <label htmlFor='checkbox'>
            Запомнить
          </label>
          </div>
          <button 
            onClick={this.closeModalBlock}
            className="modal-sign-in-button" 
            type="submit"
          >Войти
          </button> 
         </form>
        </div>
      </div>
    );
  }
}

