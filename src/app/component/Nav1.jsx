"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Nav1 = ({ mobile }) => {

    const p = usePathname();
    const [open, setOpen] = useState(false);

    const links = [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "All Appointment",
            path: "/all-appointment"
        },
        {
            name: "Dashboard",
            path: "/dashboard"
        },
    ];

    if (!mobile) {
        return (
            <div className='flex items-center gap-7 text-black'>
                {
                    links.map(v => (
                        <Link key={v.name} href={v.path}>
                            {
                                p===v.path
                                    ?<button className='bg-linear-to-r from-cyan-700 to-cyan-500 py-2 px-4 rounded-xl text-white font-semibold'>{v.name}</button>
                                    :<button className='font-semibold'>{v.name}</button>
                            }
                        </Link>
                    ))
                }
            </div>
        );
    }

    return (
        <div>
            <button onClick={() => setOpen(!open)}>
                {
                    open? <X className='w-7 h-7 text-cyan-700' />
                        : <Menu className='w-7 h-7 text-cyan-700' />
                }
            </button>

            {
                open && (
                    <div className='absolute left-0 top-18 w-full bg-white shadow-lg border-t z-50'>

                        <div className='flex flex-col gap-4 p-5'>
                            {
                                links.map(v => (
                                    <Link key={v.name} href={v.path} onClick={() => setOpen(false)}
                                    >
                                        {
                                            p === v.path
                                                ?<button className='w-full bg-linear-to-r from-cyan-700 to-cyan-500 py-2 rounded-xl text-white font-semibold'>{v.name}</button>
                                                :<button className='w-full text-left font-semibold'>{v.name}</button>
                                        }
                                    </Link>
                                ))
                            }

                            <div className='border-t pt-4 flex flex-col gap-3'>
                                <Link href="/login" onClick={() => setOpen(false)}>
                                    <button className='w-full border text-black border-cyan-600 py-2 rounded-xl font-semibold'>Login</button></Link>

                                <Link
                                    href="/register"
                                    onClick={() => setOpen(false)}
                                >
                                    <button className='w-full bg-cyan-600 text-white py-2 rounded-xl font-semibold'>
                                        Register
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Nav1;