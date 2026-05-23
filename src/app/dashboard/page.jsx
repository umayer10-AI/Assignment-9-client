import AppointmentCard from '@/component/My-Booking';
import ProfilePage from '@/component/Profile';
import { auth } from '@/lib/auth';
import { getBookingData } from '@/lib/data';
import { Tabs } from '@heroui/react';
import { headers } from 'next/headers';
import React from 'react';
import { HiOutlineDocumentText } from 'react-icons/hi';

export const metadata = {
  title: "Dashboard - DocAppoint",
  description: "Home Page",
};

const Dashboardpage = async () => {

    const {token} = await auth.api.getToken({
      headers: await headers()
    })

    const data = await getBookingData(token)

    return (
        <div className='w-[80%] mx-auto mt-5 space-y-6'>
            <h2 className='text-3xl font-bold'>Dashboard</h2>
            <Tabs className="w-full max-w-lg">
      <Tabs.ListContainer>
        <Tabs.List aria-label="Options">
          <Tabs.Tab id="booking">
            My Booking
            <Tabs.Indicator />
          </Tabs.Tab>
          <Tabs.Tab id="profile">
            Profile
            <Tabs.Indicator />
          </Tabs.Tab>

        </Tabs.List>
      </Tabs.ListContainer>
      <Tabs.Panel className="pt-4" id="booking">

        {
            data.length===0 ? <div className="flex flex-col items-center justify-center py-20">
                <h2 className='text-7xl'><HiOutlineDocumentText /></h2>

                <h2 className="text-2xl font-bold text-slate-700 mt-6">
                    No Appointments Found
                </h2>

                <p className="text-slate-500 mt-2">
                    You haven’t booked any appointment yet.
                </p>

                <button className="mt-6 bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-xl font-semibold">
                    Book Appointment
                </button>
            </div>
            : <div className='flex flex-col gap-5 bg-[#e8fafd] dark:bg-blue-950 p-5 rounded-xl'>
                    {
                        data.map(v => <AppointmentCard key={v._id} appointment={v}></AppointmentCard>)
                    }
                </div>
        }

      </Tabs.Panel>
      <Tabs.Panel className="pt-4" id="profile">
        
        <ProfilePage></ProfilePage>

      </Tabs.Panel>
    </Tabs>
        </div>
    );
};

export default Dashboardpage;