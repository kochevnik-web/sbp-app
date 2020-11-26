import React, {useEffect, useState} from "react";

const Context = React.createContext();

export default function ContextProvider({ children }) {

    function getEm(){return window.innerWidth / 192}

    function getIsMobile(){
        return window.innerWidth < window.innerHeight &&  window.innerWidth < 768 ? true : false;
    }

    const nominal = 100;
    const moneyBox = 10000;

    const defaultEm = window.innerWidth <= 768 ? 1.731707 : 2.17734;
    const [em, setEm] = useState(10);
    const [isMobile, setIsMobile] = useState(false);
    const [isGameLvl, setGemLvl] = useState(true);
    const [startGame, setStartGame] = useState(false);
    const [hideHit, setHideHit] = useState(false);
    const [countMoney, setCountMoney] = useState(0);
    const [timer, setTimer] = useState(60);
    const [timer2, setTimer2] = useState(0);
    const [timer3, setTimer3] = useState(0);
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

    useEffect(() => {
        let t = timer2;
        if(startGame){
            setTimeout(()=>{
                setTimer2(t + 1);
            }, 600);
        }
    }, [startGame, timer2])

    useEffect(() => {
        let t = timer3;
        if(startGame){
            setTimeout(()=>{
                setTimer3(t + 1);
            }, 1900);
        }
    }, [startGame, timer3])

    const data = {
        em,
        defaultEm,
        isMobile,
        isGameLvl,
        startGame,
        hideHit,
        countMoney,
        timer,
        timer2,
        timer3,
        final,
    }

    const handleGameLevel = () => {
        setGemLvl(true);
    }

    const onStartGame = () => {
        setStartGame(true);
        setHideHit(true);
    }

    const hendleAddCounter = () => {
        setCountMoney(countMoney + nominal);  
    }

    window.addEventListener('resize', () =>{
        setEm(getEm());
        setIsMobile(getIsMobile())
    });
    return (
        <Context.Provider value={{ ...data, handleGameLevel, onStartGame, setTimer2, hendleAddCounter, moneyBox, nominal }}>
        {children}
        </Context.Provider>
    );
}

export { Context, ContextProvider };
