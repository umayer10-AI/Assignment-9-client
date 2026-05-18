import { getData } from '@/lib/data';
import React from 'react';
import Cards from './Cards';

const FeatureCards = async () => {

    const data = await getData()
    const filterData = data.sort((a,b) => b.rating - a.rating)

    return (
        <div className='mt-20'>
            <div className='text-center space-y-1 mb-10 '>
                <h2 className='text-3xl font-bold'>Our Top Specialists</h2>
                <h2 className='text-gray-500 font-semibold'>Consult with experienced and highly rated doctors.</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] lg:w-[80%] mx-auto gap-5 bg-[#e8fafd] p-5 py-10 rounded-xl'>
            {
                filterData.slice(0,3).map(v => <Cards key={v._id} doctor={v}></Cards>)
            }
        </div>
        </div>
    );
};

export default FeatureCards;