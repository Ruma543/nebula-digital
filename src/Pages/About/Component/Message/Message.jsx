import React from 'react';
import SectionTitle from '../../../../Component/Shared/SectionTitle/SectionTitle';

const Message = () => {
  return (
    <div className="mb-[96px] 1xs:mb-[96px] sm:mb-[96px] lg:mb-[120px] 2xl:mb-[160px]">
      <div className="mb-[32px] 1xs:mb-[32px] sm:mb-[32px] lg:mb-[40px] 2xl:mb-[30px]">
        <SectionTitle title="Our Vision"></SectionTitle>
      </div>
      <h3 className="font-normal tracking-[-0.03em] text-[#091F5B] text-[40px] leading-[48px] 1xs:text-[40px] 1xs:leading-[48px]  sm:text-[40px] sm:leading-[48px] lg:text-[58px] lg:leading-[58px] 2xl:text-[75px] 2xl:leading-[80px] ">
        Our vision is to pioneer transformative data and AI technologies, drive
        innovation and{' '}
        <span
          className="bg-gradient-to-r from-[#00b2ff] to-[#0057ff]  text-transparent"
          style={{ backgroundClip: 'text' }}
        >
          {' '}
          empower organizations to thrive in the digital era.
        </span>{' '}
        {/* Transform your data, <br className="md:hidden" />
        <span
          className="bg-gradient-to-r from-[#00b2ff] to-[#0057ff]  text-transparent"
          style={{ backgroundClip: 'text' }}
        >
          transform your <br /> business
        </span>{' '}
        with our AI <br className="md:hidden" /> solutions. */}
      </h3>
    </div>
  );
};

export default Message;
