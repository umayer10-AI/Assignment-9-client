import React from 'react';

const Section2 = () => {
    return (
        <div>
            <section className="py-20 mt-10 bg-white dark:bg-blue-950">
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid md:grid-cols-2 gap-12 items-center">

      <div>
        <span className="bg-cyan-100 text-green-500 dark:bg-slate-700 px-4 py-2 rounded-full text-sm font-semibold">
          Live Consultation
        </span>

        <h2 className="text-4xl font-bold text-slate-800 dark:text-white mt-6 leading-tight">
          Video Consultation <br /> With Expert Doctors
        </h2>

        <p className="text-slate-600 dark:text-gray-400 mt-6 text-lg leading-relaxed">
          Connect with experienced doctors from anywhere through secure
          video calls using Google Meet or Zoom integration.
          Get instant medical support without visiting the hospital.
        </p>

        <div className="space-y-4 mt-8">

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-2xl">
              🎥
            </div>

            <div>
              <h4 className="font-semibold text-lg">
                HD Video Consultation
              </h4>

              <p className="text-slate-600 dark:text-gray-400 text-sm">
                Smooth and secure live video appointments.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-2xl">
              ⏰
            </div>

            <div>
              <h4 className="font-semibold text-lg">
                Flexible Scheduling
              </h4>

              <p className="text-slate-600 dark:text-gray-400 text-sm">
                Choose your preferred consultation time easily.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-2xl">
              🔒
            </div>

            <div>
              <h4 className="font-semibold text-lg">
                Secure & Private
              </h4>

              <p className="text-slate-600 dark:text-gray-400 text-sm">
                Your medical discussions stay fully protected.
              </p>
            </div>
          </div>

        </div>

        <div className="flex gap-4 mt-10">

          <button className="bg-linear-to-r from-cyan-700 to-cyan-500 hover:bg-blue-700 transition text-white px-6 py-3 rounded-2xl font-semibold">
            Start Consultation
          </button>

          <button className="border border-slate-300 hover:bg-slate-100 transition px-6 py-3 rounded-2xl font-semibold">
            Learn More
          </button>

        </div>
      </div>

      <div className="relative">

        <img
          src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop"
          alt="Video Consultation"
          className="rounded-3xl shadow-xl w-full h-[500px] object-cover"
        />

        <div className="absolute bottom-6 left-6 bg-white shadow-xl rounded-2xl p-5 w-65">

          <div className="flex items-center gap-4">

            <img
              src="https://images.unsplash.com/photo-1647763283644-578114aba0c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjAzfHxkb2N0b3J8ZW58MHx8MHx8fDA%3D"
              alt="Doctor"
              className="w-14 h-14 rounded-full object-cover"
            />

            <div>
              <h4 className="font-semibold dark:text-black">
                Dr. Umayer Ahmad
              </h4>

              <p className="text-sm text-slate-500">
                Cardiologist
              </p>
            </div>

          </div>

          <div className="flex items-center justify-between mt-5">

            <span className="text-green-600 font-medium">
              ● Online
            </span>

            <button className="bg-linear-to-r from-cyan-700 to-cyan-500 text-white px-4 py-2 rounded-xl text-sm">
              Join Call
            </button>

          </div>

        </div>

      </div>

    </div>

  </div>
</section>
        </div>
    );
};

export default Section2;