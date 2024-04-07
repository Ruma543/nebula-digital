import React from 'react';
import SectionTitle from '../../../../Component/Shared/SectionTitle/SectionTitle';

const OurClient = () => {
  return (
    <div className="px-[20px]  xl:px-[54px] 2xl:px-[72px] mb-[96px] xl:mb-[120px] 2xl:mb-[160px]  ">
      <SectionTitle title="Our Client"></SectionTitle>

      <div className="mt-[24px] xl:mt-[30px] 2xl:mt-[40px] grid grid-cols-1 xl:grid-cols-3 2xl:grid-cols-3 gap-4  xl:gap-[54px] 2xl:gap-[72px] ">
        {/* card 1 */}
        <div className="sm:w-[390px] sm:h-[181px] xl:w-[371px] xl:h-[182px] 2xl:w-[495px] 2xl:h-[243px] p-4 flex gap-[16px]  xl:gap-[20.87px] 2xl:gap-[27.16px] ">
          <h2 className="text-[#00B2FF] text-[20px] xl:text-[27px] 2xl:text-[36px] ">
            01
          </h2>
          <div>
            <h2 className="text-[#091F5B] sm:text-[20px] sm:leading-[33.6px] font-semibold xl:text-[22.5px] xl:leading-[31.5px] xl:font-semibold 2xl:text-[30px] 2xl:leading-[42px] 2xl:font-semibold sm:mb-[8px] xl:mb-[10.5px] 2xl:mb-[12px]">
              Enterprises
            </h2>
            <p className=" sm:text-[14px] sm:leading-[20px] sm:font-light xl:text-[13.5px] xl:leading-[23.63px] xl:font-light 2xl:text-[18px] 2xl:leading-[31.5px] 2xl:font-normal text-[#091F5B] 2xl:w-[422px] 2xl:h-[189px]">
              We deliver comprehensive digital transformation solutions. Through
              rigorous assessments and industry benchmarking, we pinpoint gaps
              and opportunities for growth. We then provide tailored platform
              and data solutions to bridge these gaps and empower you for future
              success.
            </p>
          </div>
        </div>
        {/* card-2 */}
        <div className="sm:w-[390px] sm:h-[181px] xl:w-[371px] xl:h-[182px] 2xl:w-[495px] 2xl:h-[243px] p-4 flex gap-[16px]  xl:gap-[20.87px] 2xl:gap-[27.16px] ">
          <h2 className="text-[#00B2FF] text-[20px] xl:text-[27px] 2xl:text-[36px] ">
            02
          </h2>
          <div>
            <h2 className="text-[#091F5B] sm:text-[20px] sm:leading-[33.6px] font-semibold xl:text-[22.5px] xl:leading-[31.5px] xl:font-semibold 2xl:text-[30px] 2xl:leading-[42px] 2xl:font-semibold sm:mb-[8px] xl:mb-[10.5px] 2xl:mb-[12px]">
              Government
            </h2>
            <p className=" sm:text-[14px] sm:leading-[20px] sm:font-light xl:text-[13.5px] xl:leading-[23.63px] xl:font-light 2xl:text-[18px] 2xl:leading-[31.5px] 2xl:font-normal text-[#091F5B]">
              We provide secure, government-grade technology platforms and
              tailored data solutions for smart Bangladesh, integrating advanced
              cyber security, analytics, AI, and blockchain technologies to
              ensure digital resilience and innovation.
            </p>
          </div>
        </div>
        {/* card 3 */}
        <div className="sm:w-[390px] sm:h-[181px] xl:w-[371px] xl:h-[182px] 2xl:w-[495px] 2xl:h-[243px] p-4 flex gap-[16px]  xl:gap-[20.87px] 2xl:gap-[27.16px] ">
          <h2 className="text-[#00B2FF] text-[20px] xl:text-[27px] 2xl:text-[36px] ">
            03
          </h2>
          <div>
            <h2 className="text-[#091F5B] sm:text-[20px] sm:leading-[33.6px] font-semibold xl:text-[22.5px] xl:leading-[31.5px] xl:font-semibold 2xl:text-[30px] 2xl:leading-[42px] 2xl:font-semibold sm:mb-[8px] xl:mb-[10.5px] 2xl:mb-[12px]">
              Development Partner
            </h2>
            <p className=" sm:text-[14px] sm:leading-[20px] sm:font-light xl:text-[13.5px] xl:leading-[23.63px] xl:font-light 2xl:text-[18px] 2xl:leading-[31.5px] 2xl:font-normal text-[#091F5B]">
              We deliver a Data-Driven Approach to Development. A comprehensive
              strategy for digital transformation within the development sector.
              Our strategy prioritizes ESG, diversity, female empowerment, and
              youth engagement for a holistic impact.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurClient;
