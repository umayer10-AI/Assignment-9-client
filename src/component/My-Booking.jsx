"use client";
import { deleteBookingData } from "@/lib/action";
import React from "react";
import { FaCalendarAlt, FaClock, FaTrash } from "react-icons/fa";
import EditModal from "./EditModal";
import { authClient } from "@/lib/auth-client";

const AppointmentCard = ({appointment}) => {

    const b = async () => {

        const token = await authClient.token()
        const t = token?.data

        await deleteBookingData(appointment._id,t)
    }

  return (
    <div className="max-w-lg mx-auto bg-white dark:bg-slate-800 w-full rounded-3xl shadow-lg border border-slate-100 p-6 hover:shadow-2xl transition-all duration-300">
      
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
            {appointment.doctor}
          </h2>

          <p className="text-slate-500 dark:text-gray-400 font-semibold mt-1">
            Patient: {appointment.patient}
          </p>
        </div>

        <div className="bg-cyan-100 text-cyan-700 dark:bg-gray-700 dark:text-green-500 px-3 py-1 rounded-full text-sm font-semibold">
          Active
        </div>
      </div>

      {/* Info */}
      <div className="mt-2 space-y-2 text-slate-700 dark:text-gray-300">

        <div className="flex items-center gap-3">
          <FaCalendarAlt className="text-cyan-600" />
          <span>{appointment.date}</span>
        </div>

        <div className="flex items-center gap-3">
          <FaClock className="text-cyan-600" />
          <span>{appointment.time}</span>
        </div>

        <div>
          <p className="text-sm font-semibold text-slate-600 dark:text-gray-300 font-bold mb-1">
            Reason
          </p>

          {
            appointment.reason && <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-slate-700">{appointment.reason}</div>
          }
        </div>
      </div>

      <div className="flex items-center gap-4 mt-5">


        <EditModal p={appointment}></EditModal>

        <button onClick={b}
          className="flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white py-2 rounded-xl font-semibold transition-all duration-200 px-4"
        >
          <FaTrash />
          Delete
        </button>

      </div>
    </div>
  );
};

export default AppointmentCard;