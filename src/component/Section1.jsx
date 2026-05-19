import React from 'react';
import Marquee from 'react-fast-marquee';

const Section1 = () => {
    return (
        <div>

        <section className="py-20 mt-30 bg-slate-50 overflow-hidden">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold text-slate-800">
        How It Works
      </h2>

      <p className="text-slate-600 mt-3 text-lg">
        Book your doctor appointment in 4 simple steps
      </p>
    </div>

    <div className="grid md:grid-cols-4 gap-8">

      <div className="bg-white p-8 rounded-3xl shadow-sm shadow-cyan-500 hover:shadow-2xl transition-all duration-500 text-center animate-bounceSlow">
        <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-blue-100 text-3xl">
          🔍
        </div>

        <h3 className="text-xl font-semibold mb-3">
          Search Doctor
        </h3>

        <p className="text-slate-600">
          Find specialist doctors based on your health needs.
        </p>
      </div>

      <div className="bg-white p-8 rounded-3xl shadow-sm shadow-cyan-500 hover:shadow-2xl transition-all duration-500 text-center animate-bounceSlow2">
        <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-green-100 text-3xl">
          📅
        </div>

        <h3 className="text-xl font-semibold mb-3">
          Choose Schedule
        </h3>

        <p className="text-slate-600">
          Select your preferred date and appointment time.
        </p>
      </div>

      <div className="bg-white p-8 rounded-3xl shadow-sm shadow-cyan-500 hover:shadow-2xl transition-all duration-500 text-center animate-bounceSlow">
        <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-purple-100 text-3xl">
          💳
        </div>

        <h3 className="text-xl font-semibold mb-3">
          Confirm Booking
        </h3>

        <p className="text-slate-600">
          Secure your appointment with quick confirmation.
        </p>
      </div>

      <div className="bg-white p-8 rounded-3xl shadow-sm shadow-cyan-500 hover:shadow-2xl transition-all duration-500 text-center animate-bounceSlow2">
        <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-red-100 text-3xl">
          🩺
        </div>

        <h3 className="text-xl font-semibold mb-3">
          Get Treatment
        </h3>

        <p className="text-slate-600">
          Visit the doctor or join online consultation easily.
        </p>
      </div>

    </div>
  </div>
</section>

        {/* <section className='mt-30'>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-800">Our Services</h2>
          <p className="text-slate-500 font-semibold mt-2">
            Everything you need for better healthcare management.
          </p>
        </div>

        <div className=''>
            <div className="grid md:grid-cols-3 gap-6 w-[80%] mx-auto py-20 px-10 rounded-xl bg-[#f1f8f9]">
          <div className="bg-white p-6 rounded-3xl shadow-md hover:shadow-xl transition">
            <div className="text-4xl mb-4">🩺</div>
            <h3 className="text-xl font-semibold mb-2">Doctor Consultation</h3>
            <p className="text-slate-600">
              Connect with expert doctors and specialists anytime.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-md hover:shadow-xl transition">
            <div className="text-4xl mb-4">📅</div>
            <h3 className="text-xl font-semibold mb-2">Easy Appointment</h3>
            <p className="text-slate-600">
              Schedule appointments in just a few clicks.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-md hover:shadow-xl transition">
            <div className="text-4xl mb-4">💊</div>
            <h3 className="text-xl font-semibold mb-2">Medicine Reminder</h3>
            <p className="text-slate-600">
              Never miss your medicines with smart reminders.
            </p>
          </div>
        </div>
        </div>
      </section> */}

            <section className='mt-30'>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-800">Our Services</h2>
          <p className="text-slate-500 font-semibold mt-2">
            Everything you need for better healthcare management.
          </p>
        </div>


        {/* <div className="grid md:grid-cols-3 gap-6 w-[80%] mx-auto py-20 px-10 rounded-xl bg-[#f1f8f9]"> */}
        <div className='w-[80%] mx-auto py-20 px-10 rounded-xl bg-[#f1f8f9]'>
            <Marquee>
            <div className="flex items-center gap-7 ">

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <div className="text-4xl mb-4">🩺</div>
            <h3 className="text-xl font-semibold mb-2">Doctor Consultation</h3>
            <p className="text-slate-600">
              Connect with expert doctors and specialists anytime.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <div className="text-4xl mb-4">📅</div>
            <h3 className="text-xl font-semibold mb-2">Easy Appointment</h3>
            <p className="text-slate-600">
              Schedule appointments in just a few clicks.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <div className="text-4xl mb-4">💊</div>
            <h3 className="text-xl font-semibold mb-2">Medicine Reminder</h3>
            <p className="text-slate-600">
              Never miss your medicines with smart reminders.
            </p>
          </div>
        </div>
        </Marquee>
        </div>


      </section>

    </div>
    );
};

export default Section1;