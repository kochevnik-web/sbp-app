import React, {useEffect, useState} from "react";

const Context = React.createContext();

export default function ContextProvider({ children }) {

    function getEm(){return window.innerWidth / 192}

    function getIsMobile(){
        return window.innerWidth < window.innerHeight &&  window.innerWidth < 768 ? true : false;
    }

    const nominal = 110;
    const moneyBox = 10000;

    const defaultEm = window.innerWidth <= 768 ? 1.731707 : 2.17734;
    const [em, setEm] = useState(10);
    const [isMobile, setIsMobile] = useState(false);
    const [isGameLvl, setGemLvl] = useState(false);
    const [startGame, setStartGame] = useState(false);
    const [startChat, setStartChat] = useState(false);
    const [hideHit, setHideHit] = useState(false);
    const [finalStage, setFinalStage] = useState(false);
    const [startMicroTimer, setStartMicroTimer] = useState(false);
    const [countMoney, setCountMoney] = useState(0);
    const [timer, setTimer] = useState(60);
    const [microTimer, setMicroTimer] = useState(3);
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

        if((timer <= 0 && !final) || (countMoney >=moneyBox && !final) ){
            setStartGame(false);
            setFinal(true);
        } 
    },[startGame, countMoney, timer, final]);

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

    useEffect(() => {
        let t = microTimer;
        if(startMicroTimer && microTimer > 0){
            setTimeout(()=>{
                setMicroTimer(t - 1);
            }, 1000);
        }
        if(microTimer <= 0 && startMicroTimer && !startGame){
            setStartGame(true);
            setStartMicroTimer(false);
            setStartChat(true);
        }
    }, [setMicroTimer, microTimer, startMicroTimer, setStartChat, startGame])

    const data = {
        em,
        defaultEm,
        isMobile,
        isGameLvl,
        startGame,
        hideHit,
        countMoney,
        startChat,
        timer,
        timer2,
        timer3,
        final,
        finalStage,
        startMicroTimer,
        microTimer
    }

    const handleGameLevel = () => {
        setGemLvl(true);
    }

    const onStartGame = () => {
        setStartGame(true);
        setStartChat(true);
    }

    const hendleAddCounter = () => {
        setCountMoney(countMoney + nominal);  
    }

    const handlerFinalStage = () => {
        setFinalStage(true)
    }

    const onStartMicroTimer = () => {
        setStartMicroTimer(true);
        setHideHit(true);
    }

    window.addEventListener('resize', () =>{
        setEm(getEm());
        setIsMobile(getIsMobile())
    });
    return (
        <Context.Provider value={{ ...data, handleGameLevel, onStartGame, setTimer2, hendleAddCounter, moneyBox, nominal, handlerFinalStage, onStartMicroTimer }}>
        {children}
        </Context.Provider>
    );
}

export { Context, ContextProvider };
