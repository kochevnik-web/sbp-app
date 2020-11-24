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
    const [isGameLvl, setGemLvl] = useState(false);

    useEffect(()=>{
        setEm(getEm());
        setIsMobile(getIsMobile());
    },[]);

    const data = {
        em,
        defaultEm,
        isMobile,
        isGameLvl,
    }

    const handleGameLevel = () => {
        setGemLvl(true);
    }

    window.addEventListener('resize', () =>{
        setEm(getEm());
        setIsMobile(getIsMobile())
    });
    return (
        <Context.Provider value={{ ...data, handleGameLevel }}>
        {children}
        </Context.Provider>
    );
}

export { Context, ContextProvider };
