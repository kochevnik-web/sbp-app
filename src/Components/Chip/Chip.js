import React, {useState, useRef, useContext} from 'react';
import {motion, AnimatePresence } from 'framer-motion';

import './Chip.scss';
import { Context } from "../../context";

export default function Chip({x, y, w}) {

    const { hendleAddCounter, getLeft, getTop, pause, isMobileGame } = useContext(Context);

    const [fly, setFly] = useState(false);
    const [randLeft, setRandLeft] = useState(getLeft());
    const [randTop, setRandRight] = useState(getTop());

    const chipRef = useRef(null);

    let refTop = chipRef.current ? chipRef.current.getBoundingClientRect().top - y : 0;
    let refRight = chipRef.current ? x - chipRef.current.getBoundingClientRect().right : 0;
   
    if(isMobileGame){
        refTop = chipRef.current ? chipRef.current.getBoundingClientRect().top - y : 0;
        if(chipRef.current){
            if(w/2 < chipRef.current.getBoundingClientRect().right){
                refRight = chipRef.current ? chipRef.current.getBoundingClientRect().right - x * 1.5 : 0;
            } else {
                refRight = chipRef.current ? x - chipRef.current.getBoundingClientRect().right : 0;
            }
        }
    }

    let clx = ['chip-wrap'];
    if(fly){
        clx.push('fly');
    }

    const hendleCounter = () => {
        if (!pause) {
            setFly(true);
            hendleAddCounter();
        }
    }

    let variants = {
        start: {opacity: 0.3, transition: {delay: 3.5, duration: 1.5}, transitionEnd: {display: 'none'}},
        finish: {opacity: 1},
    }

    let variants2 = {
        start: {y: refTop * - 1, transitionEnd: {display: 'none'}},
        finish: {y: 0},
    }
    let variants3 = {
        start: {x: refRight, scale: 0.5, opacity: 0},
        finish: {x: 0, scale: 1, opacity: 1},
    }


    return (
        <AnimatePresence>
            <motion.div
                className="Chip"
                animate={{opacity: 1, scale: 1, y: 0}}
                transition={{duration: 0.5, delay: 0.3, type:"spring"}}
                initial={{opacity: 0, scale: 0.5, y: '20em'}}
                exit={{opacity: 0}}
                style={{left: randLeft + '%', bottom: randTop + '%'}}
                ref={chipRef}
            >
                <motion.div
                    className={fly ? "chip-wrap-hide fly2" : "chip-wrap-hide"}
                    variants={variants}
                    // animate={fly ? "finish" : 'start'}
                    animate="finish"
                    initial="finish"
                    exit="finish"
                    onClick={hendleCounter}
                >
                    <motion.div
                        variants={variants2}
                        className="chip-wrap"
                        initial="finish"
                        animate={!fly ? "finish" : 'start'}
                        transition={{duration: 0.5}}
                        exit="finish"
                    >
                        <motion.div
                            className="chip-animate"
                            variants={variants3}
                            initial="finish"
                            animate={!fly ? "finish" : 'start'}
                            transition={{duration: 1.1}}
                            exit="finish"
                        >
                            <svg viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M38 74C57.8823 74 74 57.8823 74 38C74 18.1177 57.8823 2 38 2C18.1177 2 2 18.1177 2 38C2 57.8823 18.1177 74 38 74Z" fill="#FFF2DA" stroke="#1A0940" strokeWidth="3"/>
                                <path d="M28.181 38L21.129 42.071L14.582 53.409L41.273 38H28.181Z" fill="#874591"/>
                                <path d="M48.325 26.376L41.273 30.448L34.7271 41.786L61.417 26.376H48.325Z" fill="#DA1744"/>
                                <path d="M41.273 22.3051L34.7271 10.9661V34.2141V41.7861V65.0341L41.273 53.6951V22.3051Z" fill="#F9B229"/>
                                <path d="M34.7271 10.967L41.273 22.306L48.325 26.3761H61.417L34.7271 10.967Z" fill="#F07F1A"/>
                                <path d="M34.7271 34.2141V65.0341L41.273 53.6951V45.5531L34.7271 34.2141Z" fill="#72B22C"/>
                                <path d="M48.325 49.623L41.273 53.695L34.7271 65.034L61.417 49.623H48.325Z" fill="#00743E"/>
                                <path d="M14.582 22.5901V53.4091L21.129 42.0711V33.9291L14.582 22.5901Z" fill="#5E5A94"/>
                                <path d="M34.7271 34.2141L34.733 34.2241L14.582 22.5901L21.128 33.9281L48.325 49.6231H61.417L34.7271 34.2141Z" fill="#0C90CD"/>
                            </svg>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}
