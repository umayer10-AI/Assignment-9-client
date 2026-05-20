"use client"
import { authClient } from '@/lib/auth-client';
import { FieldError, Form, Input, Label, Separator, TextField } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const Registerpage = () => {

    const {register,handleSubmit,formState: { errors }} = useForm()
    const router = useRouter()

    const a = async (v) => {

        const { data, error } = await authClient.signUp.email({
            name: v.name,
            email: v.email,
            password: v.password,
            image: v.image,
            callbackURL: "/",
        });

        if(data){
            toast.success("User Register Successfully")
            router.push('/')

        }
        if(error){
            toast.error(error.message)
        }
    }

    const handleGoogle = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    }

    return (
        <div className='flex justify-center mt-10'>
            <div className='border shadow shadow-cyan-500 p-5 rounded-xl w-100'>
                <div className='mb-5 space-y-1'>
                    <h2 className='text-2xl font-bold text-center'>Register Account</h2>
                    <h2 className='text-gray-500 text-center'>Welcome back to DocAppoint</h2>
                </div>
                <Form onSubmit={handleSubmit(a)} className="flex flex-col gap-4 ">

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
            <Input placeholder="John Doe" {...register("name", { required: true })}/>
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
            <Input placeholder="john@example.com" {...register("email", { required: true })}/>
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
            <Input placeholder="Enter your url" {...register("image", { required: true })} />
            <FieldError />
          </TextField>

        <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
            if (value.length < 6) {
                return "Password must be at least 6 characters";
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
            <Input placeholder="Enter your password" {...register("password", { required: true })}/>
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
        
        </Form>
        <button onClick={handleGoogle} className='flex items-center w-full my-4 rounded-lg gap-1 font-semibold justify-center hover:scale-98 duration-300 border py-1 shadow-md'>
                    <Image width={100} height={100}
                    src={'/ss.gif'}
                    alt='logo'
                    className='h-8 w-8 rounded-full'
                    />
                    <h2>Sign in With Google</h2>
                </button>
                <div className='flex justify-center'>
                    <p className='text-center'>Do not have an account? <Link href={'/login'} className='text-cyan-600 font-semibold'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Registerpage;