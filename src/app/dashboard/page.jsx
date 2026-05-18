import AppointmentCard from '@/component/My-Booking';
import { getBookingData } from '@/lib/data';
import { Button, Tabs } from '@heroui/react';
import React from 'react';

const Dashboardpage = async () => {

    const data = await getBookingData()
    console.log(data)

    return (
        <div className='w-[80%] mx-auto'>
            <h2 className='text-2xl font-bold'>Dashboard</h2>
            <Tabs className="w-full max-w-md">
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
        <div className='flex flex-col gap-5 bg-[#e8fafd] border'>
            {
                data.map(v => <AppointmentCard key={v._id} appointment={v}></AppointmentCard>)
            }
        </div>
      </Tabs.Panel>
      <Tabs.Panel className="pt-4" id="profile">
        <p>Track your metrics and analyze performance data.</p>
      </Tabs.Panel>
    </Tabs>
        </div>
    );
};

export default Dashboardpage;