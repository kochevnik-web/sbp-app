import React, {useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';

import './Chip.scss';

export default function Chip() {
    const [fly, setFly] = useState(false);
    const [randLeft, setRandLeft] = useState(Math.floor(Math.random() * (75 - 23 + 1)) + 23);
    const [randRight, setRandRight] = useState(Math.floor(Math.random() * (40 - 15 + 1)) + 15);

    let clx = ['chip-wrap'];
    if(fly){
        clx.push('fly');
    }

    let variants = {
        start: {opacity: 0.3, transition: {delay: 3.5, duration: 1.5}, transitionEnd: {display: 'none'}},
        finish: {opacity: 1},
    }

    return (
        <AnimatePresence>
            <motion.div
                className="Chip"
                animate={{opacity: 1, scale: 1, y: 0}}
                transition={{duration: 0.5, delay: 0.3, type:"spring"}}
                initial={{opacity: 0, scale: 0.5, y: '20em'}}
                exit={{opacity: 0}}
                style={{left: randLeft + '%', bottom: randRight + '%'}}
            >
                <motion.div
                    className="chip-wrap-hide"
                    variants={variants}
                    animate="start"
                    initial="finish"
                    exit="finish"
                    onClick={()=> setFly(true)}
                >
                    <div className={clx.join(' ')} style={{transform: fly ? 'translateY(-300px)' : null}}>
                        <div className="chip-animate" style={{transform: fly ? 'translateX(360px) scale(0.5)' : null}}>
                            <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M36 72C55.8823 72 72 55.8823 72 36C72 16.1177 55.8823 0 36 0C16.1177 0 0 16.1177 0 36C0 55.8823 16.1177 72 36 72Z" fill="#FFF2DA"/>
                                <path d="M26.181 36L19.129 40.071L12.582 51.409L39.273 36H26.181Z" fill="#874591"/>
                                <path d="M46.325 24.376L39.273 28.448L32.7271 39.786L59.417 24.376H46.325Z" fill="#DA1744"/>
                                <path d="M39.273 20.3051L32.7271 8.96606V32.2141V39.7861V63.0341L39.273 51.6951V20.3051Z" fill="#F9B229"/>
                                <path d="M32.7271 8.96704L39.273 20.306L46.325 24.3761H59.417L32.7271 8.96704Z" fill="#F07F1A"/>
                                <path d="M32.7271 32.2141V63.0341L39.273 51.6951V43.5531L32.7271 32.2141Z" fill="#72B22C"/>
                                <path d="M46.325 47.623L39.273 51.695L32.7271 63.034L59.417 47.623H46.325Z" fill="#00743E"/>
                                <path d="M12.582 20.5901V51.4091L19.129 40.0711V31.9291L12.582 20.5901Z" fill="#5E5A94"/>
                                <path d="M32.7271 32.2141L32.733 32.2241L12.582 20.5901L19.128 31.9281L46.325 47.6231H59.417L32.7271 32.2141Z" fill="#0C90CD"/>
                            </svg>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}
