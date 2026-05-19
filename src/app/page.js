import React from 'react';
import Banner from '../component/Banner';
import FeatureCards from '@/component/FeatureCards';
import Section1 from '../component/Section1';
import Section2 from '@/component/Section2';

export const metadata = {
  title: "Home - DocAppoint",
  description: "Home Page",
};

const page = () => {
  return (
    <div>
      <Banner></Banner>
      <FeatureCards></FeatureCards>
      <Section1></Section1>
      <Section2></Section2>
    </div>
  );
};

export default page;