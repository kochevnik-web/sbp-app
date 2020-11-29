import React from 'react';
import {motion} from 'framer-motion'

import './FinalStage.scss';

export default function FinalStage() {
    return (
        <motion.div
            className="FinalStage"
            animate={{opacity: 1}}
            transition={{duration: 0.5}}
            initial={{opacity: 0}}
        >
            FinalStage
        </motion.div>
    )
}
