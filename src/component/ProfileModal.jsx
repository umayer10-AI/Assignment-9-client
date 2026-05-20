"use client"
import { authClient } from '@/lib/auth-client';
import { Button, Modal, Surface } from '@heroui/react';
import { redirect } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FaEdit, FaHeartbeat } from 'react-icons/fa';

const ProfileModal = ({p}) => {

    const {register,handleSubmit,formState: { errors }} = useForm()

    const a = async (v) => {

        await authClient.updateUser({
            name: v.name,
            image: v.image,
        })

        toast.success("Profile Updated")
        redirect('/dashboard')
    }

    return (
        <div>
            <Modal>
                  <Button className="mt-5 inline-flex items-center gap-3 py-6 bg-linear-to-r from-cyan-700 to-cyan-500 hover:scale-105 transition-all duration-300 text-[16px] text-white px-6 rounded-2xl font-semibold shadow-lg"><FaEdit />Edit Profile</Button>
                  <Modal.Backdrop>
                    <Modal.Container placement="auto">
                      <Modal.Dialog>
                        <Modal.CloseTrigger />
                        <Modal.Header>
                          <div className="mx-auto">
                                <div className="bg-linear-to-r from-cyan-700 to-cyan-500 p-2 rounded-xl">
                                    <FaHeartbeat className="text-2xl text-white" />
                                </div>
                            </div>
                          <Modal.Heading className="text-center">Update User Profile</Modal.Heading>

                        </Modal.Header>
                        <Modal.Body className="p-2">
                          <Surface>
                            <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-gray-100">
                  <form onSubmit={handleSubmit(a)} className="space-y-4 text-slate-700">
                    
            
                    <div className="form-control w-full">
                      <label className="label font-semibold text-sm pb-2 text-slate-800 dark:text-white">Name</label>
                      <input 
                       {...register("name", { required: true })}
                        type="text" 
                        defaultValue={p?.name} 
                        className="input input-bordered w-full bg-slate-50 border-slate-200 dark:bg-black"/>
                    </div>

                    <div className="form-control w-full">
                      <label className="label font-semibold text-sm pb-2 text-slate-800 dark:text-white">ImageURL</label>
                      <input 
                       {...register("image", { required: true })}
                        type="url" 
                        defaultValue={p?.image}
                        className="input input-bordered w-full bg-slate-50 border-slate-200 dark:bg-black"/>
                    </div>

            
                    <div className="pt-2">
                      <button 
                        type="submit" 
                        slot='close'
                        className="btn w-full bg-linear-to-r from-cyan-700 to-cyan-500 hover:bg-[#007f90] text-white border-none normal-case text-base font-semibold rounded-xl h-12 shadow-sm transition-colors duration-200">
                        Update Profile
                      </button>
                    </div>
                  </form>
                </div>
                          </Surface>
                        </Modal.Body>
                      </Modal.Dialog>
                    </Modal.Container>
                  </Modal.Backdrop>
                </Modal>
        </div>
    );
};

export default ProfileModal;