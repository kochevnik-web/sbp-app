import React, {useContext} from 'react';
import {motion} from 'framer-motion'
import { Context } from "../../context";

import logo from './img/logo.svg';
import finalData from './finalData'

import './FinalStage.scss';

export default function FinalStage() {

    const { isMobile, defaultEm } = useContext(Context);

    const colors = ['#0095D4', '#007C37', '#65B32E'];

    return (
        <motion.div
            className="FinalStage"
            animate={{opacity: 1}}
            transition={{duration: 0.5}}
            initial={{opacity: 0}}
            style={{height: isMobile ? 'auto' : window.innerWidth / defaultEm}}
        >
            <div className="content">
                <div className="left">
                    <img src={finalData[0].svg} alt="СБП - Система быстрых переводов"/>                       
                </div>
                <div className="right">
                    <img src={logo} className="logo" alt="СБП - Система быстрых переводов"/>
                    <div className="title">
                        {finalData[0].titles.map((el, ind)=>{
                            return <span key={ind} style={{color: colors[ind]}}>{el}</span>
                        })}
                    </div>
                    <p>
                        <span>
                            {finalData[0].text}
                        </span>
                    </p>
                    <div className="buttons">
                        <span className="final-btn app-btn">
                            <span>Научите пользоваться СБП!</span>
                        </span>
                        <span className="final-btn-more">
                            <span>Сыграть ещё раз</span>
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
