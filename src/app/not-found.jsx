import Link from "next/link";
import React from "react";
import { FaExclamationTriangle, FaHome } from "react-icons/fa";

const NotFound = () => {
    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6">
            <div className="text-center max-w-2xl">

                <div className="w-28 h-28 mx-auto rounded-full bg-linear-to-r from-cyan-700 to-cyan-500 flex items-center justify-center shadow-2xl shadow-cyan-500/20 mb-8">
                    <FaExclamationTriangle className="text-white text-5xl" />
                </div>

                <h1 className="text-7xl md:text-9xl font-extrabold bg-linear-to-r from-cyan-500 to-cyan-300 text-transparent bg-clip-text mb-4">404</h1>

                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Page Not Found</h2>

                <p className="text-slate-400 text-lg leading-relaxed mb-10">
                    Sorry, the page you are looking for does not exist,has been removed, or is temporarily unavailable.</p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-5">

                    <Link href="/">
                        <button className="px-7 py-3 rounded-2xl bg-linear-to-r from-cyan-700 to-cyan-500 text-white font-semibold flex items-center gap-2 hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/20"><FaHome />Back To Home</button>
                    </Link>

                    <Link href="/all-appointment">
                        <button className="px-7 py-3 rounded-2xl border border-white/10 bg-white/5 text-white font-semibold hover:bg-white/10 transition-all duration-300">Browse Doctors</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;