import Link from 'next/link';
import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className='bg-black'>
            <div className="relative w-full h-[70vh] bg-cover bg-no-repeat bg-[url('/banner.avif')] text-white overflow-hidden">

      <div className=' flex items-center  bg-linear-to-r from-slate-950/90 via-slate-950/80 to-cyan-800/80 h-full'>
        <div className="container mx-auto px-6 relative z-30 max-w-5xl">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-white/10 border border-white/20 text-emerald-400 mb-6 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"/>VERIFIED HEALTHCARE</span>

        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight max-w-2xl mb-4 leading-tight">
          Find & Book the Best <span className="bg-linear-to-r from-cyan-700 to-cyan-500 text-transparent bg-clip-text">Doctors</span> Near You</h1>
        <p className="text-slate-400 text-lg max-w-xl mb-8 leading-relaxed">
          Verified specialists, instant confirmation, and transparent fees — your health, simplified.</p>

        <div className="flex flex-wrap gap-4 mb-12">
          <Link href={'/all-appointment'} className="px-6 py-3 rounded-xl bg-linear-to-r from-cyan-700 to-cyan-500 text-white hover:bg-teal-400 font-semibold transition-all duration-200 flex items-center gap-2 shadow-lg shadow-teal-500/20"><FaSearch />Browse Doctors</Link>
          <button className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition-all duration-200 backdrop-blur-sm">
            My Bookings
          </button>
        </div>

        <div className="grid grid-cols-3 gap-6 max-w-lg border-t border-white/10 pt-6">
          <div>
            <p className="text-2xl md:text-3xl font-bold text-white">500+</p>
            <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mt-1">Verified Doctors</p>
          </div>
          <div>
            <p className="text-2xl md:text-3xl font-bold text-white flex items-center gap-1">4.9 <span className="text-amber-400 text-xl">★</span></p>
            <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mt-1">Avg. Rating</p>
          </div>
          <div>
            <p className="text-2xl md:text-3xl font-bold text-white">50k+</p>
            <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mt-1">Appointments</p>
          </div>
        </div>
      </div>
      </div>
    </div>
        </div>
    );
};

export default Banner;