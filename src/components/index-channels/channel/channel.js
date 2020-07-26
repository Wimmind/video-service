import React, { Component } from 'react';

import './channel.scss';


export default class Channel extends Component {
    state = {
      
    }
    
    render () {
        const { icon, title, telecasts } = this.props;

        return (
            <ul className='channel-item'>
                <div className='channel-ico'>
                    <a href='./'>
                        <img 
                        src={icon}
                        />
                    </a>
                </div>
                <div className='channel-description'> 
                    <a href='./'><p className='channel-title'>{title}</p></a> 
                    <div className='telecasts'>
                        {
                            telecasts.map((field,i)=>(
                                <p  key={i.toString() + 'ch1'} className='telecasts-item'>
                                    <a href='./'>
                                        <span className='telecasts-item_time'>
                                            {field.time}
                                        </span>
                                        {field.title}
                                    </a>
                                </p>
                            ))
                        }
                    </div>
                </div>
            </ul>
        )
    }
}