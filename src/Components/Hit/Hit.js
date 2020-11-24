import React, {useContext} from 'react';
import {motion, AnimatePresence} from 'framer-motion'

import { Context } from "../../context";

import './Hit.scss';

export default function Hit() {

    const { onStartGame, startGame } = useContext(Context);

    return (
        <AnimatePresence>
            {!startGame && (
                <motion.div className="Hit" animate={{opacity: 1}} inlist={{opacity: 0}} transition={{duration: 0.5}} exit={{opacity: 0}}>
                    <div className="hit-message">
                        <div className="content">
                            <span>
                            Представьте, что теперь вы состоите в родительском комитете. А самое сложное в воспитании детей — ходить на школьные собрания и общаться с другими родителями в WhatsApp-чатиках. Вам выпала большая честь — собрать со всех деньги на линолеум для класса. Неважно, что вы закончили мехмат МГУ, — сможете ли вы справиться с такой задачей? Чтобы родительский комитет остался доволен, собирайте только значки с логотипом СБП! 
                            </span>
                        </div>
                        <div className="buttons">
                            <span className="btn-start-game app-btn" onClick={onStartGame}>
                                <span>
                                    Собрать
                                </span>
                                <svg viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24.3894 48C37.6442 48 48.3894 37.2548 48.3894 24C48.3894 10.7452 37.6442 0 24.3894 0C11.1346 0 0.389404 10.7452 0.389404 24C0.389404 37.2548 11.1346 48 24.3894 48Z" fill="#FFF2DA"/>
                                    <path d="M17.8436 24.0005L13.1423 26.7145L8.77759 34.2732L26.5716 24.0005H17.8436Z" fill="#874591"/>
                                    <path d="M31.2728 16.251L26.5715 18.9656L22.2075 26.5243L40.0008 16.251H31.2728Z" fill="#DA1744"/>
                                    <path d="M26.5715 13.5371L22.2075 5.97778V21.4765V26.5244V42.0231L26.5715 34.4638V13.5371Z" fill="#F9B229"/>
                                    <path d="M22.2075 5.97852L26.5715 13.5379L31.2728 16.2512H40.0008L22.2075 5.97852Z" fill="#F07F1A"/>
                                    <path d="M22.2075 21.4766V42.0232L26.5715 34.4639V29.0359L22.2075 21.4766Z" fill="#72B22C"/>
                                    <path d="M31.2728 31.749L26.5715 34.4637L22.2075 42.023L40.0008 31.749H31.2728Z" fill="#00743E"/>
                                    <path d="M8.77759 13.7271V34.2731L13.1423 26.7144V21.2864L8.77759 13.7271Z" fill="#5E5A94"/>
                                    <path d="M22.2076 21.4764L22.2116 21.4831L8.77759 13.7271L13.1416 21.2857L31.2729 31.7491H40.0009L22.2076 21.4764Z" fill="#0C90CD"/>
                                </svg>
                            </span>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
