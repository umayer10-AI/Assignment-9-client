"use client"
import { Data } from '@/context/Context';
import { Label, SearchField } from '@heroui/react';
import { useRouter } from 'next/navigation';
import React, { useContext } from 'react';

const SearchingData = () => {

    const router = useRouter()
    const {s,setS} = useContext(Data)

    const a = () => {

        if(s===''){
            router.push(`/all-appointment`)
        }
        else{
            router.push(`/all-appointment?search=${s}`)
        }
    }

    return (
            <div className='w-80 lg:w-90'>
                <SearchField name="search">
      <Label>Search</Label>
      <div className='flex items-center'>
        <SearchField.Group className={'border border-cyan-600 rounded-r-none py-5'}>
        <SearchField.SearchIcon />
        <SearchField.Input className="w-70" onChange={(e) => setS(e.target.value)} placeholder="Search..." />
        <SearchField.ClearButton />
      </SearchField.Group>
        <button onClick={a} className='border rounded-r-xl py-[9px] px-4 text-white bg-linear-to-r from-cyan-700 to-cyan-500'>Search</button>
      </div>
    </SearchField>
            </div>

    );
};

export default SearchingData;