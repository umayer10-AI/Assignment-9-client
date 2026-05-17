import Image from 'next/image';
import React from 'react';
import Nav1 from './Nav1';

const Navbar = () => {
    return (
        <div>
            <div className='flex items-center gap-1'>
                <Image
                src={'/Doctor.png'}
                width={100} height={100}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt='logo'
                className='h-10 w-10'
                >
                </Image>
                <h2 className='text-2xl font-bold'>DocAppoint</h2>
            </div>
            <Nav1></Nav1>
        </div>
    );
};

export default Navbar;