import React, { Component } from 'react';

import './index-movies.scss';


import catImg from '../../assets/image/cat.jpg'; 
import batmanImg from '../../assets/image/batman.jpg'; 
import stripperImg from '../../assets/image/stripper.jpg'; 
import hollywoodImg from '../../assets/image/hollywood.jpg'; 

export default class IndexMovies extends Component {
    state = {
      
    }
  
    render () {
      const newMovies = [
        {image: catImg, title: 'Мульт в кино. Выпуск №103. Некогда грустить!', description : 'лалалала'  },
        {image: batmanImg, title: 'Новый Бэтмен', description : 'лалалала'  },
        {image: hollywoodImg, title: 'Однажды... в Голливуде', description : 'Фильм повествует о череде событий, произошедших в Голливуде в 1969 году, на закате его «золотого века». Известный актер Рик Далтон и его дублер Клифф Бут пытаются найти свое место в стремительно меняющемся мире киноиндустрии.'  },
        {image: stripperImg, title: 'Стриптизёрши', description : 'лалалала'  }
      ]

      const colorGenreArray = [
        {first: '#F2C94C', second: '#F29A4A', title: 'Комедии', smail: '😁'},
        {first: '#F2994A', second: '#EB5757', title: 'Драмы', smail: '😭'},
        {first: '#56CCF2', second: '#2F80ED', title: 'Фантастика', smail: '👽'},
        {first: '#828282', second: '#333333', title: 'Ужасы', smail: '👻'}
      ]

      return (
        <div>
          <p className="movies-title">🔥 Новинки</p>
          <div className='items-container'>
          {newMovies.map((field,i) => (
            <a  
              key={i.toString() + 'a'} 
              href={'./'}
              className='movie-item'
            >
              <div     
                style={{backgroundImage: `url(${field.image})`}}
                className='movie-item-img'
              > 
                <div className='movie-item-fade'>
                  <span className='movie-item-description'>{field.description}</span>  
                </div>        
              </div>
              <p 
                className='movie-item-title'
              >
                {field.title}
              </p>
            </a>
            ))}
          </div>
          <p className="movies-title">Жанры</p>
          <div className='items-container'>
          {colorGenreArray.map((field,i) => (
            <a  
              key={i.toString() + 'a'} 
              href={'./'}
              className='movie-item'
            >
              <div     
                style={{background: `linear-gradient(136.27deg, ${field.first} 8.44%, ${field.second} 91.36%)`}}
                className='genre-item-img'
              > <span className='genre-item-ico'>{field.smail}</span>
                <span className='genre-item-title'>{field.title}  </span>        
              </div>
            </a>
            ))}
          </div>
        </div>
      );
    }
}