"use client"
import { getData } from '@/lib/data';
import React, { useContext, useEffect, useState } from 'react';
import AllCards from './AllCards';
import { Data } from '@/context/Context';

const FilteringAllCArds = ({search}) => {

    const {data,setData,sort} = useContext(Data);

    useEffect(() => {
        const fetchData = async () => {
            const res = await getData(search);
            setData(res);
        };

        fetchData();
    }, [search]);

    let filterData = [...data]

    if(sort==="high"){
        filterData = [...data].sort((a,b) => b.fee - a.fee)
    }
    else if(sort==="low"){
        filterData = [...data].sort((a,b) => a.fee - b.fee)
    }
    else{
        filterData = [...data]
    }

    return <AllCards data={filterData}></AllCards>
};

export default FilteringAllCArds;