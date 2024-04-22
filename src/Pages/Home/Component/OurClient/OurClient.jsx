import React from 'react';
import SectionTitle from '../../../../Component/Shared/SectionTitle/SectionTitle';
import './OurClient.css';
const OurClient = () => {
  return (
    <div className=" font-primary px-[20px]  lg:px-[54px] 2xl:px-[72px] mb-[96px] xl:mb-[120px] 2xl:mb-[160px]  ">
      <SectionTitle title="Our Client"></SectionTitle>

      <div className="mt-[24px] xl:mt-[30px] 2xl:mt-[40px]">
        <div className=" grid grid-cols-1  md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-4 md:gap-[20px] lg:gap-[30px] 2xl:gap-[50px] ">
          {/*gap-4 md:gap-[20px] xl:gap-[54px] 2xl:gap-[72px]  */}
          {/* gap-4  */}
          {/* card 1 */}
          <div className="  flex justify-center items-start  gap-[16px]  xl:gap-[20.87px] 2xl:gap-[27.16px]  ">
            {/* sm:w-[390px] sm:h-[181px] xl:w-[371px] xl:h-[182px] 2xl:w-[495px] 2xl:h-[243px] */}
            <h2
              className=" text-[20px] leading-[24.2px] 1xs:text-[20px] 1xs:leading-[24.2px] lg:text-[27px] lg:leading-[32.68px] 2xl:text-[36px] 2xl:leading-[43.57px] font-medium bg-gradient-to-r from-[#00b2ff] to-[#0057ff] text-transparent"
              style={{ backgroundClip: 'text' }}
            >
              {/* className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent"
              style={{ backgroundClip: 'text' }} */}
              01
            </h2>
            <div>
              <h2 className=" text-[#091F5B] sm:text-[20px] sm:leading-[33.6px] font-semibold xl:text-[22.5px] xl:leading-[31.5px] xl:font-semibold 2xl:text-[30px] 2xl:leading-[42px] 2xl:font-semibold sm:mb-[8px] xl:mb-[10.5px] 2xl:mb-[12px]">
                Enterprises
              </h2>
              <p className=" text-[14px] leading-[20px] 1xs:text-[14px] 1xs:leading-[20px]  lg:text-[12px] lg:leading-[22px] font-normal 2xl:text-[18px] 2xl:leading-[31.5px] 2xl:font-normal text-[#091F5B] 2xl:w-[422px] 2xl:h-[189px]">
                We deliver comprehensive digital transformation solutions.
                Through rigorous assessments and industry benchmarking, we
                pinpoint gaps and opportunities for growth. We then provide
                tailored platform and data solutions to bridge these gaps and
                empower you for future success.
              </p>
            </div>
          </div>
          {/* card-2 */}
          <div className="  flex justify-center items-start gap-[16px]  xl:gap-[20.87px] 2xl:gap-[27.16px]  ">
            {/* sm:w-[390px] sm:h-[181px] xl:w-[371px] xl:h-[182px] 2xl:w-[495px] 2xl:h-[243px] */}
            <h2
              className=" text-[20px] leading-[24.2px] 1xs:text-[20px] 1xs:leading-[24.2px] lg:text-[27px] lg:leading-[32.68px] 2xl:text-[36px] 2xl:leading-[43.57px] font-medium bg-gradient-to-r from-[#00b2ff] to-[#0057ff] text-transparent"
              style={{ backgroundClip: 'text' }}
            >
              02
            </h2>
            <div>
              <h2 className=" text-[#091F5B] sm:text-[20px] sm:leading-[33.6px] font-semibold xl:text-[22.5px] xl:leading-[31.5px] xl:font-semibold 2xl:text-[30px] 2xl:leading-[42px] 2xl:font-semibold sm:mb-[8px] xl:mb-[10.5px] 2xl:mb-[12px]">
                Government
              </h2>
              <p className=" text-[14px] leading-[20px] 1xs:text-[14px] 1xs:leading-[20px]  lg:text-[13.5px] lg:leading-[23.63px] font-normal 2xl:text-[18px] 2xl:leading-[31.5px] 2xl:font-normal text-[#091F5B]">
                We provide secure, government-grade technology platforms and
                tailored data solutions for Smart Bangladesh. Our solutions{' '}
                integrate advanced cybersecurity, analytics, AI, and blockchain
                technologies to ensure digital resilience and innovation.
              </p>
            </div>
          </div>
          {/* card 3 */}
          <div className="  flex justify-center items-start gap-[16px]  xl:gap-[20.87px] 2xl:gap-[27.16px] ">
            {/* sm:w-[390px] sm:h-[181px] xl:w-[371px] xl:h-[182px] 2xl:w-[495px] 2xl:h-[243px] */}
            <h2
              className=" text-[20px] leading-[24.2px] 1xs:text-[20px] 1xs:leading-[24.2px] lg:text-[27px] lg:leading-[32.68px] 2xl:text-[36px] 2xl:leading-[43.57px] font-medium bg-gradient-to-r from-[#00b2ff] to-[#0057ff] text-transparent"
              style={{ backgroundClip: 'text' }}
            >
              03
            </h2>
            <div>
              <h2 className=" text-[#091F5B] sm:text-[20px] sm:leading-[33.6px] font-semibold xl:text-[22.5px] xl:leading-[31.5px] xl:font-semibold 2xl:text-[30px] 2xl:leading-[42px] 2xl:font-semibold sm:mb-[8px] xl:mb-[10.5px] 2xl:mb-[12px]">
                Development Partner
              </h2>
              <p className="w-full text-[14px] leading-[20px] 1xs:text-[14px] 1xs:leading-[20px]  lg:text-[13.5px] lg:leading-[23.63px] font-normal 2xl:text-[18px] 2xl:leading-[31.5px] 2xl:font-normal text-[#091F5B]">
                We deliver a data-driven approach to development, offering a
                comprehensive strategy for digital transformation within the
                development sector. This strategy prioritizes ESG factors,
                diversity, female empowerment, and youth engagement to ensure a
                holistic impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurClient;
