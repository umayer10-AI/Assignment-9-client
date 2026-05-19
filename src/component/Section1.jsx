import React from 'react';

const Section1 = () => {
    return (
        <div className="mt-20">
      <section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-800">Our Services</h2>
          <p className="text-slate-500 font-semibold mt-2">
            Everything you need for better healthcare management.
          </p>
        </div>

        <div className='bg-[#e8fafd]'>
            <div className="grid md:grid-cols-3 gap-6 w-[80%] mx-auto py-10">
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
      </section>
    </div>
    );
};

export default Section1;