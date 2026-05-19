import React from 'react';
import Banner from '../component/Banner';
import FeatureCards from '@/component/FeatureCards';

export const metadata = {
  title: "DocAppoint - Home",
  description: "Home Page",
};

const page = () => {
  return (
    <div>
      <Banner></Banner>
      <FeatureCards></FeatureCards>
    </div>
  );
};

export default page;