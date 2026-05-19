"use client"
import Link from 'next/link';
import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

const Banner = () => {
    return (
        <div>
          <Swiper autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }} pagination={true} modules={[Pagination, Autoplay]} className="mySwiper">
        <SwiperSlide>
          <div className='bg-black'>
            <div className="relative w-full h-[80vh] 2xl:h-[70vh] bg-cover bg-no-repeat bg-[url('/banner.avif')] text-white overflow-hidden">

      <div className=' flex items-center bg-linear-to-r from-slate-950/90 via-slate-950/80 to-cyan-800/80 h-full'>
        <div className="container mx-auto px-6 relative z-30 max-w-5xl">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-white/10 border border-white/20 text-emerald-400 mb-6 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"/>VERIFIED HEALTHCARE</span>

        <h1 className="text-4xl 2xl:text-5xl font-extrabold tracking-tight max-w-xl 2xl:max-w-2xl mb-3 leading-tight">
          Find & Book the Best <span className="bg-linear-to-r from-cyan-700 to-cyan-500 text-transparent bg-clip-text">Doctors</span> Near You</h1>
        <p className="text-slate-400 text-lg max-w-xl mb-6 2xl:mb-8 leading-relaxed">
          Verified specialists, instant confirmation, and transparent fees — your health, simplified.</p>

        <div className="flex flex-wrap gap-4 mb-7 2xl:mb-12">
          <Link href={'/all-appointment'} className="px-4 py-2 2xl:px-6 2xl:py-3  rounded-xl bg-linear-to-r hover:scale-98  duration-300 from-cyan-700 to-cyan-500 text-white hover:bg-teal-400 font-semibold transition-all flex items-center gap-2 shadow-lg shadow-teal-500/20"><FaSearch />Browse Doctors</Link>
          <Link href={'/dashboard'} className="px-4 py-2 2xl:px-6 2xl:py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition-all duration-200 backdrop-blur-sm">
            My Bookings
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-6 max-w-lg border-t border-white/10 pt-3 2xl:pt-6">
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
        </SwiperSlide>
        <SwiperSlide>
          <div className='bg-black'>
            <div className="relative w-full h-[80vh] 2xl:h-[70vh] bg-contain bg-[url('https://plus.unsplash.com/premium_photo-1681843126728-04eab730febe')] text-white overflow-hidden">

      <div className=' flex items-center bg-linear-to-r from-slate-950/90 via-slate-950/80 to-cyan-800/80 h-full'>
        <div className="container mx-auto px-6 relative z-30 max-w-5xl">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-white/10 border border-white/20 text-emerald-400 mb-6 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"/>VERIFIED HEALTHCARE</span>

        <h1 className="text-4xl 2xl:text-5xl font-extrabold tracking-tight max-w-xl 2xl:max-w-2xl mb-3 leading-tight">
          Find & Book the Best <span className="bg-linear-to-r from-cyan-700 to-cyan-500 text-transparent bg-clip-text">Doctors</span> Near You</h1>
        <p className="text-slate-400 text-lg max-w-xl mb-6 2xl:mb-8 leading-relaxed">
          Verified specialists, instant confirmation, and transparent fees — your health, simplified.</p>

        <div className="flex flex-wrap gap-4 mb-7 2xl:mb-12">
          <Link href={'/all-appointment'} className="px-4 py-2 2xl:px-6 2xl:py-3  rounded-xl bg-linear-to-r hover:scale-98  duration-300 from-cyan-700 to-cyan-500 text-white hover:bg-teal-400 font-semibold transition-all flex items-center gap-2 shadow-lg shadow-teal-500/20"><FaSearch />Browse Doctors</Link>
          <Link href={'/dashboard'} className="px-4 py-2 2xl:px-6 2xl:py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition-all duration-200 backdrop-blur-sm">
            My Bookings
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-6 max-w-lg border-t border-white/10 pt-3 2xl:pt-6">
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
        </SwiperSlide>
        <SwiperSlide>
          <div className='bg-black'>
            <div className="relative w-full h-[80vh] 2xl:h-[70vh] bg-cover bg-no-repeat bg-[url('https://media.istockphoto.com/id/2219405182/photo/team-of-doctors-working-on-a-laptop-in-the-meeting-room-at-the-hospital.webp?a=1&b=1&s=612x612&w=0&k=20&c=izY5WZ72VzKGfoQ9CtXFcAZFYvk2XSZpAZ9yativbX8=')] text-white overflow-hidden">

      <div className=' flex items-center bg-linear-to-r from-slate-950/90 via-slate-950/80 to-cyan-800/80 h-full'>
        <div className="container mx-auto px-6 relative z-30 max-w-5xl">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-white/10 border border-white/20 text-emerald-400 mb-6 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"/>VERIFIED HEALTHCARE</span>

        <h1 className="text-4xl 2xl:text-5xl font-extrabold tracking-tight max-w-xl 2xl:max-w-2xl mb-3 leading-tight">
          Find & Book the Best <span className="bg-linear-to-r from-cyan-700 to-cyan-500 text-transparent bg-clip-text">Doctors</span> Near You</h1>
        <p className="text-slate-400 text-lg max-w-xl mb-6 2xl:mb-8 leading-relaxed">
          Verified specialists, instant confirmation, and transparent fees — your health, simplified.</p>

        <div className="flex flex-wrap gap-4 mb-7 2xl:mb-12">
          <Link href={'/all-appointment'} className="px-4 py-2 2xl:px-6 2xl:py-3  rounded-xl bg-linear-to-r hover:scale-98  duration-300 from-cyan-700 to-cyan-500 text-white hover:bg-teal-400 font-semibold transition-all flex items-center gap-2 shadow-lg shadow-teal-500/20"><FaSearch />Browse Doctors</Link>
          <Link href={'/dashboard'} className="px-4 py-2 2xl:px-6 2xl:py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition-all duration-200 backdrop-blur-sm">
            My Bookings
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-6 max-w-lg border-t border-white/10 pt-3 2xl:pt-6">
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
        </SwiperSlide>

      </Swiper>
        </div>
    );
};

export default Banner;