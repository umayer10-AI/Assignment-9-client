import { getData } from '@/lib/data';
import React from 'react';

const FeatureCards = async () => {

    const data = await getData()
    const filterData = data.sort((a,b) => b.rating - a.rating)
    console.log(filterData)

    return (
        <div>
            
        </div>
    );
};

export default FeatureCards;