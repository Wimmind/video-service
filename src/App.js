import React, { Component } from 'react';

import './App.scss';
import base from './sass/base.module.scss';

import Footer from './components/footer/footer';
import Header from './components/header/header';
import IndexMovies from './components/index-movies/index-movies';
import IndexChannels from './components/index-channels/index-channels';
export default class App extends Component {
  state = {
   isMovies : true
  }

  onMovie = () => {
    this.setState({isMovies: true})  
  }

  onChannels = () => {
    this.setState({isMovies: false})  
  }


  render () {
    const {isMovies} = this.state;

    let tagMovies = 'tab-item';
    let tagChannels = 'tab-item';
    let index;

    if (isMovies){
      tagMovies += ' tab-item_active'
      index = <IndexMovies/>
    }
    else {
      tagChannels += ' tab-item_active'
      index = <IndexChannels/>
    }

    return (
      <div className='app-wrapper'>
       <Header/>
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
      </div>
    );
  }
}

