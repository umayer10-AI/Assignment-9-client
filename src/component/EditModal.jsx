"use client";
import { updateUserData } from "@/lib/action";
import { authClient } from "@/lib/auth-client";
import {Button, Modal, Surface} from "@heroui/react";
import React from 'react';
import { useForm } from "react-hook-form";
import { FaEdit, FaHeartbeat } from "react-icons/fa";


const EditModal = ({p}) => {

    const {register,handleSubmit,formState: { errors }} = useForm()

    const a = async (v) => {

        const token = await authClient.token()
        const t = token?.data

        const b = {
            patient: v.name,
            date: v.date,
            time: v.time,
            reason: v.reason,
        }
        await updateUserData(b,p._id,t)
    }

    return (
        <div>
            <Modal>
                  <Button
                        className="flex items-cente text-[16px] justify-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white py-5 rounded-xl font-semibold transition-all duration-200 px-4"><FaEdit />Update</Button>
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
                          <Modal.Heading className="text-center">Update Appointment</Modal.Heading>
                        </Modal.Header>
                        <Modal.Body className="p-2">
                          <Surface>
                            <div className="p-6 bg-white dark:bg-slate-950 rounded-2xl shadow-sm border border-gray-100">
                  <form onSubmit={handleSubmit(a)} className="space-y-4 text-slate-700">
            
                    <div className="form-control w-full">
                      <label className="label font-semibold text-sm dark:text-white pb-1">Doctor Name</label>
                      <input 
                        type="text" 
                        value={p.doctor} 
                        disabled 
                        className="input input-bordered w-full dark:bg-slate-950 dark:text-white bg-slate-50 text-slate-500 cursor-not-allowed border-slate-200"
                      />
                    </div>
            
                    <div className="w-full">
                      <label className="label font-semibold text-sm pb-1 text-slate-800 dark:text-white">Patient Name *</label>
                      <input 
                        type="text" 
                        name="patientName"
                        defaultValue={p.patient}
                        placeholder="Enter your name" 
                        {...register("name", { required: true })}
                        required
                        className="input input-bordered w-full border-slate-300 focus:border-[#0096aa] focus:outline-none focus:ring-1 focus:ring-[#0096aa]"
                      />
                    </div>
            
            
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="form-control w-full">
                        <label className="label font-semibold text-sm dark:text-white pb-1 text-slate-800">Date *</label>
                        <input 
                          type="date" 
                          name="date"
                          defaultValue={p.date}
                          {...register("date", { required: true })}
                          required
                          className="input input-bordered w-full border-slate-300 focus:border-[#0096aa] focus:outline-none focus:ring-1 focus:ring-[#0096aa] text-slate-500"
                        />
                      </div>
            
                      <div className="form-control w-full">
                        <label className="label font-semibold text-sm pb-1 dark:text-white text-slate-800">Time *</label>
                        <input 
                          type="time" 
                          name="time"
                          defaultValue={p.time}
                          {...register("time", { required: true })}
                          required
                          className="input input-bordered w-full border-slate-300 focus:border-[#0096aa] focus:outline-none focus:ring-1 focus:ring-[#0096aa] text-slate-500"
                        />
                      </div>
                    </div>
            
                    <div className="form-control w-full">
                      <label className="label font-semibold text-sm pb-1 dark:text-white text-slate-800">Reason (optional)</label>
                      <input 
                        type="text" 
                        name="reason"
                        defaultValue={p.reason}
                        {...register("reason")}
                        placeholder="Brief reason for visit"
                        className="input input-bordered w-full border-slate-300 focus:border-[#0096aa] focus:outline-none focus:ring-1 focus:ring-[#0096aa]"
                      />
                    </div>
            
                    <div className="pt-2">
                      <button slot="close"
                        type="submit" 
                        className="btn w-full bg-linear-to-r from-cyan-700 to-cyan-500 hover:bg-[#007f90] text-white border-none normal-case text-base font-semibold rounded-xl h-12 shadow-sm transition-colors duration-200">
                        Save Changes
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

export default EditModal;