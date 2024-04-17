import React from 'react';
import SectionTitle from '../../../../Component/Shared/SectionTitle/SectionTitle';
import img from '../../../../../public/Frame Expart2.png';
const ExpertPart2 = () => {
  return (
    <div className="mb-[160px] 1xs:mb-[160px] sm:mb-[160px] lg:mb-[120px] 2xl:mb-[160px] lg:flex lg:justify-between lg:gap-[125.25px] 2xl:gap-[137px] bg-[#FFFFFF] rounded-[24px] 1xs:rounded-[24px] sm:rounded-[24px] lg:rounded-[36px] 2xl:rounded-[48px]">
      <div className=" py-[40px] pl-[16px] 1xs:py-[40px] 1xs:pl-[16px] sm:py-[40px] sm:pl-[16px] lg:py-[72px] lg:pl-[48px] 2xl:py-[96px] 2xl:pl-[64px]">
        <div className="mb-[30px] 1xs:mb-[30px] sm:mb-[30px] lg:mb-[30px] 2xl:mb-[40px] flex justify-center lg:justify-start items-center gap-[16px] ">
          <SectionTitle title="Our Solutions"></SectionTitle>
          <SectionTitle title="Cyber Security"></SectionTitle>
        </div>
        <div className="mb-[24px] 1xs:mb-[24px] sm:mb-[24px] lg:mb-[18px] 2xl:mb-[24px]">
          <h2 className="lg:text-[60px] lg:leading-[67.5px] 2xl:text-[80px] 2xl:leading-[90px] tracking-[-0.03em] font-normal text-[#091F5B]">
            Expert assessments, <br className="hidden lg:block" />
            <span
              className="bg-gradient-to-r from-[#00b2ff] to-[#0057ff] text-transparent"
              style={{ backgroundClip: 'text' }}
            >
              tailored strategies, <br className="hidden lg:block" />
            </span>{' '}
            employee training
          </h2>
        </div>
        <div>
          <h3 className="font-normal text-[#091F5B] text-[16px] leading-[19.36px]  1xs:text-[16px] 1xs:leading-[19.36px] sm:text-[16px] sm:leading-[19.36px] lg:text-[18px] lg:leading-[22.5px] 2xl:text-[24px] 2xl:leading-[30px] ">
            We offer expert risk assessments, mitigation plans, tailored
            security <br className="hidden lg:block" /> strategies, and employee
            training and awareness programs to enhance cyber{' '}
            <br className="hidden lg:block" /> defense and compliance.
          </h3>
        </div>
      </div>
      <div className="hidden lg:block lg:w-[494.25px] lg:h-[489px] 2xl:w-[658px] 2xl:h-[652px]">
        <img
          className="lg:block lg:w-[494.25px] lg:h-[489px] 2xl:w-[658px] 2xl:h-[652px]"
          src={img}
          alt="img"
        />
      </div>
    </div>
  );
};

export default ExpertPart2;
