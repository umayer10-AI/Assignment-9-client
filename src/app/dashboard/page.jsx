"use client"
import AppointmentCard from '@/component/My-Booking';
import { Data } from '@/context/Context';
import { Button, Tabs } from '@heroui/react';
import React, { useContext } from 'react';

const Dashboardpage = () => {

    const {tab,setT} = useContext(Data)

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
        <AppointmentCard></AppointmentCard>
      </Tabs.Panel>
      <Tabs.Panel className="pt-4" id="profile">
        <p>Track your metrics and analyze performance data.</p>
      </Tabs.Panel>
    </Tabs>
        </div>
    );
};

export default Dashboardpage;