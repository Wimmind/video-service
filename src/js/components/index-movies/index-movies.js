import React, { Component } from 'react';

import s from '../../../sass/components/index-movies.module.scss'
import indexData from '../../data/indexData'
export default class IndexMovies extends Component {
    state = {
      
    }
  
    render () {

      return (
        <div>
          <p className={s.movies_title}><span role="img" aria-label="fire">🔥</span>Новинки</p>
          <div className={s.items_container}>
          {indexData.newMovies.map((field,i) => (
            <a  
              key={i.toString() + 'a'} 
              href={'./'}
              className={s.movie_item}
            >
              <div     
                style={{backgroundImage: `url(${field.image})`}}
                className={s.movie_item_img}
              > 
                <div className={s.movie_item_fade}>
                  <span className={s.movie_item_description}>{field.description}</span>  
                </div>        
              </div>
              <p 
                className={s.movie_item_title}
              >
                {field.title}
              </p>
            </a>
            ))}
          </div>
          <p className={s.movies_title}>Жанры</p>
          <div className={s.items_container}>
          {indexData.colorGenreArray.map((field,i) => (
            <a  
              key={i.toString() + 'a'} 
              href={'./'}
              className={s.movie_item}
            >
              <div     
                style={{background: `linear-gradient(136.27deg, ${field.first} 8.44%, ${field.second} 91.36%)`}}
                className={s.genre_item_img}
              > <span className={s.genre_item_ico}>{field.smail}</span>
                <span className={s.genre_item_title}>{field.title}  </span>        
              </div>
            </a>
            ))}
          </div>
        </div>
      );
    }
}