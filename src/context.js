import React, {useEffect, useState} from "react";

const Context = React.createContext();

export default function ContextProvider({ children }) {

    function getEm(){return window.innerWidth / 192}

    const [em, setEm] = useState(10);

    useEffect(()=>{
        setEm(getEm())
    },[])

    const data = {
        em
    }
    
    window.addEventListener('resize', () =>{setEm(window.innerWidth / 192)});
    return (
        <Context.Provider value={{ ...data }}>
        {children}
        </Context.Provider>
    );
}

export { Context, ContextProvider };
