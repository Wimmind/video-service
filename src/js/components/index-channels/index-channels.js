import React, { Component } from 'react';

import s from '../../../sass/components/index-channels.module.scss'

import indexData from '../../data/indexData'

import Channel from './channel/channel'

export default class IndexChannels extends Component {
 
    render () {

        return (
           <ul className={s.channel_list}>
               {
                indexData.channels.map((field,i)=>(
                    <Channel
                        key={i.toString() + 'ch'}
                        icon = {field.icon}
                        title = {field.title}
                        telecasts = {field.telecasts}
                    />
                ))
               }
           </ul>
        )
    }
}