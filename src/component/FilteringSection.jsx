import React from 'react';
import SearchingData from './SearchingData';
import SelectedData from './SelectedData';

const FilteringSection = () => {
    return (
        <div className='grid grid-cols-1 gap-5 lg:grid-cols-3 w-[80%] mx-auto mb-10'>
            <div className='hidden lg:flex'>

            </div>
            <div className='flex justify-center'>
                <SearchingData></SearchingData>
            </div>
            <div className='flex justify-center lg:justify-end'>
                <SelectedData></SelectedData>
            </div>
        </div>
    );
};

export default FilteringSection;