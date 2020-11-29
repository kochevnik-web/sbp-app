import React, {useContext} from 'react';
import { motion } from 'framer-motion';

import './FinalBtn.scss';

import { Context } from "../../context";

export default function FinalBtn() {

    const { handlerFinalStage } = useContext(Context);

    return (
        <motion.div
            animate={{opacity: 1, scale: 1, y: 0}}
            initial={{opacity: 0, scale: 0.5, y: '20em'}}
            exit={{opacity: 0}}
            transition={{duration: 0.5, delay: 1, type:"spring"}}
            onClick={handlerFinalStage}
        >
            <span className="FinalBtn app-btn">
                <span>
                    Узнать результат
                </span>
            </span>
        </motion.div>
    )
}
