import React from 'react';

const SlideCard = ({ data }) => {
  const { id, value, color, button, description, textColor } = data || {};
  return (
    <div
      // w-[390px] h-[389px] rounded-[24px] for small device
      className=" h-[389px] rounded-[24px] xl:h-[370px] xl:rounded-[22.5px]  2xl:h-[486px] 2xl:rounded-[30px]  text-white border-2 border-white mr-4 pl-[20px] pt-[20px] pr-[40px] pb-[32px] xl:px-[18px] xl:pt-[18px] xl:pb-[20px] 2xl:px-[24px] 2xl:pt-[18px] 2xl:pb-[16.5px]"
      style={{ backgroundColor: color, color: textColor }}
      key={id}
    >
      <div className=" h-[337px] 1xs:h-[337px] sm:h-[337px] md:h-[330px] xl:h-[330px]  2xl:h-[440px] flex flex-col justify-between">
        <div className="w-full h-[62.4px] xl:w-full xl:h-[58.5px] 2xl:w-full 2xl:h-[78px] flex  justify-between items-center gap-[55.6px] xl:gap-[8px] ">
          {/* mb-[208.6px] xl:mb-[184.5px] 2xl:mb-[248px] */}
          <h3 className="text-[20px] leading-[24px] font-semibold xl:text-[22.5px] xl:leading-[22.5px] xl:font-semibold 2xl:text-[25px] 2xl:leading-[25px] 2xl:font-semibold">
            {value}
          </h3>
          <h3 className="sm:text-[28.8px] sm:leading-[34.85px] sm:font-normal xl:text-[27px] xl:leading-[32.64px] xl:font-normal 2xl:text-[36px] 2xl:leading-[43.57px] 2xl:font-normal">
            0{id}
          </h3>
        </div>
        <div className="flex  justify-between items-center w-full  gap-4 ">
          <h6 className="  text-[18px] leading-[21.78px] font-normal xl:text-[18px] xl:leading-[21.78px] xl:font-normal 2xl:text-[24px] 2xl:leading-[29.05px] 2xl:font-normal tracking-[-0.03em] ">
            {/* h-[66px]  xl:h-[87px] 2xl:h-[116px] */}
            {description}
          </h6>
          <img
            className="sm:w-[32px] sm:h-[32px] xl:w-[32.25px] xl:h-[32.25px] 2xl:w-[43px] 2xl:h-[43px]"
            src={button}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default SlideCard;
