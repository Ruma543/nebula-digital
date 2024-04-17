import React from 'react';
import SectionTitle from '../../../../Component/Shared/SectionTitle/SectionTitle';
import icon1 from '../../../../../public/Vector (3).png';
import icon2 from '../../../../../public/partition--repartition 1.png';
import icon3 from '../../../../../public/scatter-matrix 1.png';
const MonetizePart = () => {
  return (
    <div className="mb-[64px] 1xs:mb-[64px] sm:mb-[64px] lg:mb-[36px] 2xl:mb-[48px]  bg-[#FFFFFF] rounded-[24px] 1xs:rounded-[24px] sm:rounded-[24px] lg:rounded-[36px] 2xl:rounded-[48px]">
      <div className=" py-[40px] pl-[16px] 1xs:py-[40px] 1xs:pl-[16px] sm:py-[40px] sm:pl-[16px] lg:py-[72px] lg:pl-[48px] 2xl:py-[96px] 2xl:pl-[64px]">
        <div className="mb-[30px] 1xs:mb-[30px] sm:mb-[30px] lg:mb-[30px] 2xl:mb-[40px] flex justify-center lg:justify-start items-center gap-[16px] ">
          <SectionTitle title="Our Solutions"></SectionTitle>
          <SectionTitle title="Data Monetization"></SectionTitle>
        </div>
        <div className="mb-[24px] 1xs:mb-[24px] sm:mb-[24px] lg:mb-[18px] 2xl:mb-[24px]">
          <h2 className="lg:text-[60px] lg:leading-[67.5px] 2xl:text-[80px] 2xl:leading-[90px] tracking-[-0.03em] font-normal text-[#091F5B]">
            Monetize data, unlock insights,
            <br className="hidden lg:block" />
            <span
              className="bg-gradient-to-r from-[#00b2ff] to-[#0057ff] text-transparent"
              style={{ backgroundClip: 'text' }}
            >
              leverage AI capabilities effectively
            </span>
          </h2>
        </div>
        <div>
          <h3 className="font-normal text-[#091F5B] text-[16px] leading-[19.36px]  1xs:text-[16px] 1xs:leading-[19.36px] sm:text-[16px] sm:leading-[19.36px] lg:text-[18px] lg:leading-[22.5px] 2xl:text-[24px] 2xl:leading-[30px] mb-16 ">
            Unlock actionable insights and discover data monetization use cases
            that drive <br className="hidden lg:block" /> revenue growth or
            operational efficiency.
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3">
            {/* 1st-column */}
            <div>
              <img
                className="w-[27px] h-[27px] 1xs:w-[27px] 1xs:h-[27px] sm:w-[27px] sm:h-[27px] lg:w-[30px] lg:h-[30px] 2xl:w-[40px] 2xl:h-[40px] mb-[16px] 1xs:mb-[16px] sm:mb-[16px] lg:mb-[18px] 2xl:mb-[24px]"
                src={icon1}
                alt=""
              />
              <h3 className="font-bold text-[#091F5B] text-[16px] leading-[19px] 1xs:text-[18px] 1xs:leading-[22.5px] sm:text-[18px] sm:leading-[22.5px]  lg:text-[18px] lg:leading-[22.5px] 2xl:text-[24px] 2xl:leading-[30px] mb-[16px] 1xs:mb-[16px] sm:mb-[16px] lg:mb-[18px] 2xl:mb-[24px]">
                Discover Data Monetization
              </h3>
              <h3 className="font-normal text-[#091F5B] text-[16px] leading-[19.36px]  1xs:text-[16px] 1xs:leading-[19.36px] sm:text-[16px] sm:leading-[19.36px] lg:text-[18px] lg:leading-[22.5px] 2xl:text-[24px] 2xl:leading-[30px] mb-[16px] 1xs:mb-[16px] sm:mb-[16px] lg:mb-[18px] 2xl:mb-[24px] ">
                Finding ways to extract economic value from data is challenging.
                We closely work with our client to execute two parallel
                approaches of finding data monetization use case.
              </h3>
              <h3 className="font-normal text-[#091F5B] text-[16px] leading-[19.36px]  1xs:text-[16px] 1xs:leading-[19.36px] sm:text-[16px] sm:leading-[19.36px] lg:text-[18px] lg:leading-[22.5px] 2xl:text-[24px] 2xl:leading-[30px] mb-[16px] 1xs:mb-[16px] sm:mb-[16px] lg:mb-[18px] 2xl:mb-[24px] ">
                (a) We examine existing data exploratively to identify unknow
                patterns or insights that serve innovation or a general business
                objective. 
              </h3>
              <h3 className="font-normal text-[#091F5B] text-[16px] leading-[19.36px]  1xs:text-[16px] 1xs:leading-[19.36px] sm:text-[16px] sm:leading-[19.36px] lg:text-[18px] lg:leading-[22.5px] 2xl:text-[24px] 2xl:leading-[30px] mb-[16px] 1xs:mb-[16px] sm:mb-[16px] lg:mb-[18px] 2xl:mb-[24px] ">
                (b) We start with a pre-defined use case that comes as an
                ambition from business domain experts. We then do a gap analysis
                to understand what data and analytics needs to be created to
                support such use cases.
              </h3>
              <div className="flex justify-center items-center">
                {' '}
                <h3 className="-rotate-90">Value realized</h3>
                <div className="grid grid-cols-2 gap-[9px] 1xs:gap-[9px] sm:gap-[9px] lg:gap-[12px] 2xl:gap-4 mb-[16px]">
                  <div
                    className="px-[12px] py-[27px] 1xs:px-[12px] 1xs:py-[27px] sm:px-[12px] sm:py-[27px] lg:px-[14px] lg:py-[35px] 2xl:px-[17px] 2xl:py-[46px] "
                    // bg-gradient-to-r from-[#00b2ff] to-[#0057ff]
                    style={{
                      background:
                        'linear-gradient(90deg, rgba(0,87,255,1) 20%, rgba(0,87,255,1) 80%)',
                    }}
                  >
                    <div className="flex flex-col justify-center items-center">
                      <h3 className="font-bold tracking-[-0.03em] text-[#FFFFFF] text-[12px] leading-[14px] 1xs:text-[12px] 1xs:leading-[14px] sm:text-[12px] sm:leading-[14px] lg:text-[15px] lg:leading-[18px] 2xl:text-[20px] 2xl:leading-[24.2px]">
                        Quick wins
                      </h3>
                      <p className="text-center font-medium tracking-[-0.03em] text-[#FFFFFF] text-[8px] leading-[9px] 1xs:text-[8px] 1xs:leading-[9px] sm:text-[8px] sm:leading-[9px] lg:text-[9px] lg:leading-[11px] 2xl:text-[12px] 2xl:leading-[15px]">
                        Target: Y1 product <br /> development
                      </p>
                    </div>
                  </div>
                  <div className="px-[12px] py-[27px] 1xs:px-[12px] 1xs:py-[27px] sm:px-[12px] sm:py-[27px] lg:px-[14px] lg:py-[35px] 2xl:px-[17px] 2xl:py-[46px] bg-gradient-to-r from-[#00b2ff] to-[#0057ff]">
                    <div className="flex flex-col justify-center items-center">
                      {' '}
                      <h3 className="font-bold tracking-[-0.03em] text-[#FFFFFF] text-[12px] leading-[14px] 1xs:text-[12px] 1xs:leading-[14px] sm:text-[12px] sm:leading-[14px] lg:text-[15px] lg:leading-[18px] 2xl:text-[20px] 2xl:leading-[24.2px]">
                        Differentiators
                      </h3>
                      <p className="text-center font-medium tracking-[-0.03em] text-[#FFFFFF] text-[8px] leading-[9px] 1xs:text-[8px] 1xs:leading-[9px] sm:text-[8px] sm:leading-[9px] lg:text-[9px] lg:leading-[11px] 2xl:text-[12px] 2xl:leading-[15px]">
                        Target: Year 2+ to drive <br /> platform value and
                        innovation
                      </p>
                    </div>
                  </div>
                  <div className="px-[12px] py-[27px] 1xs:px-[12px] 1xs:py-[27px] sm:px-[12px] sm:py-[27px] lg:px-[14px] lg:py-[35px] 2xl:px-[17px] 2xl:py-[46px] bg-gradient-to-r from-[#00b2ff] to-[#0057ff]">
                    <div className="flex flex-col justify-center items-center">
                      <h3 className="font-bold tracking-[-0.03em] text-[#FFFFFF] text-[12px] leading-[14px] 1xs:text-[12px] 1xs:leading-[14px] sm:text-[12px] sm:leading-[14px] lg:text-[15px] lg:leading-[18px] 2xl:text-[20px] 2xl:leading-[24.2px]">
                        Ad Hoc
                      </h3>
                      <p className="text-center font-medium tracking-[-0.03em] text-[#FFFFFF] text-[8px] leading-[9px] 1xs:text-[8px] 1xs:leading-[9px] sm:text-[8px] sm:leading-[9px] lg:text-[9px] lg:leading-[11px] 2xl:text-[12px] 2xl:leading-[15px]">
                        Target: Driven by competitive <br /> landscape
                      </p>
                    </div>
                  </div>
                  <div className="px-[12px] py-[27px] 1xs:px-[12px] 1xs:py-[27px] sm:px-[12px] sm:py-[27px] lg:px-[14px] lg:py-[35px] 2xl:px-[17px] 2xl:py-[46px] bg-gradient-to-r from-[#00b2ff] to-[#0057ff]">
                    <div className="flex flex-col justify-center items-center">
                      {' '}
                      <h3 className="font-bold tracking-[-0.03em] text-[#FFFFFF] text-[12px] leading-[14px] 1xs:text-[12px] 1xs:leading-[14px] sm:text-[12px] sm:leading-[14px] lg:text-[15px] lg:leading-[18px] 2xl:text-[20px] 2xl:leading-[24.2px]">
                        Deprioritize
                      </h3>
                      <p className="text-center font-medium tracking-[-0.03em] text-[#FFFFFF] text-[8px] leading-[9px] 1xs:text-[8px] 1xs:leading-[9px] sm:text-[8px] sm:leading-[9px] lg:text-[9px] lg:leading-[11px] 2xl:text-[12px] 2xl:leading-[15px]">
                        High Effort Low value features
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="font-normal text-[#091F5B] text-[16px] leading-[19.36px]  1xs:text-[16px] 1xs:leading-[19.36px] sm:text-[16px] sm:leading-[19.36px] lg:text-[18px] lg:leading-[22.5px] 2xl:text-[24px] 2xl:leading-[30px] mb-[16px] 1xs:mb-[16px] sm:mb-[16px] lg:mb-[18px] 2xl:mb-[24px] ">
                Outcome of this agile experimentation process is a list of use
                cases that can generate value form data and map those use cases
                in a value/effort matrix. Some use cases need to be prioritized
                for experimentation. An evaluation process validates the
                assumptions of the use case.{' '}
              </h3>
            </div>
            {/* 2nd-column */}
            <div>
              <img
                className="w-[27px] h-[27px] 1xs:w-[27px] 1xs:h-[27px] sm:w-[27px] sm:h-[27px] lg:w-[27px] lg:h-[27px] 2xl:w-[36px] 2xl:h-[36px] mb-[16px] 1xs:mb-[16px] sm:mb-[16px] lg:mb-[18px] 2xl:mb-[24px]"
                src={icon2}
                alt=""
              />
              <h3 className="font-bold text-[#091F5B] text-[16px] leading-[19px] 1xs:text-[18px] 1xs:leading-[22.5px] sm:text-[18px] sm:leading-[22.5px]  lg:text-[18px] lg:leading-[22.5px] 2xl:text-[24px] 2xl:leading-[30px] mb-[16px] 1xs:mb-[16px] sm:mb-[16px] lg:mb-[18px] 2xl:mb-[24px]">
                Unlock Actionable Insights
              </h3>
            </div>
            {/* 3rd-column */}
            <div>
              <img
                className="w-[27px] h-[27px] 1xs:w-[27px] 1xs:h-[27px] sm:w-[27px] sm:h-[27px] lg:w-[27px] lg:h-[27px] 2xl:w-[36px] 2xl:h-[36px] mb-[16px] 1xs:mb-[16px] sm:mb-[16px] lg:mb-[18px] 2xl:mb-[24px]"
                src={icon3}
                alt=""
              />
              <h3 className="font-bold text-[#091F5B] text-[16px] leading-[19px] 1xs:text-[18px] 1xs:leading-[22.5px] sm:text-[18px] sm:leading-[22.5px]  lg:text-[18px] lg:leading-[22.5px] 2xl:text-[24px] 2xl:leading-[30px] mb-[16px] 1xs:mb-[16px] sm:mb-[16px] lg:mb-[18px] 2xl:mb-[24px]">
                AI Agents
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonetizePart;
