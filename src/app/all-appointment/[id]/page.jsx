import { getIdData } from "@/lib/data";
import Image from "next/image";
import React from "react";

const DoctorDetailsPage = async ({params}) => {

    const {id} = await params
    const doctor = await getIdData(id)

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 gap-10 bg-white shadow-lg rounded-3xl p-6">
        
        <div className="relative w-full h-112 rounded-2xl overflow-hidden">
          <Image
            src={doctor.image}
            alt={doctor.name}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-cyan-700 font-semibold text-lg">{doctor.specialty}</p>
          <h1 className="text-4xl font-bold mt-2">{doctor.name}</h1>
          <p className="text-gray-500 font-semibold mt-4">{doctor.description}</p>

          <div className="mt-6 space-y-3">
            <p><span className="font-semibold">Experience:</span>{" "}{doctor.experience}</p><p>
              <span className="font-semibold">Rating:</span>{" "}⭐ {doctor.rating}</p>

            <p><span className="font-semibold">Hospital:</span>{" "}{doctor.hospital}</p>
            <p><span className="font-semibold">Location:</span>{" "}{doctor.location}</p>
            <p><span className="font-semibold">Consultation Fee:</span>{" "}<span className="font-semibold text-green-600 text-xl">৳ {doctor.fee}</span></p>
          </div>

          <div className="mt-6">
            <h2 className="font-semibold text-lg mb-2">Availability</h2>

            <div className="flex flex-wrap gap-3">
              {doctor.availability.map((time, index) => (
                <span
                  key={index}
                  className="bg-cyan-100 text-cyan-700 font-semibold px-4 py-2 rounded-full text-sm"
                >
                  {time}
                </span>
              ))}
            </div>
          </div>

          <button className="mt-8 bg-linear-to-r from-cyan-700 to-cyan-500 hover:bg-blue-700 transition-all duration-300 text-white py-3 rounded-xl font-semibold text-lg">Book Appointment</button>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetailsPage;