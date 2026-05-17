import { Spinner } from '@heroui/react';
import React from 'react';

const loading = () => {
    return (
        <div className='flex justify-center items-center my-30'>
            <div className="flex flex-col items-center gap-2">
                <Spinner size="xl" color="success"/>
                <span className="text-xl font-bold text-muted">Loding...</span>
            </div>
        </div>
    );
};

export default loading;