import React from 'react';
import Marquee from 'react-fast-marquee';
import ScrollReveal from './ScrollReveal';

const Section1 = () => {
    return (
        <div>

        <section className="py-20 mt-30 bg-slate-50 dark:bg-blue-950 overflow-hidden">
  <div className="max-w-7xl mx-auto px-6">

    <ScrollReveal y={30} duration={0.6}>
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-white">
          How It Works
        </h2>

        <p className="text-slate-600 mt-3 text-lg dark:text-gray-400">
          Book your doctor appointment in 4 simple steps
        </p>
      </div>
    </ScrollReveal>

    <div className="grid md:grid-cols-4 gap-8 dark:text-black">

      <ScrollReveal delay={0.1} y={40} duration={0.6}>
        <div className="bg-white dark:bg-cyan-100 p-8 rounded-3xl shadow-sm shadow-cyan-500 hover:shadow-2xl transition-all duration-500 text-center animate-bounceSlow h-full">
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
      </ScrollReveal>

      <ScrollReveal delay={0.25} y={40} duration={0.6}>
        <div className="bg-white p-8 rounded-3xl dark:bg-cyan-100 shadow-sm shadow-cyan-500 hover:shadow-2xl transition-all duration-500 text-center animate-bounceSlow2 h-full">
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
      </ScrollReveal>

      <ScrollReveal delay={0.4} y={40} duration={0.6}>
        <div className="bg-white p-8 rounded-3xl dark:bg-cyan-100 shadow-sm shadow-cyan-500 hover:shadow-2xl transition-all duration-500 text-center animate-bounceSlow h-full">
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
      </ScrollReveal>

      <ScrollReveal delay={0.55} y={40} duration={0.6}>
        <div className="bg-white p-8 rounded-3xl dark:bg-cyan-100 shadow-sm shadow-cyan-500 hover:shadow-2xl transition-all duration-500 text-center animate-bounceSlow2 h-full">
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
      </ScrollReveal>

    </div>
  </div>
        </section>


        <section className='mt-30'>
        <ScrollReveal y={30} duration={0.6}>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white">Our Services</h2>
            <p className="text-slate-500 dark:text-gray-400 font-semibold mt-2">
              Everything you need for better healthcare management.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal y={40} delay={0.2} duration={0.7}>
          <div className='py-20 px-10 rounded-xl bg-[#f1f8f9] dark:bg-blue-950'>
              <Marquee speed={80}>
              <div className="flex items-center gap-10">

            <div className="bg-white dark:bg-cyan-900 w-110 p-6 border border-cyan-500 rounded-xl transition">
              <div className="text-4xl mb-4">🩺</div>
              <h3 className="text-xl font-semibold mb-2">Doctor Consultation</h3>
              <p className="text-slate-600 dark:text-gray-300">
                Connect with expert doctors and specialists anytime.
              </p>
            </div>

            <div className="bg-white dark:bg-cyan-900 w-110 p-6 rounded-xl border border-cyan-500 transition">
              <div className="text-4xl mb-4">📅</div>
              <h3 className="text-xl font-semibold mb-2">Easy Appointment</h3>
              <p className="text-slate-600 dark:text-gray-300">
                Schedule appointments in just a few clicks.
              </p>
            </div>

            <div className="bg-white dark:bg-cyan-900 w-110 p-6 rounded-xl border border-cyan-500 transition">
              <div className="text-4xl mb-4">💊</div>
              <h3 className="text-xl font-semibold mb-2">Medicine Reminder</h3>
              <p className="text-slate-600 dark:text-gray-300">
                Never miss your medicines with smart reminders.
              </p>
            </div>
            <div className="bg-white dark:bg-cyan-900 w-110 p-6 border border-cyan-500 rounded-xl transition">
              <div className="text-4xl mb-4">🩺</div>
              <h3 className="text-xl font-semibold mb-2">Doctor Consultation</h3>
              <p className="text-slate-600 dark:text-gray-300">
                Connect with expert doctors and specialists anytime.
              </p>
            </div>

            <div className="bg-white dark:bg-cyan-900 w-110 p-6 rounded-xl border border-cyan-500 transition">
              <div className="text-4xl mb-4">📅</div>
              <h3 className="text-xl font-semibold mb-2">Easy Appointment</h3>
              <p className="text-slate-600 dark:text-gray-300">
                Schedule appointments in just a few clicks.
              </p>
            </div>

            <div className="bg-white mr-10 dark:bg-cyan-900 w-110 p-6 rounded-xl border border-cyan-500 transition">
              <div className="text-4xl mb-4">💊</div>
              <h3 className="text-xl font-semibold mb-2">Medicine Reminder</h3>
              <p className="text-slate-600 dark:text-gray-300">
                Never miss your medicines with smart reminders.
              </p>
            </div>
          </div>
          </Marquee>
          </div>
        </ScrollReveal>

      </section>

    </div>
    );
};

export default Section1;