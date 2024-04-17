import React from 'react';
import Card from '../Home/Component/Card/Card';
import Video from './Component/Video';
import ReactPlayerPopup from './Component/ReactPlayerPopup';

const About = () => {
  return (
    <div className="pt-[100px]">
      <Card></Card>
      <Video className="hidden lg:block"></Video>
      <ReactPlayerPopup></ReactPlayerPopup>
    </div>
  );
};

export default About;
