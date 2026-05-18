"use client";
import { useSession } from "@/lib/auth-client";
import Image from "next/image";
import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEdit,
} from "react-icons/fa";

const ProfilePage = () => {

    const {data} = useSession()
    // const user = data?.user
    // console.log(user)

  const user = {
    name: "Umayer Ahmad",
    email: "umayer@gmail.com",
    phone: "017XXXXXXXX",
    location: "Narayanganj, Dhaka",
    image:
      "https://i.ibb.co.com/4pDNDk1/avatar.png",
    role: "Patient",
  };

  return (
    <div className=" bg-slate-100 flex items-center justify-center px-4 py-5">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden">
        
        <div className="h-35 bg-linear-to-r from-cyan-700 to-cyan-500 relative">

          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2">
            <div className="relative w-36 h-36 rounded-full border-4 border-white overflow-hidden shadow-xl">
              <Image
                src={user.image}
                alt={user.name}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="pt-22 pb-10 px-6 text-center">

          <h1 className="text-3xl font-bold text-slate-800">
            {user.name}
          </h1>

          <p className="text-cyan-600 font-semibold mt-2">
            Patient
          </p>

          {/* Info */}
          <div className="grid md:grid-cols-1 gap-3 mt-5">

            <div className="bg-slate-50 border flex justify-center gap-2 items-center border-slate-200 rounded-2xl p-3">
              <FaEnvelope className=" text-cyan-600 text-2xl" />

              <h3 className="font-semibold text-slate-700">
                Email:
              </h3>
              <p className="text-slate-500 text-sm break-all">
                {user.email}
              </p>

            </div>

            <div className="bg-slate-50 border flex justify-center gap-2 items-center border-slate-200 rounded-2xl p-3">
              <FaPhoneAlt className=" text-cyan-600 text-2xl" />

              <h3 className="font-semibold text-slate-700">
                Phone:
              </h3>
              <p className="text-slate-500 text-sm break-all">
                017XXXXXXXX
              </p>

            </div>

            <div className="bg-slate-50 border flex justify-center gap-2 items-center border-slate-200 rounded-2xl p-3">
              <FaMapMarkerAlt className=" text-cyan-600 text-2xl" />

              <h3 className="font-semibold text-slate-700">
                Location:
              </h3>
              <p className="text-slate-500 text-sm break-all">
                Dhaka, Bangladesh
              </p>

            </div>

          </div>

          <button
            className="mt-5 inline-flex items-center gap-3 bg-linear-to-r from-cyan-700 to-cyan-500 hover:scale-105 transition-all duration-300 text-white px-6 py-3 rounded-2xl font-semibold shadow-lg"
          >
            <FaEdit />
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;