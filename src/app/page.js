import React from 'react';
import Banner from '../component/Banner';
import FeatureCards from '@/component/FeatureCards';
import Section1 from '../component/Section1';

export const metadata = {
  title: "DocAppoint - Home",
  description: "Home Page",
};

const page = () => {
  return (
    <div>
      <Banner></Banner>
      <FeatureCards></FeatureCards>
      <Section1></Section1>
    </div>
  );
};

export default page;