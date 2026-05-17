"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Nav2 = () => {

    const p = usePathname();

    return (
        <div>
            <div className='flex items-center gap-5 font-semibold text-black'>
                <Link href="/login">
                    {
                        p==="/login"
                            ? <button className='bg-linear-to-r py-2 px-4 from-cyan-700 to-cyan-500 text-white rounded-xl'>Login</button>
                            :<button>Login</button>
                    }
                </Link>
                <Link href="/register">
                    <button className='bg-cyan-600 py-2 px-4 rounded-xl text-white'>Register</button>
                </Link>
            </div>
        </div>
    );
};

export default Nav2;