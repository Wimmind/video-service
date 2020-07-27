import React, { Component } from 'react';

import firstChannelIcon from '../../../assets/icon/first-channel.png'; 
import twiceTwoIcon from '../../../assets/icon/2x2.png'; 
import rbcIcon from '../../../assets/icon/rbc.png'; 
import amediaIcon from '../../../assets/icon/amedia.png'; 

import Channel from './channel/channel'

export default class IndexChannels extends Component {
    state = {
      
    }
    
    render () {

        const channels =  [
            { 
                icon: firstChannelIcon, 
                title: 'Первый канал', 
                telecasts: [
                    {time: '13:00',title: 'Новости (с субтитрами)'},
                    {time: '14:00',title: 'Давай поженимся'},
                    {time: '15:00',title: 'Другие новости'}
                ]  
            },
            { 
                icon: twiceTwoIcon, 
                title: '2x2', 
                telecasts: [
                    {time: '13:00',title: 'МУЛЬТ ТВ. Сезон 4, 7 серия'},
                    {time: '14:00',title: 'ПОДОЗРИТЕЛЬНАЯ СОВА. Сезон 7, 7 серия'},
                    {time: '15:00',title: 'БУРДАШЕВ. Сезон 1, 20 серия'}
                ]  
            },
            { 
                icon: rbcIcon, 
                title: 'РБК', 
                telecasts: [
                    {time: '13:00',title: 'ДЕНЬ. Горючая смесь: как бороться с суррогатом на АЗС'},
                    {time: '14:00',title: 'ДЕНЬ. Главные темы'},
                    {time: '15:00',title: 'Главные новости'}
                ]  
            },
            { 
                icon: amediaIcon, 
                title: 'AMEDIA PREMIUM', 
                telecasts: [
                    {time: '13:00',title: 'Клиент всегда мёртв'},
                    {time: '14:00',title: 'Голодные игры: Сойка-пересмешница. Часть I'},
                    {time: '15:00',title: 'Секс в большом городе'}
                ]  
            },
            { 
                icon: amediaIcon, 
                title: 'AMEDIA PREMIUM', 
                telecasts: [
                    {time: '13:00',title: 'Клиент всегда мёртв'},
                    {time: '14:00',title: 'Голодные игры: Сойка-пересмешница. Часть I'},
                    {time: '15:00',title: 'Секс в большом городе'}
                ]  
            },
        ]


        return (
           <li className='channel-list'>
               {
                channels.map((field,i)=>(
                    <Channel
                        key={i.toString() + 'ch'}
                        icon = {field.icon}
                        title = {field.title}
                        telecasts = {field.telecasts}
                    />
                ))
               }
           </li>
        )
    }
}