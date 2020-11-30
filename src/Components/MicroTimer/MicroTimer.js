import React, {useContext} from 'react'
import {motion, AnimatePresence} from 'framer-motion'

import './MicroTimer.scss';

import { Context } from "../../context";

export default function MicroTimer() {

    const { microTimer } = useContext(Context);

    return (
        <AnimatePresence>
            <motion.span
                className="MicroTimer"
                key={"microTimer" + microTimer}
                exit={{scale: 2, opacity: 0, position: "absolute"}}
                initial={{scale: 1, opacity: 1}}
                animate={{y: 0, opacity: 1}}
            >
                {microTimer === 0 ? '' : microTimer}
            </motion.span>
        </AnimatePresence>
    )
}
