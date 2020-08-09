import React, { Component } from 'react';

import s from '../sass/components/app.module.scss'

import Footer from './components/footer/footer';
import Main from './components/main/main';
import Header from './components/header/header';
import ModalBlock from './components/modalBlock/modalBlock'
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

  onModalHidden = (e) => {
    e.preventDefault()
    this.setState({modalHidden: true}) 
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
    localStorage.setItem('userName', '');
    this.setState({isUserNameEnter:false}) 
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

    return (
      <div className={s.wrapper}>
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
       <Main 
        isMovies={isMovies} 
        onMovie={this.onMovie} 
        onChannels={this.onChannels}/>
       <Footer/>
       <ModalBlock 
        closeModalBlock={this.closeModalBlock} 
        changeUserName={this.changeUserName} 
        userName={userName} 
        modalHidden={modalHidden}
        onModalHidden = {this.onModalHidden}/>
      </div>
    );
  }
}

