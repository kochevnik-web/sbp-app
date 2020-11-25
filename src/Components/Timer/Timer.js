import React, {useContext} from 'react';
import {motion, AnimatePresence} from 'framer-motion';

import './Timer.scss';

import { Context } from "../../context";

export default function Timer() {

    const { countMoney, timer, test } = useContext(Context);

    const elements = new Array(20).fill(0).map((el, idx, arr) => {
        let color1 = idx < countMoney ? '#FBBB20' : '#C3D2BB';
        let color2 = idx < countMoney ? '#FED072' : '#D7E1D2';
        return (
            <svg key={idx} style={{marginLeft: '-2.2em', zIndex: arr.length - idx}} width="3.5em" height="3.6em" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.416 35.075C26.8617 35.075 34.519 27.4177 34.519 17.972C34.519 8.52629 26.8617 0.869019 17.416 0.869019C7.97026 0.869019 0.312988 8.52629 0.312988 17.972C0.312988 27.4177 7.97026 35.075 17.416 35.075Z" fill={color1}/>
                <path d="M4.33008 28.981C7.46708 32.706 12.1641 35.076 17.4161 35.076C26.8621 35.076 34.5201 27.419 34.5201 17.972C34.5201 15.987 34.1781 14.083 33.5571 12.311C23.9111 18.037 14.1771 23.609 4.33008 28.981Z" fill={color2}/>
                <path d="M17.1451 30.703C24.3259 30.703 30.1471 24.8818 30.1471 17.701C30.1471 10.5202 24.3259 4.69897 17.1451 4.69897C9.96426 4.69897 4.14307 10.5202 4.14307 17.701C4.14307 24.8818 9.96426 30.703 17.1451 30.703Z" fill={color1}/>
                <path d="M17.1449 30.529C24.2296 30.529 29.9729 24.7858 29.9729 17.701C29.9729 10.6163 24.2296 4.87305 17.1449 4.87305C10.0602 4.87305 4.31689 10.6163 4.31689 17.701C4.31689 24.7858 10.0602 30.529 17.1449 30.529Z" stroke="#FFF2DA" strokeMiterlimit="10"/>
            </svg>
        )
    });

    return (
        <div className="Timer" onClick={test}>
            <div className="timer-counter">
                {elements}
            </div>
            <div className="timer-time" style={{color: timer <= 15 ? '#E50050' : '#1D1346'}}>
                {timer <= 15 ? (
                    <AnimatePresence><motion.span key={"countdown" + timer} exit={{scale: 2, opacity: 0, position: "absolute"}} initial={{scale: 1, opacity: 1}} animate={{y: 0, opacity: 1}}>{timer < 10 ? '0:0' + timer : '0:' + timer}</motion.span></AnimatePresence>
                ) : (
                    '0:' + timer
                )}
            </div>
        </div>
    )
}
