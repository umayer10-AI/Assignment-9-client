"use client"
import { Button } from '@heroui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Nav1 = () => {

    const p = usePathname()

    const links = [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "All Appointmen",
            path: "/all-appointment"
        },
        {
            name: "Dashboard",
            path: "/dashboard"
        },

    ]


    return (
        <div className='flex items-center gap-7'>
            {
                links.map(v => (
                    <Link key={v.name} href={v.path} className='font-semibold'>
                        {
                            p===v.path? <button size='sm' className={'bg-linear-to-r from-cyan-700 to-cyan-500 py-1.5 text-white px-3 rounded-xl'}>
                                {v.name}
                            </button>
                            : <button>{v.name}</button>
                        }
                    </Link>
                ))
            }
        </div>
    );
};

export default Nav1;