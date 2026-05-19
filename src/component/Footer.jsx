import Link from "next/link";
import React from "react";
import {FaFacebookF,FaTwitter,FaInstagram,FaLinkedinIn,FaHeartbeat,} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-950 dark:bg-slate-900 text-white mt-20">
      <div className="w-[90%] lg:w-[80%] mx-auto py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-5">
            <div className="bg-linear-to-r from-cyan-700 to-cyan-500 p-2 rounded-xl">
              <FaHeartbeat className="text-2xl text-white" />
            </div>
            <h2 className="text-3xl font-bold">DocAppoint</h2>
          </div>

          <p className="text-slate-400 leading-relaxed">Your trusted healthcare appointment platform. Find experienced doctors and book appointments instantly.</p>

          <div className="flex items-center gap-4 mt-6">

            <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-cyan-600 transition-all duration-300 flex items-center justify-center"><FaFacebookF /></button>

            <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-cyan-600 transition-all duration-300 flex items-center justify-center"><FaTwitter /></button>

            <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-cyan-600 transition-all duration-300 flex items-center justify-center"><FaInstagram /></button>

            <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-cyan-600 transition-all duration-300 flex items-center justify-center"><FaLinkedinIn /></button>

          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-5">Quick Links</h3>
          <ul className="space-y-3 text-slate-400">
            <li>
              <Link href="/" className="hover:text-cyan-400 transition-all">Home</Link>
            </li>
            <li>
              <Link href="/all-appointment" className="hover:text-cyan-400 transition-all">All Appointment</Link>
            </li>
            <li>
              <Link href="/dashboard" className="hover:text-cyan-400 transition-all">Dashboard</Link>
            </li>
            <li>
              <Link href="/login" className="hover:text-cyan-400 transition-all">Login</Link>
            </li>

          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-5">Services</h3>

          <ul className="space-y-3 text-slate-400">
            <li>Online Appointment</li>
            <li>Doctor Consultation</li>
            <li>Emergency Support</li>
            <li>24/7 Healthcare</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-5">Contact Us</h3>

          <div className="space-y-4 text-slate-400">
            <p>📍 Narayanganj, Dhaka, Bangladesh</p>
            <p>📞 +880 1883642841</p>
            <p>✉️ support@docappoint.com</p>
          </div>
        </div>

      </div>

      <div className="border-t border-white/10">
        <div className="w-[90%] lg:w-[80%] mx-auto py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-slate-500 text-sm">

          <p>© 2026 DocAppoint. All Rights Reserved.</p>

          <div className="flex items-center gap-5">
            <button className="hover:text-cyan-400 transition-all">Privacy Policy</button>

            <button className="hover:text-cyan-400 transition-all">Terms & Conditions</button>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;