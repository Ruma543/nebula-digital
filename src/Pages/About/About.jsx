import React from 'react';
import Card from '../Home/Component/Card/Card';
import Video from './Component/Video';
import ReactPlayerPopup from './Component/ReactPlayerPopup';
import PlayerVeno from './Component/PlayerVeno/PlayerVeno';

const About = () => {
  return (
    <div className="pt-[100px]">
      <Card></Card>
      <Video className="hidden lg:block"></Video>
      <ReactPlayerPopup></ReactPlayerPopup>
      <PlayerVeno></PlayerVeno>
    </div>
  );
};

export default About;
