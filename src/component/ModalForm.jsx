"use client";
import { postData } from "@/lib/action";
import { useSession } from "@/lib/auth-client";
import {Button, Input, Label, ListBox, Modal, Surface, Select} from "@heroui/react";
import React from 'react';
import { useForm } from "react-hook-form";
import { FaHeartbeat } from "react-icons/fa";

const ModalForm = ({p}) => {

    const {data} = useSession()
    const user = data?.user
    // console.log(user)

    const {register,handleSubmit,formState: { errors }} = useForm()

    const a = async (v) => {
        
        const b = {
            email: user?.email,
            doctor: p.name,
            patient: v.name,
            date: v.date,
            time: v.time,
            reason: v.reason,
        }
        // console.log(b)
        await postData(b)
    }

    return (
        <div>
            <Modal>
      <Button className="mt-8 bg-linear-to-r from-cyan-700 to-cyan-500 hover:bg-blue-700 transition-all duration-300 text-white py-7 w-full rounded-xl font-semibold text-lg">Book Appointment</Button>
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
              <Modal.Heading className="text-center">Booking Appointment</Modal.Heading>
              <p className="text-sm text-muted text-center">
                With {p.name}
              </p>
            </Modal.Header>
            <Modal.Body className="p-2">
              <Surface>
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
      <form onSubmit={handleSubmit(a)} className="space-y-4 text-slate-700">
        
        <div className="form-control w-full">
          <label className="label font-semibold text-sm pb-1 text-slate-800">User Email</label>
          <input 
            type="email" 
            value={user?.email}
            disabled 
            className="input input-bordered w-full bg-slate-50 text-slate-500 cursor-not-allowed border-slate-200"
          />
        </div>

        <div className="form-control w-full">
          <label className="label font-semibold text-sm pb-1 text-slate-800">Doctor Name</label>
          <input 
            type="text" 
            value={p.name} 
            disabled 
            className="input input-bordered w-full bg-slate-50 text-slate-500 cursor-not-allowed border-slate-200"
          />
        </div>

        <div className="w-full">
          <label className="label font-semibold text-sm pb-1 text-slate-800">Patient Name *</label>
          <input 
            type="text" 
            name="patientName"
            placeholder="Enter your name" 
            {...register("name", { required: true })}
            required
            className="input input-bordered w-full border-slate-300 focus:border-[#0096aa] focus:outline-none focus:ring-1 focus:ring-[#0096aa]"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

          <Select className="w-40" placeholder="Select gender" selectionMode="multiple">
      <Label>Gender</Label>
      <Select.Trigger>
        <Select.Value />
        <Select.Indicator />
      </Select.Trigger>
      <Select.Popover>
        <ListBox selectionMode="multiple">
          <ListBox.Item id="male" textValue="Male">
            Male
            <ListBox.ItemIndicator />
          </ListBox.Item>
          <ListBox.Item id="female" textValue="Female">
            Female
            <ListBox.ItemIndicator />
          </ListBox.Item>
          <ListBox.Item id="others" textValue="Others">
            Others
            <ListBox.ItemIndicator />
          </ListBox.Item>

        </ListBox>
      </Select.Popover>
    </Select>

          <div className="form-control w-full">
            <label className="label font-semibold text-sm pb-1 text-slate-800">Phone *</label>
            <input 
              type="text" 
              name="phone"
              placeholder="01XXXXXXXXX"
              {...register("phone", { required: true })}
              required
              className="input input-bordered w-full border-slate-300 focus:border-[#0096aa] focus:outline-none focus:ring-1 focus:ring-[#0096aa]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="form-control w-full">
            <label className="label font-semibold text-sm pb-1 text-slate-800">Date *</label>
            <input 
              type="date" 
              name="date"
              {...register("date", { required: true })}
              required
              className="input input-bordered w-full border-slate-300 focus:border-[#0096aa] focus:outline-none focus:ring-1 focus:ring-[#0096aa] text-slate-500"
            />
          </div>

          <div className="form-control w-full">
            <label className="label font-semibold text-sm pb-1 text-slate-800">Time *</label>
            <input 
              type="time" 
              name="time"
              {...register("time", { required: true })}
              required
              className="input input-bordered w-full border-slate-300 focus:border-[#0096aa] focus:outline-none focus:ring-1 focus:ring-[#0096aa] text-slate-500"
            />
          </div>
        </div>

        <div className="form-control w-full">
          <label className="label font-semibold text-sm pb-1 text-slate-800">Reason (optional)</label>
          <input 
            type="text" 
            name="reason"
            {...register("reason")}
            placeholder="Brief reason for visit"
            className="input input-bordered w-full border-slate-300 focus:border-[#0096aa] focus:outline-none focus:ring-1 focus:ring-[#0096aa]"
          />
        </div>

        <div className="pt-2">
          <button 
            type="submit" 
            className="btn w-full bg-[#0096aa] hover:bg-[#007f90] text-white border-none normal-case text-base font-semibold rounded-xl h-12 shadow-sm transition-colors duration-200">
            Confirm Booking
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

export default ModalForm;