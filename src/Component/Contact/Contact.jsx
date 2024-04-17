import React from 'react';
import img from '../../../public/SVG (5).png';
import img1 from '../../../public/Vector (1).png';
import img2 from '../../../public/facebook-icon 1.png';
const Contact = () => {
  return (
    <div className="grid grid-cols-1 h-[180.74px]  1xs:h-[180.74px] lg:h-[270.75px] 2xl:h-[370px] ">
      {/* h-[191.74px] xl:h-[282.75px] 2xl:h-[377px] */}
      <div className="mb-[16px] xl:mb-[42px] 2xl:mb-[56px] text-primary">
        <h3 className="text-[#091F5B] text-[23.44px] leading-[28.37px] font-normal tracking-[-0.03em] sm:text-[28px] sm:leading-[33.89px] sm:font-normal sm:tracking-[-0.03em] xl:text-[96px] xl:leading-[67.5px] xl:font-normal  xl:tracking-[-0.03em] 2xl:text-[128px] 2xl:leading-[90px] 2xl:font-normal 2xl:tracking-[-0.03em] font-primary  ">
          {/* sm:leading-[33.89px] */}
          Contact us to learn more
        </h3>
      </div>
      <div className="mb-[24px] xl:mb-[42px] 2xl:mb-[56px]">
        <button className="bg-[#0F33E9] text-white px-[16.13px] py-[9px] xl:px-[21px] xl:py-[11.62px] 2xl:px-[28px] 2xl:py-[15.5px] flex justify-center items-center gap-[6.9px] xl:gap-[12px]  2xl:gap-[16px] rounded-[28.8px] xl:rounded-[75px]  2xl:rounded-[100px] ">
          <span className="text-[9.22px] leading-[11.52px] font-normal 1xs:text-[9.22px] 1xs:leading-[11.52px] 1xs:font-normal lg:text-[15px] lg:leading-[15px] lg:font-normal 2xl:text-[20px] 2xl:leading-[20px] 2xl:font-normal">
            Let’s talk about data
          </span>
          <span>
            <img
              className="w-[8.64px] h-[8.64px] lg:w-[15px] lg:h-[12px] 2xl:w-[20px] 2xl:h-[16px]"
              src={img}
              alt=""
            />
          </span>
        </button>
      </div>

      <div className="flex  lg:justify-between  flex-col lg:items-center  lg:flex-row ">
        <div className="text-[#091F5B] w-full mb-[24px]">
          <h3 className=" text-[14px] leading-[16.94px] font-medium  tracking-tighter lg:text-[18px] lg:leading-[22.5px] lg:font-medium  lg:tracking-tighter 2xl:text-[24px] 2xl:leading-[30px] 2xl:font-medium  2xl:tracking-tighter mb-[8px]">
            {/* leading-[16.94] */}
            nebula digital
          </h3>
          <p
            className=" text-[14px] leading-[16.94px] font-normal   xl:text-[12.76px] xl:leading-[21.06px] xl:font-normal   2xl:text-[17.02px] 
          2xl:leading-[28.08px] 2xl:font-normal py-2 xl:py-3 2xl:py-3  "
          >
            Ventura Iconica, Level 3, Holding 37, Road No. 11, Block H, Bir
            Uttam Khademul Bashar Road, Banani C/A, Dhaka 1213, Bangladesh
          </p>
        </div>
        <div>
          <div className="flex items-center gap-[9.22px] xl:gap-[18px] 2xl:gap-[24px]">
            <img
              className="w-[15.36px] h-[15.36px] xl:w-[30px] xl:h-[30px] 2xl:w-[40px] 2xl:h-[40px]"
              src={img1}
              alt=""
            />
            <img
              className="w-[15.36px] h-[15.36px] xl:w-[30px] xl:h-[30px] 2xl:w-[40px] 2xl:h-[40px]"
              src={img2}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
