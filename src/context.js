import React, {useEffect, useState} from "react";

const Context = React.createContext();

export default function ContextProvider({ children }) {

    function getEm(){return window.innerWidth / 192}

    function getIsMobile(){
        return window.innerWidth < window.innerHeight &&  window.innerWidth < 768 ? true : false;
    }

    const defaultEm = window.innerWidth <= 768 ? 1.731707 : 2.17734;
    const [em, setEm] = useState(10);
    const [isMobile, setIsMobile] = useState(false);
    const [isGameLvl, setGemLvl] = useState(true);
    const [startGame, setStartGame] = useState(false);
    const [hideHit, setHideHit] = useState(false);
    const [countMoney, setCountMoney] = useState(0);
    const [timer, setTimer] = useState(20);
    const [final, setFinal] = useState(false);

    useEffect(()=>{
        setEm(getEm());
        setIsMobile(getIsMobile());
    },[]);

    useEffect(()=>{
        let t = timer;
        if(timer > 0 && startGame){
            setTimeout(()=>{
                setTimer(t -1);
            }, 1000);
        }

        if(timer <= 0 && !final){
            setStartGame(false);
            setFinal(true);
        } 
    },[startGame, timer, final]);

    const data = {
        em,
        defaultEm,
        isMobile,
        isGameLvl,
        startGame,
        hideHit,
        countMoney,
        timer,
        final,
    }

    const handleGameLevel = () => {
        setGemLvl(true);
    }

    const onStartGame = () => {
        setStartGame(true);
        setHideHit(true);
    }

    window.addEventListener('resize', () =>{
        setEm(getEm());
        setIsMobile(getIsMobile())
    });
    return (
        <Context.Provider value={{ ...data, handleGameLevel, onStartGame }}>
        {children}
        </Context.Provider>
    );
}

export { Context, ContextProvider };
