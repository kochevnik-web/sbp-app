import React from 'react';
import { motion } from 'framer-motion';

import './FinalBtn.scss';

export default function FinalBtn() {
    return (
        <motion.div
            animate={{opacity: 1, scale: 1, y: 0}}
            initial={{opacity: 0, scale: 0.5, y: '20em'}}
            exit={{opacity: 0}}
            transition={{duration: 0.5, delay: 1, type:"spring"}}
        >
            <span className="FinalBtn app-btn">
                <span>
                    Узнать результат
                </span>
            </span>
        </motion.div>
    )
}
