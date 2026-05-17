import Image from 'next/image';
import React from 'react';
import { BsSearch } from 'react-icons/bs';
import { FaSearch } from 'react-icons/fa';
import { IoSearch } from 'react-icons/io5';

const Banner = () => {
    return (
        <div className=''>
            <div className="relative w-full h-[70vh] flex items-center bg-slate-950 text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          src="/path-to-your-image.jpg" 
          alt="banner" 
          className="w-full h-full object-cover object-center opacity-40"/>
        <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-950/80 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-white/10 border border-white/20 text-emerald-400 mb-6 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"/>VERIFIED HEALTHCARE</span>

        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight max-w-2xl mb-4 leading-tight">
          Find & Book the Best <span className="bg-linear-to-r from-cyan-700 to-cyan-500 text-transparent bg-clip-text">Doctors</span> Near You</h1>
        <p className="text-slate-400 text-lg max-w-xl mb-8 leading-relaxed">
          Verified specialists, instant confirmation, and transparent fees — your health, simplified.</p>

        <div className="flex flex-wrap gap-4 mb-12">
          <button className="px-6 py-3 rounded-xl bg-linear-to-r from-cyan-700 to-cyan-500 text-white hover:bg-teal-400 font-semibold transition-all duration-200 flex items-center gap-2 shadow-lg shadow-teal-500/20"><FaSearch />Browse Doctors</button>
          <button className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition-all duration-200 backdrop-blur-sm">
            My Bookings
          </button>
        </div>

        <div className="grid grid-cols-3 gap-6 max-w-lg border-t border-white/10 pt-6">
          <div>
            <p className="text-2xl md:text-3xl font-bold text-white">500+</p>
            <p className="text-xs text-slate-500 uppercase tracking-wider mt-1">Verified Doctors</p>
          </div>
          <div>
            <p className="text-2xl md:text-3xl font-bold text-white flex items-center gap-1">4.9 <span className="text-amber-400 text-xl">★</span></p>
            <p className="text-xs text-slate-500 uppercase tracking-wider mt-1">Avg. Rating</p>
          </div>
          <div>
            <p className="text-2xl md:text-3xl font-bold text-white">50k+</p>
            <p className="text-xs text-slate-500 uppercase tracking-wider mt-1">Appointments</p>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Banner;