import React from 'react';

const Footer = () => {
  return (
    <div className="bg-[#091F5B] px-[16.75px] sm:px-[20px]  lg:px-[54px] 2xl:px-[72px] font-primary">
      <div className="flex  flex-col gap-10  lg:justify-between lg:flex-row text-white font-normal text-[10px] leading-[24.96px] xl:text-[12px] xl:leading-[18.72px] 2xl:text-[16px] 2xl:leading-[24.96px] py-[30px] lg:py-[20px] 2xl:py-[25px]">
        <div className=" lg:hidden ">
          <h3 className="text-[20px] leading-[20px] font-medium tracking-tighter">
            nebula digital
          </h3>
        </div>
        <div className="flex  items-center gap-[32px] lg:gap-[50px] 2xl:gap-[25px] text-[12px] leading-[24px] md:text-[14px] md:leading-[18px] xl:text-[16px] xl:leading-[20px] font-normal">
          <a href="/home">Home</a>
          <a href="/solutions">Solutions</a>
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
          <a href="/home">Privacy</a>
        </div>

        <div>
          <h3 className="text-[12px] leading-[24px] md:text-[14px] md:leading-[18px]  xl:text-[16px] xl:leading-[20px] font-normal">
            © 2024 Nebula Digital | All Rights Reserved{' '}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
