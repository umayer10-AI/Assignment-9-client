"use client"
import React, { createContext, useState } from 'react';

export const Data = createContext()

const Context = ({children}) => {

    const [tab, setT] = useState(0)

    return (
        <Data.Provider value={{tab,setT}}>
            {children}
        </Data.Provider>
    );
};

export default Context;