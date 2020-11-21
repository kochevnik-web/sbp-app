import React from "react";

const Context = React.createContext();

export default function ContextProvider({ children }) {
    const rooms = {
        elems: [1,2,3,2]
    }
    return (
        <Context.Provider value={{ rooms }}>
        {children}
        </Context.Provider>
    );
}

export { Context, ContextProvider };
