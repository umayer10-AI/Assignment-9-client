"use client"
import { getData } from '@/lib/data';
import React, { useContext, useEffect, useState } from 'react';
import AllCards from './AllCards';
import { Data } from '@/context/Context';
import { Spinner } from '@heroui/react';
import { HiOutlineDocumentText } from 'react-icons/hi';
import Link from 'next/link';

const FilteringAllCArds = ({search}) => {

    const {data,setData,sort} = useContext(Data);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            const res = await getData(search);
            setData(res);
            setLoading(false)
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

    if (loading) {
        return (
            <div className='flex justify-center items-center my-20'>
                <div className="flex flex-col items-center gap-2">
                    <Spinner size="xl" color="success"/>
                    <span className="text-xl font-bold text-muted">Loding...</span>
                </div>
            </div>
        );
    }

    // return <AllCards data={filterData}></AllCards>
    return (
        <div>
            {
                data.length===0 ? <div className="flex flex-col items-center justify-center py-20">
                    <h2 className='text-7xl'><HiOutlineDocumentText /></h2>

                    <h2 className="text-2xl font-bold text-slate-700 mt-6">
                        No Data Found
                    </h2>

                    <p className="text-slate-500 mt-2">
                        You haven’t data any appointment yet.
                    </p>

                    <Link href={'/all-appointment'} className="mt-6 bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-xl font-semibold">
                        All Appointments
                    </Link>
                </div>
                : 
                <AllCards data={filterData}></AllCards>
            }
        </div>
    )
};

export default FilteringAllCArds;