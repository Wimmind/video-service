import React, { Component } from 'react';

import s from '../../../../sass/components/channel.module.scss'
export default class Channel extends Component {
    state = {
      
    }
    
    render () {
        const { icon, title, telecasts } = this.props;

        return (
            <ul className={s.item}>
                <div className={s.ico}>
                    <a href='./'>
                        <img 
                            src={icon}
                            alt="channel icon"
                        />
                    </a>
                </div>
                <div className={s.description}> 
                    <a href='./'><p className={s.title}>{title}</p></a> 
                    <div className='telecasts'>
                        {
                            telecasts.map((field,i)=>(
                                <p  key={i.toString() + 'ch1'} className={s.telecasts_item}>
                                    <span className={s.telecasts_item_time}>
                                        {field.time}
                                    </span>
                                    <span>
                                        {field.title}
                                    </span>
                                </p>
                            ))
                        }
                    </div>
                </div>
            </ul>
        )
    }
}