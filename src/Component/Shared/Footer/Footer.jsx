import React from 'react';

const Footer = () => {
  return (
    <div className="bg-[#091F5B] px-[16.75px] sm:px-[20px]  xl:px-[54px] 2xl:px-[72px]">
      <div className="flex justify-between flex-col space-y-3 lg:flex-row text-white font-normal text-[10px] leading-[24.96px] xl:text-[12px] xl:leading-[18.72px] 2xl:text-[16px] 2xl:leading-[24.96px] py-[24px] xl:py-[16px] 2xl:py-[21px]">
        <div className=" lg:hidden text-[16px] leading-[19.6px] font-medium tracking-tighter">
          nebula digital
        </div>
        <div className="flex gap-[32px] xl:gap-[18.75px] 2xl:gap-[25px]">
          <a href="/home">Home</a>
          <a href="/home">Solutions</a>
          <a href="/home">About Us</a>
          <a href="/home">Contact</a>
          <a href="/home">Privacy</a>
        </div>

        <div>
          <h3>© 2024 Nebula Digital | All Rights Reserved </h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
