import React, { useState, useContext } from 'react'
import { motion } from 'framer-motion'

import './PauseBtn.scss';

import { Context } from "../../context";

export default function PauseBtn() {

    const { pause, hendlerPause } = useContext(Context);

    const [hover, setHover] = useState(false);
    const variants = {
        start: {scale: 1.2},
        finish: {scale: 1}
    }

    return (
        <motion.div
            className="PauseBtn"
            onMouseEnter={()=> setHover(true)}
            onMouseLeave={()=> setHover(false)}
            onClick={hendlerPause}
            variants={variants}
            animate={hover ? 'start' : 'finish'}
            initial={hover ? 'finish' : 'start'}
            transition={{duration: 0.2}}
        >
            {pause ? (
                <svg viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="25.5" cy="25.5" r="25.5" fill="#FFF2DA"/>
                    <path d="M38 25L19.25 35.3923L19.25 14.6077L38 25Z" fill="#E50050"/>
                </svg>
            ) : (
                <svg viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="25.5" cy="25.5" r="25.5" fill="#FFF2DA"/>
                    <rect x="16" y="16" width="6" height="19" fill="#FBBB20"/>
                    <rect x="29" y="16" width="6" height="19" fill="#FBBB20"/>
                </svg>
            )}
        </motion.div>
    )
}
