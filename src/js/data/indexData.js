import firstChannelIcon from '../../assets/icon/first-channel.png'; 
import twiceTwoIcon from '../../assets/icon/2x2.png'; 
import rbcIcon from '../../assets/icon/rbc.png'; 
import amediaIcon from '../../assets/icon/amedia.png'; 

import catImg from '../../assets/image/cat.jpg'; 
import batmanImg from '../../assets/image/batman.jpg'; 
import stripperImg from '../../assets/image/stripper.jpg'; 
import hollywoodImg from '../../assets/image/hollywood.jpg'; 

const indexData = {
    channels : [
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
    ],
    newMovies : [
        {image: catImg, title: 'Мульт в кино. Выпуск №103. Некогда грустить!', description : 'В новом выпуске ми-ми-мишки изобретут машину сна, а Дракоша Тоша научит завязывать шнурки.'  },
        {image: batmanImg, title: 'Новый Бэтмен', description : 'Супергеройский боевик с элементами неонуара режиссёра Кристофера Нолана по комиксам DC Comics'  },
        {image: hollywoodImg, title: 'Однажды... в Голливуде', description : 'Фильм повествует о череде событий, произошедших в Голливуде в 1969 году, на закате его «золотого века». Известный актер Рик Далтон и его дублер Клифф Бут пытаются найти свое место в стремительно меняющемся мире киноиндустрии.'  },
        {image: stripperImg, title: 'Стриптизёрши', description : 'Танцовщицы элитного стриптиз-клуба, клиенты которого - известные финансисты с Уолл-Стрит - привыкли к большим заработкам и роскошной жизни.'  }
    ],
    colorGenreArray : [
        {first: '#F2C94C', second: '#F29A4A', title: 'Комедии', smail: '😁'},
        {first: '#F2994A', second: '#EB5757', title: 'Драмы', smail: '😭'},
        {first: '#56CCF2', second: '#2F80ED', title: 'Фантастика', smail: '👽'},
        {first: '#828282', second: '#333333', title: 'Ужасы', smail: '👻'}
      ]   
}

export default indexData;