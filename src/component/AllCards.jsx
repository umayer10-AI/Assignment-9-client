import React from 'react';
import Cards from './Cards';
import { getData } from '@/lib/data';

const AllCards = async () => {

    const data = await getData()

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 w-[90%] lg:w-[80%] mx-auto gap-5 bg-[#e8fafd] p-5 py-10 rounded-xl'>
            {
                data.map(v => <Cards key={v._id} doctor={v}></Cards>)
            }
        </div>
    );
};

export default AllCards;