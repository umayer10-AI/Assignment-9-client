"use client"
import React, { createContext, useState } from 'react';

export const Data = createContext()

const Context = ({children}) => {

    const [data, setData] = useState([]);

    return (
        <Data.Provider value={{data, setData}}>
            {children}
        </Data.Provider>
    );
};

export default Context;