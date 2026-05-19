import { Chip } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Cards = ({doctor}) => {

    return (
        <div>
            <div className="rounded-2xl hover:-translate-y-2 h-full overflow-hidden group border border-slate-200 shadow-lg bg-white hover:shadow-xl hover:shadow-cyan-500 transition-all duration-300">

            <div className="relative h-60 w-full">
                <Image
                    src={doctor.image}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt={doctor.name}
                    fill
                    className="object-cover group-hover:scale-105 duration-500"
                />
                <span className='absolute top-2 right-2'><Chip className='font-bold'>⭐ {doctor.rating}</Chip></span>
            </div>

            <div className="p-5">

                <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-cyan-100 text-cyan-700 mb-2">{doctor.specialty}</span>
                <h2 className="text-2xl font-bold text-slate-800 mb-2">{doctor.name}</h2>

                <div className='space-y-1 mb-2 text-sm'>
                    <p className="text-slate-600">🩺 Experience: {doctor.experience}</p>
                    <p className="text-slate-600">🏥 {doctor.hospital}</p>
                    <p className="text-slate-600">📍 {doctor.location}</p>
                </div>

                <p className="text-slate-500 text-sm line-clamp-2 leading-relaxed font-semibold mb-5">{doctor.description}</p>

                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm text-slate-500">Consultation Fee</p>
                        <h3 className="text-2xl font-bold text-cyan-700">৳ {doctor.fee}</h3>
                    </div>

                    <Link href={`/all-appointment/${doctor._id}`} className="px-5 py-2 rounded-xl bg-linear-to-r from-cyan-700 to-cyan-500 text-white font-semibold hover:scale-105 transition-all duration-300">
                        View Details
                    </Link>

                </div>

            </div>
        </div>
        </div>
    );
};

export default Cards;