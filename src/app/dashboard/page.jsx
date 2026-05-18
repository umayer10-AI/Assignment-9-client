import AppointmentCard from '@/component/My-Booking';
import ProfilePage from '@/component/Profile';
import { getBookingData } from '@/lib/data';
import { Button, Tabs } from '@heroui/react';
import React from 'react';

const Dashboardpage = async () => {

    const data = await getBookingData()

    return (
        <div className='w-[80%] mx-auto'>
            <h2 className='text-2xl font-bold'>Dashboard</h2>
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

        <div className='flex flex-col gap-5 bg-[#e8fafd] p-5 rounded-xl'>
            {
                data.map(v => <AppointmentCard key={v._id} appointment={v}></AppointmentCard>)
            }
        </div>

      </Tabs.Panel>
      <Tabs.Panel className="pt-4" id="profile">
        
        <ProfilePage></ProfilePage>

      </Tabs.Panel>
    </Tabs>
        </div>
    );
};

export default Dashboardpage;