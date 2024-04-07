import React from 'react';
import { GoDotFill } from 'react-icons/go';

const SectionTitle = ({ title }) => {
  return (
    <div className="">
      <button className="text-[#091F5B] px-4 py-2 border-2 border-blue-500 rounded-2xl text-xs xl:text-xs 2xl:text-base flex justify-center items-center gap-2 lining-[15.84px] xl:lining-[15.84px] 2xl:lining-[21.12px] font-semibold">
        <span>
          <GoDotFill className="h-[5px] w-[5px] xl:h-[6px] xl:w-[6px] 2xl:h-2 2xl:w-2" />
        </span>
        <span> {title}</span>
      </button>
    </div>
  );
};

export default SectionTitle;
