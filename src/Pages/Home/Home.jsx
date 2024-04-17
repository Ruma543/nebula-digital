import React from 'react';
import Banner from './Component/Banner/Banner';
import Message from './Component/Message/Message';
import SectionTitle from '../../Component/Shared/SectionTitle/SectionTitle';
import OurClient from './Component/OurClient/OurClient';
import Insight from './Component/Insight/Insight';
import HomeAllContents from './Component/HomeAllContents/HomeAllContents';

const Home = () => {
  return (
    <div className="w-full">
      <Banner></Banner>
      <HomeAllContents></HomeAllContents>
      {/* <Message></Message> */}
    </div>
  );
};

export default Home;
