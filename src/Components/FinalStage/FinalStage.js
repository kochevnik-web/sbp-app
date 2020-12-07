import React, {useContext, useState} from 'react';
import {motion} from 'framer-motion'
import { Context } from "../../context";

import logo from './img/logo.svg';
import finalData from './finalData'

import Shers from '../Shers/Shers'

import './FinalStage.scss';

export default function FinalStage() {

    const { countMoney, moneyBox, defaultEm, isMobile } = useContext(Context);

    const [p, setP] = useState({x: 0, y: 0})

    const colors = ['#0095D4', '#007C37', '#65B32E', '#FEB215'];
    const paralax = (e) => {
        setP({x: (e.pageX * -1 / 200) + 'px ', y: (e.pageY * -1 / 200) + 'px'});
    }

    let CountShow = countMoney >= moneyBox ? moneyBox : countMoney;

    let data = finalData[2];
    if (CountShow > 6000) {data = finalData[1]}
    if (CountShow > 8000) {data = finalData[0]}

    let a = document.querySelector('head meta[property="og:image"]');
    a.setAttribute('content', data.url);

    let clx = ['FinalStage'];
    if(isMobile){clx.push('vertical');}

    const runTitles = isMobile ? data.titlesMobile : data.titles;

    return (
        <motion.div
            className={clx.join(' ')}
            animate={{opacity: 1}}
            transition={{duration: 0.5}}
            initial={{opacity: 0}}
            style={{height: window.innerWidth <= 768 ? 'auto' : window.innerWidth / defaultEm}}
            onMouseMove={(e) => paralax(e)}
        >
            <div className="content" imgData={data.url}>
                {!isMobile &&(
                    <div className="left" style={{transform: 'translate(' + p.x + ', ' + p.y + ')'}}>
                        <img src={data.svg} alt="СБП - Система быстрых переводов"/>
                    </div>
                )}

                <div className="right">
                    <img src={logo} className="logo" alt="СБП - Система быстрых переводов"/>
                    <div className="title">
                        {runTitles.map((el, ind, arr)=>{
                            let count = ind === arr.length - 1 ? CountShow + '₽' : '';
                            return <span key={ind} style={{color: colors[ind]}}>{el + count}</span>
                        })}
                    </div>
                    <p>
                        {data.text.map((el, ind, arr)=>{
                            return (
                                isMobile && ind === 1 && data.svg2 ? <><img src={data.svg2} alt="img"/><span key={ind}>{el}</span></> : <span key={ind}>{el}</span>
                            )
                        })}
                    </p>
                    <div className="buttons">
                        <a href="https://sbp.nspk.ru/faq/?utm_source=medialeaks&utm_medium=fix&utm_campaign=nspk_2020_sbp_jun_aug_sp&utm_term=game" target="blank" className="final-btn app-btn">
                            <span>Научите пользоваться СБП!</span>
                        </a>
                        <span className="final-btn-more" onClick={() => window.location.reload()}>
                            <span>Сыграть ещё раз</span>
                        </span>
                    </div>
                </div>
            </div>
            <Shers imgShare={data.url} />
        </motion.div>
    )
}
