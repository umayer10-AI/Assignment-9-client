"use client";

import Image from "next/image";
import React from "react";

const DoctorDetailsPage = () => {
  const doctor = {
    _id: "6a09d2a73d5510ae21c863ea",
    name: "Dr. Ayesha Rahman",
    specialty: "Cardiologist",
    image:
      "https://plus.unsplash.com/premium_photo-1661580574627-9211124e5c3f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZG9jdG9yfGVufDB8fDB8fHww",
    experience: "10 years",
    rating: 4.9,
    availability: [
      "09:00 AM - 12:00 PM",
      "04:00 PM - 07:00 PM",
    ],
    description:
      "Highly experienced cardiologist specializing in heart diseases and preventive care.",
    hospital: "Labaid Cardiac Hospital",
    location: "Dhanmondi, Dhaka",
    fee: 800,
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 gap-10 bg-white shadow-lg rounded-3xl p-6">
        
        {/* Image */}
        <div className="relative w-full h-112 rounded-2xl overflow-hidden">
          <Image
            src={doctor.image}
            alt={doctor.name}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-blue-600 font-semibold text-lg">
            {doctor.specialty}
          </p>

          <h1 className="text-4xl font-bold mt-2">
            {doctor.name}
          </h1>

          <p className="text-gray-600 mt-4">
            {doctor.description}
          </p>

          <div className="mt-6 space-y-3">
            <p>
              <span className="font-semibold">Experience:</span>{" "}
              {doctor.experience}
            </p>

            <p>
              <span className="font-semibold">Rating:</span>{" "}
              ⭐ {doctor.rating}
            </p>

            <p>
              <span className="font-semibold">Hospital:</span>{" "}
              {doctor.hospital}
            </p>

            <p>
              <span className="font-semibold">Location:</span>{" "}
              {doctor.location}
            </p>

            <p>
              <span className="font-semibold">Consultation Fee:</span>{" "}
              ৳ {doctor.fee}
            </p>
          </div>

          {/* Availability */}
          <div className="mt-6">
            <h2 className="font-semibold text-lg mb-2">
              Availability
            </h2>

            <div className="flex flex-wrap gap-3">
              {doctor.availability.map((time, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm"
                >
                  {time}
                </span>
              ))}
            </div>
          </div>

          {/* Button */}
          <button className="mt-8 bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white py-3 rounded-xl font-semibold text-lg">
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetailsPage;