"use client"
import React, { createContext, useState } from 'react';

export const Data = createContext()

const Context = ({children}) => {

    const [data, setData] = useState([]);
    const [sort, setSort] = useState('');
    const [s, setS] = useState('');

    return (
        <Data.Provider value={{data,setData,sort,setSort,s,setS}}>
            {children}
        </Data.Provider>
    );
};

export default Context;