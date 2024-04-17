import React from 'react';
import Message from '../Message/Message';
import OurClient from '../OurClient/OurClient';
import OurSolutions from '../OurSolutions/OurSolutions';
import UseCase from '../UseCase/UseCase';
import WeCreateMessage from '../WeCreateMessage/WeCreateMessage';
import Testimonials from '../Testimonials/Testimonials';
import Insight from '../Insight/Insight';

const HomeAllContents = () => {
  return (
    <div className="rounded-t-[32px] 1xs:rounded-t-[32px] sm:rounded-t-[32px] xl:rounded-t-[52.5px] 2xl:rounded-t-[70px] bg-white -mt-14">
      <Message></Message>
      <OurClient></OurClient>
      <OurSolutions></OurSolutions>
      <UseCase></UseCase>
      <WeCreateMessage></WeCreateMessage>
      <Testimonials></Testimonials>
      <Insight></Insight>
    </div>
  );
};

export default HomeAllContents;
