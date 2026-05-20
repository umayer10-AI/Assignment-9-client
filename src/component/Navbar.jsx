import React from 'react';
import Nav1 from './Nav1';
import Nav2 from './Nav2';
import { FaHeartbeat } from 'react-icons/fa';
import ToggleBtn from './ToggleBtn';

const Navbar = () => {
    return (
        <div className='bg-[#e8fafd] dark:bg-blue-950 shadow-sm sticky top-0 z-50'>
            <div className='flex items-center justify-between py-4 w-[90%] lg:w-[80%] mx-auto'>

                <div className='flex items-center gap-2'>
                    <div className="bg-linear-to-r from-cyan-700 to-cyan-500 p-2 rounded-xl">
                        <FaHeartbeat className="text-2xl text-white" />
                    </div>
                    <h2 className='text-2xl font-bold'>DocAppoint</h2>
                </div>

                <div className='hidden md:flex items-center gap-10'>
                    <Nav1 />
                </div>
                <div className='hidden md:flex items-center gap-10'>
                    <Nav2 />
                </div>

                <div className='md:hidden flex items-center gap-2'>
                    <ToggleBtn></ToggleBtn>
                    <Nav1 mobile />
                </div>

            </div>
        </div>
    );
};

export default Navbar;