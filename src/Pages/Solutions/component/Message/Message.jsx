import React from 'react';

const Message = () => {
  return (
    <div className="mb-[64px] 1xs:mb-[64px] sm:mb-[64px] lg:mb-[47.5px] 2xl:mb-[64px]">
      <h3 className="font-normal tracking-[-0.03em] text-[#091F5B] text-[40px] leading-[48px] 1xs:text-[40px] 1xs:leading-[48px]  sm:text-[40px] sm:leading-[48px] lg:text-[60px] lg:leading-[63px] 2xl:text-[80px] 2xl:leading-[85px] ">
        Transform your data, <br className="md:hidden" />
        <span
          className="bg-gradient-to-r from-blue-600 to-blue-500 text-transparent"
          style={{ backgroundClip: 'text' }}
        >
          transform your <br /> business
        </span>{' '}
        with our AI <br className="md:hidden" /> solutions.
      </h3>
    </div>
  );
};

export default Message;
