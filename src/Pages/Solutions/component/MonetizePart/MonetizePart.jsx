import React from 'react';
import SectionTitle from '../../../../Component/Shared/SectionTitle/SectionTitle';
import icon1 from '../../../../../public/Vector (3).png';
import icon2 from '../../../../../public/partition--repartition 1.png';
import icon3 from '../../../../../public/scatter-matrix 1.png';
import arrow from '../../../../../public/Line 1.png';
import line from '../../../../../public/Line 2.png';
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
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-[38px] 2xl:gap-[51px]">
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
              <div className="flex justify-evenly items-center mb-[16px] 1xs:mb-[16px] sm:mb-[16px] lg:mb-[18px] 2xl:mb-[24px]">
                {' '}
                <div className=" h-64 relative ">
                  <span className=" absolute bottom-0">
                    <img className=" h-10" src={line} alt="" />
                  </span>{' '}
                  <span className="-rotate-90 text-[10px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    Value realized
                  </span>{' '}
                  <span className="rotate-90  top-0">
                    <img className=" h-10" src={arrow} alt="" />
                  </span>{' '}
                </div>
                <div className="grid grid-cols-2 gap-[9px] 1xs:gap-[9px] sm:gap-[9px] lg:gap-[12px] 2xl:gap-4 mb-[16px]">
                  <div
                    className="px-[12px] py-[27px] 1xs:px-[12px] 1xs:py-[27px] sm:px-[12px] sm:py-[27px] lg:px-[14px] lg:py-[35px] 2xl:px-[17px] 2xl:py-[46px] "
                    style={{
                      backgroundImage:
                        'linear-gradient(48deg, rgba(0, 178, 255, 1) 10% ,rgba(0, 87, 255, 1) 90% )',
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
                  <div
                    className="px-[12px] py-[27px] 1xs:px-[12px] 1xs:py-[27px] sm:px-[12px] sm:py-[27px] lg:px-[14px] lg:py-[35px] 2xl:px-[17px] 2xl:py-[46px] "
                    style={{
                      backgroundImage:
                        'linear-gradient(48deg, rgba(0, 178, 255, 1) 10% ,rgba(0, 87, 255, 1) 90% )',
                    }}
                  >
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
                  <div
                    className="px-[12px] py-[27px] 1xs:px-[12px] 1xs:py-[27px] sm:px-[12px] sm:py-[27px] lg:px-[14px] lg:py-[35px] 2xl:px-[17px] 2xl:py-[46px]"
                    style={{
                      backgroundImage:
                        'linear-gradient(48deg, rgba(0, 178, 255, 1) 10% ,rgba(0, 87, 255, 1) 90% )',
                    }}
                  >
                    <div className="flex flex-col justify-center items-center">
                      <h3 className="font-bold tracking-[-0.03em] text-[#FFFFFF] text-[12px] leading-[14px] 1xs:text-[12px] 1xs:leading-[14px] sm:text-[12px] sm:leading-[14px] lg:text-[15px] lg:leading-[18px] 2xl:text-[20px] 2xl:leading-[24.2px]">
                        Ad Hoc
                      </h3>
                      <p className="text-center font-medium tracking-[-0.03em] text-[#FFFFFF] text-[8px] leading-[9px] 1xs:text-[8px] 1xs:leading-[9px] sm:text-[8px] sm:leading-[9px] lg:text-[9px] lg:leading-[11px] 2xl:text-[12px] 2xl:leading-[15px]">
                        Target: Driven by competitive <br /> landscape
                      </p>
                    </div>
                  </div>
                  <div
                    className="px-[12px] py-[27px] 1xs:px-[12px] 1xs:py-[27px] sm:px-[12px] sm:py-[27px] lg:px-[14px] lg:py-[35px] 2xl:px-[17px] 2xl:py-[46px] "
                    style={{
                      backgroundImage:
                        'linear-gradient(48deg, rgba(0, 178, 255, 1) 10% ,rgba(0, 87, 255, 1) 90% )',
                    }}
                  >
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
              <h3 className="font-normal text-[#091F5B] text-[16px] leading-[19.36px]  1xs:text-[16px] 1xs:leading-[19.36px] sm:text-[16px] sm:leading-[19.36px] lg:text-[18px] lg:leading-[22.5px] 2xl:text-[24px] 2xl:leading-[30px] mb-[16px] 1xs:mb-[16px] sm:mb-[16px] lg:mb-[18px] 2xl:mb-[24px] ">
                Leverage your data assets to gain valuable insights and drive
                strategic decisions with our advanced analytics expertise,
                empowering your business to thrive in today's competitive
                landscape.
              </h3>
              <h3 className="font-normal text-[#091F5B] text-[16px] leading-[19.36px]  1xs:text-[16px] 1xs:leading-[19.36px] sm:text-[16px] sm:leading-[19.36px] lg:text-[18px] lg:leading-[22.5px] 2xl:text-[24px] 2xl:leading-[30px] mb-[16px] 1xs:mb-[16px] sm:mb-[16px] lg:mb-[18px] 2xl:mb-[24px] ">
                Utilize your organization's data assets to gain valuable
                insights and make strategic decisions confidently with our
                advanced analytics expertise. We specialize in simplifying
                complex data processes, empowering your business to not just
                survive but flourish in today's competitive landscape.
              </h3>
              <h3 className="font-normal text-[#091F5B] text-[16px] leading-[19.36px]  1xs:text-[16px] 1xs:leading-[19.36px] sm:text-[16px] sm:leading-[19.36px] lg:text-[18px] lg:leading-[22.5px] 2xl:text-[24px] 2xl:leading-[30px] mb-[16px] 1xs:mb-[16px] sm:mb-[16px] lg:mb-[18px] 2xl:mb-[24px] ">
                Our focus is on extracting actionable insights from data, making
                it easier for you to make informed decisions that drive your
                organization forward.
              </h3>
              <h3 className="font-normal text-[#091F5B] text-[16px] leading-[19.36px]  1xs:text-[16px] 1xs:leading-[19.36px] sm:text-[16px] sm:leading-[19.36px] lg:text-[18px] lg:leading-[22.5px] 2xl:text-[24px] 2xl:leading-[30px] mb-[16px] 1xs:mb-[16px] sm:mb-[16px] lg:mb-[18px] 2xl:mb-[24px] ">
                We can guide you in using data-driven strategies to stay ahead
                of the competition, seize growth opportunities, and achieve
                success in a rapidly changing market environment.
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
              <h3 className="font-normal text-[#091F5B] text-[16px] leading-[19.36px]  1xs:text-[16px] 1xs:leading-[19.36px] sm:text-[16px] sm:leading-[19.36px] lg:text-[18px] lg:leading-[22.5px] 2xl:text-[24px] 2xl:leading-[30px] mb-[16px] 1xs:mb-[16px] sm:mb-[16px] lg:mb-[18px] 2xl:mb-[24px] ">
                (a) Our AI assistant solutions uses large language model (LLM)
                to answer natural language query about an enterprise business
                offering using enterprise specific data.
              </h3>
              <h3 className="font-normal text-[#091F5B] text-[16px] leading-[19.36px]  1xs:text-[16px] 1xs:leading-[19.36px] sm:text-[16px] sm:leading-[19.36px] lg:text-[18px] lg:leading-[22.5px] 2xl:text-[24px] 2xl:leading-[30px] mb-[16px] 1xs:mb-[16px] sm:mb-[16px] lg:mb-[18px] 2xl:mb-[24px] ">
                (b) Our deep machine learning algorithm expertise allows us to
                build ML model that can measurably contribute in improving your
                business outcomes.
              </h3>
              <h3 className="font-normal text-[#091F5B] text-[16px] leading-[19.36px]  1xs:text-[16px] 1xs:leading-[19.36px] sm:text-[16px] sm:leading-[19.36px] lg:text-[18px] lg:leading-[22.5px] 2xl:text-[24px] 2xl:leading-[30px] mb-[16px] 1xs:mb-[16px] sm:mb-[16px] lg:mb-[18px] 2xl:mb-[24px] ">
                Our AI assistant solutions leverage large language models (LLMs)
                to effectively respond to natural language queries regarding an
                enterprise's business offerings. By integrating
                enterprise-specific data, we ensure that our responses are
                customized to suit the unique needs of each organization.
              </h3>
              <h3 className="font-normal text-[#091F5B] text-[16px] leading-[19.36px]  1xs:text-[16px] 1xs:leading-[19.36px] sm:text-[16px] sm:leading-[19.36px] lg:text-[18px] lg:leading-[22.5px] 2xl:text-[24px] 2xl:leading-[30px] mb-[16px] 1xs:mb-[16px] sm:mb-[16px] lg:mb-[18px] 2xl:mb-[24px] ">
                Our extensive knowledge in machine learning algorithms allows us
                to create ML models that make a tangible difference in improving
                your business outcomes. With a dedicated focus on utilizing
                cutting-edge technologies, our aim is to offer innovative
                solutions that simplify operations and foster success throughout
                your organization.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonetizePart;
