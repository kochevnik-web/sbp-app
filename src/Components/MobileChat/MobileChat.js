import React, {useState, useEffect, useContext} from 'react';
import {motion} from 'framer-motion';
import { Context } from "../../context";

import './MobileChat.scss'

export default function MobileChat() {

    const { startChat } = useContext(Context);

    const [timer, setTimer] = useState(-1);

    useEffect(()=>{
        if(!startChat) return;
        let t = timer;
        setTimeout(()=>{
            setTimer(t + 1)
        },2500)
    },[timer, startChat]);

    const data = [
        'Ой, у меня комиссия.',
        'А будет сдача с 2020 рублей?',
        'У меня на карте нет денег!',
        'Подскажите, когда сможете оплатить за линолеум?',
        'Уважаемая Ксения, добавляем вас в наш дружный родительский чат!',
        'Прошу всех сдать денежку для наших детей.',
        'Приношу заранее свои извинения, но скидываться не буду.',
        'Наконец-то меняем пол!',
        'Уважаемые родители мальчика Ростислава, примите меры, он кусается.',
        'Нужно ещё четыре тысячи!',
        'Здравствуйте! Есть ли тут мама Вовчика?',
        'У меня нет на карте.',
        'Доброе утро! Платона перевожу в другую школу.',
        'Уважаемые родители! Напоминаю всем скинуться на линолеум!',
        'У меня комиссия, отдам наличными.',
        'Жду зарплату, скинусь позже.',
        'Нужна гелиевая ручка.',
        'Отпросились по семейным, скидываться не будем.',
        'Опять сборы на линолеум!',
        'Дай сдачу с 300 рублей.',
        'Хочу линолеум цвета хаки.',
    ];

    const message = data.map((el, idx, arr)=>{
    return (timer === idx) ? <motion.span key={idx} animate={{y: 0}} initial={{y: '5.4em'}} exit={{y: '-5.4em'}}>{el}</motion.span> : '';
    });

    return (
        <div className="MobileChat">
            {message}
        </div>
    )
}