import React from 'react';
import { GoDotFill } from 'react-icons/go';
import frame from '../../../../public/Frame.png';
const SectionTitle = ({ title }) => {
  return (
    <div className="">
      <button
        className="text-[#091F5B] border-[0.8px] 1xs:border-[0.8px] lg:border-[0.75px]  2xl:border-[1px]  border-[#091F5B] 
       rounded-[40px] 1xs:rounded-[40px] lg:rounded-[23.25px] 2xl:rounded-[31px] text-[12px] 1xs:text-[12px] lg:text-[12px] 2xl:text-[16px] font-semibold flex justify-center items-center  leading-[15.84px] 1xs:leading-[15.84px] lg:leading-[15.84px] 2xl:leading-[21.12px] py-2 px-3 gap-[6.4px] 1xs:py-2 1xs:px-3 1xs:gap-[6.4px] lg:gap-[6.9px] 2xl:gap-[8.67px] h-[32px] 1xs:h-[32px] lg:h-[27px] 2xl:h-[36px]"
      >
        <span>
          <img
            className="h-[6px] w-[6px] lg:h-[6px] lg:w-[6px] 2xl:h-2 2xl:w-2"
            src={frame}
            alt=""
          />
          {/* <GoDotFill /> */}
        </span>
        <span> {title}</span>
      </button>
    </div>
  );
};

export default SectionTitle;
