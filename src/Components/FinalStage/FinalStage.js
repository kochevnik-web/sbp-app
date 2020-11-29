import React, {useContext, useState} from 'react';
import {motion} from 'framer-motion'
import { Context } from "../../context";

import logo from './img/logo.svg';
import finalData from './finalData'

import Shers from '../Shers/Shers'

import './FinalStage.scss';

export default function FinalStage() {

    const { countMoney, moneyBox, defaultEm } = useContext(Context);

    const [p, setP] = useState({x: 0, y: 0})

    const colors = ['#0095D4', '#007C37', '#65B32E'];
    const paralax = (e) => {
        setP({x: (e.pageX * -1 / 200) + 'px ', y: (e.pageY * -1 / 200) + 'px'});
    }

    let CountShow = countMoney >= moneyBox ? moneyBox : countMoney;

    let data = finalData[2];
    if (CountShow >= 5000) {data = finalData[1]}
    if (CountShow >= 10000) {data = finalData[0]}

    return (
        <motion.div
            className="FinalStage"
            animate={{opacity: 1}}
            transition={{duration: 0.5}}
            initial={{opacity: 0}}
            style={{height: window.innerWidth <= 768 ? 'auto' : window.innerWidth / defaultEm}}
            onMouseMove={(e) => paralax(e)}
        >
            <div className="content">
                <div className="left" style={{transform: 'translate(' + p.x + ', ' + p.y + ')'}}>
                    <img src={data.svg} alt="СБП - Система быстрых переводов"/>                       
                </div>
                <div className="right">
                    <img src={logo} className="logo" alt="СБП - Система быстрых переводов"/>
                    <div className="title">
                        {data.titles.map((el, ind, arr)=>{
                            let count = ind === arr.length - 1 ? CountShow + '₽' : '';
                            return <span key={ind} style={{color: colors[ind]}}>{el + count}</span>
                        })}
                    </div>
                    <p>
                        <span>
                            {data.text}
                        </span>
                    </p>
                    <div className="buttons">
                        <a href="#" target="blank" className="final-btn app-btn">
                            <span>Научите пользоваться СБП!</span>
                        </a>
                        <span className="final-btn-more" onClick={() => window.location.reload()}>
                            <span>Сыграть ещё раз</span>
                        </span>
                    </div>
                </div>
            </div>
            <Shers />
        </motion.div>
    )
}
