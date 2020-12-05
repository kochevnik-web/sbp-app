import React from 'react';
import {motion} from 'framer-motion';
import {FacebookShareButton,TwitterShareButton,VKShareButton} from "react-share";

import './Shers.scss';

import data from './dataShers'

export default function Shers({imgShare}) {

    let delay = 0.2;
    const title = 'Игра. В бой идёт родительский комитет. Сможешь ли ты собрать деньги на линолеум?';
    const desc = 'Вместе с Системой быстрых платежей мы сделали спецпроект, в котором научим вас искусству легких платежей. Ой, а сдача с 200 рублей будет?';
    const url = 'https://medialeaks.ru/soberi-dengi/';

    return (
        <div className="Shers">
            {data.map((el) => {
                delay = delay + 0.3
                return (
                    <motion.span
                        key={el.id}
                        className={"share-btn share-btn-" + el.id}
                        animate={window.innerWidth <= 768 ? {y: 0} : {x: 0}}
                        initial={window.innerWidth <= 768 ? {y: '13em'} : {x: '9em'}}
                        exit={window.innerWidth <= 768 ? {y: '13em'} : {x: '9em'}}
                        transition={{delay: delay, type: 'spring'}}
                    >
                        {el.id === 'vk' && <VKShareButton url={url} image={imgShare}>
                            <svg viewBox={el.viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d={el.d} fill="white"/>
                            </svg>
                        </VKShareButton>}

                        {el.id === 'tw' && <TwitterShareButton url={url} image={imgShare} title={title}>
                            <svg viewBox={el.viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d={el.d} fill="white"/>
                            </svg>
                        </TwitterShareButton>}

                        {el.id === 'fb' && <FacebookShareButton url={url} image={imgShare} title={title}>
                            <svg viewBox={el.viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d={el.d} fill="white"/>
                            </svg>
                        </FacebookShareButton>}
                    </motion.span>
                )
            })}
        </div>
    )
}
