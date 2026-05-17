"use client"
import { Button, Description, FieldError, Form, Input, Label, Separator, TextField } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div className='flex justify-center'>
            <Form className="flex w-100 flex-col gap-4 border p-4">

                <TextField
            isRequired
            name="name"
            validate={(value) => {
              if (value.length < 3) {
                return "Name must be at least 3 characters";
              }
              return null;
            }}
          >
            <Label>Name</Label>
            <Input placeholder="John Doe" />
            <FieldError />
          </TextField>

                <TextField
            isRequired
            name="image"
            validate={(value) => {
              if (value.length < 3) {
                return "Name must be at least 3 characters";
              }
              return null;
            }}
          >
            <Label>Image URL</Label>
            <Input placeholder="Enter your url" />
            <FieldError />
          </TextField>

        <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
            }
            return null;
            }}
        >
            <Label>Email</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
        </TextField>

        <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
            if (value.length < 8) {
                return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
            }
            return null;
            }}
        >
            <Label>Password</Label>
            <Input placeholder="Enter your password" />
            <FieldError />
        </TextField>

        <div className="flex gap-2">
            <button type="submit" className={'bg-linear-to-r from-cyan-700 to-cyan-500 text-white py-2 rounded-lg w-full font-semibold'}>Register</button>
        </div>
        <div className='flex items-center gap-2 w-full'>
            <Separator className='flex-1' />
            <h2 className='text-sm text-gray-500'>Or</h2>
            <Separator className='flex-1' />
        </div>
        <button className='flex items-center gap-1 font-semibold justify-center hover:scale-98 duration-300 border py-1 shadow-md'>
            <Image width={100} height={100}
            src={'/ss.gif'}
            alt='logo'
            className='h-8 w-8'
            />
            <h2>Sign in With Google</h2>
        </button>
        <Link href={'/login'} className='text-center'>Already have an account? <span className='text-cyan-600 font-semibold'>Login</span></Link>
        </Form>
        </div>
    );
};

export default page;