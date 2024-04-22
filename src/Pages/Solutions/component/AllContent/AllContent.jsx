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
      <div className=" mb-20 md:mb-20 lg:mb-1 ">
        {/* pb-[60px] 1xs:pb-[60px] sm:pb-[60px] lg:pb-[15px] 2xl:pb-[15px] */}
        {/* mb-20 md:mb-20 lg:mb-10 */}
        {/* have to solve this issue */}
        <Contact></Contact>
      </div>
    </div>
  );
};

export default AllContent;
