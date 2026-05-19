import React from 'react';
import FilteringAllCArds from '@/component/FilteringAllCArds';
import FilteringSection from '@/component/FilteringSection';

const page = async ({searchParams}) => {

    const {search} = await searchParams
    console.log(search)

    return (
        <div>
            <div className='text-center space-y-2 my-10'>
                <h2 className='text-3xl font-bold'>All Appointments</h2>
                <h2 className=' text-gray-500 font-semibold'>Find the right doctor for you.</h2>
            </div>
            <FilteringSection></FilteringSection>
            <FilteringAllCArds search={search}></FilteringAllCArds>
        </div>
    );
};

export default page;