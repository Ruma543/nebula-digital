import React from 'react';
import Message from '../Message/Message';
import OurSolutions from '../../../Home/Component/OurSolutions/OurSolutions';
import Testimonials from '../../../Home/Component/Testimonials/Testimonials';
import ConductPart from '../ConductPart/ConductPart';
import ScalablePart from '../ScalablePart/ScalablePart';
import MonetizePart from '../MonetizePart/MonetizePart';
import DigitalPart from '../DigitalPart/DigitalPart';
import ExpertPart1 from '../ExpertPart1/ExpertPart1';
import ExpertPart2 from '../ExpertPart2/ExpertPart2';
import Contact from '../../../../Component/Contact/Contact';

const AllContent = () => {
  return (
    <div className="">
      <Message></Message>
      <ConductPart></ConductPart>
      <ScalablePart></ScalablePart>
      <MonetizePart></MonetizePart>
      <DigitalPart></DigitalPart>
      <ExpertPart1></ExpertPart1>
      <ExpertPart2></ExpertPart2>
      <Contact></Contact>
    </div>
  );
};

export default AllContent;
