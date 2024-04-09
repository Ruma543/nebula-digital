import React from 'react';
import Card from '../Home/Component/Card/Card';
import Video from './Component/Video';

const About = () => {
  return (
    <div className="pt-[100px]">
      <Card></Card>
      <Video className="hidden lg:block"></Video>
    </div>
  );
};

export default About;
