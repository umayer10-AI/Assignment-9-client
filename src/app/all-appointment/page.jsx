import React from 'react';
import AllCards from '../../component/AllCards';

const page = () => {
    return (
        <div>
            <div className='text-center space-y-2 my-10'>
                <h2 className='text-3xl font-bold'>All Appointments</h2>
                <h2 className=' text-gray-500 font-semibold'>Find the right doctor for you.</h2>
            </div>
            <AllCards></AllCards>
        </div>
    );
};

export default page;