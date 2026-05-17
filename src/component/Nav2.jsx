"use client"
import { authClient, useSession } from '@/lib/auth-client';
import { Avatar } from '@heroui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Nav2 = () => {

    const p = usePathname();
    const { data: session } = authClient.useSession()
    const user = session?.user
    console.log(session)

    return (
        <div>
            {
                user? <div className='flex items-center gap-2'>
                <Avatar size='sm' className='border'>
                    <Avatar.Image alt="John Doe" src={user?.image} />
                    <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                </Avatar>
                <button onClick={async() => await authClient.signOut()} className='border border-cyan-700 text-cyan-700 font-bold rounded-xl px-4 bg-cyan-100 py-1'>Log Out</button>
            </div>
            : <div className='flex items-center gap-5 font-semibold text-black'>
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
            }
            
        </div>
    );
};

export default Nav2;