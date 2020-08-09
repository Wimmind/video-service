import React, { Component } from 'react';

import s from '../../../sass/components/main.module.scss'

import IndexMovies from '../index-movies/index-movies';
import IndexChannels from '../index-channels/index-channels';

export default class Main extends Component {


  render () {
    const { isMovies } = this.props;

    let tagMovies = s.tab_item;
    let tagChannels = s.tab_item;
    let index;

    if (isMovies){
      tagMovies = s.tab_item_active;
      index = <IndexMovies/>
    }
    else {
      tagChannels = s.tab_item_active;
      index = <IndexChannels/>
    }

    return (
       <main className={s.main}>
        <div className='base-wrapper'>
          <div className={s.tabs_container}>
            <ul className={s.tabs_list}>
              <li className={tagMovies} onClick={this.props.onMovie}>Фильмы</li>
              <li className={tagChannels} onClick={this.props.onChannels}>Телеканалы</li>
            </ul>
          </div>
          {index}
        </div>
       </main>
    );
  }
}

