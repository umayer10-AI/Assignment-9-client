"use client"
import { getData } from '@/lib/data';
import React, { useContext, useEffect, useState } from 'react';
import AllCards from './AllCards';
import { Data } from '@/context/Context';

const FilteringAllCArds = () => {

    const {data, setData} = useContext(Data);

    useEffect(() => {
        const fetchData = async () => {
            const res = await getData();
            setData(res);
        };

        fetchData();
    }, []);

    return <AllCards data={data}></AllCards>
};

export default FilteringAllCArds;