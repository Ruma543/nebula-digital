import React from 'react';
import SectionTitle from '../../../../Component/Shared/SectionTitle/SectionTitle';
import icon1 from '../../../../../public/Vector (3).png';
import icon2 from '../../../../../public/partition--repartition 1.png';
import icon3 from '../../../../../public/scatter-matrix 1.png';
import arrow from '../../../../../public/Line 1.png';
import line from '../../../../../public/Line 2.png';
import card from '../../../../../public/Group 1171276008 (1).png';
const MonetizePart = () => {
  return (
    <div className="mb-[64px] 1xs:mb-[64px] sm:mb-[64px] lg:mb-[36px] 2xl:mb-[48px]  bg-[#FFFFFF] rounded-[24px] 1xs:rounded-[24px] sm:rounded-[24px] lg:rounded-[36px] 2xl:rounded-[48px]">
      <div className=" py-[40px] px-[16px] 1xs:py-[40px] 1xs:px-[16px] sm:py-[40px] sm:px-[16px] lg:py-[72px] lg:px-[48px] 2xl:py-[96px] 2xl:px-[64px]">
        <div className="mb-[30px] 1xs:mb-[30px] sm:mb-[30px] lg:mb-[30px] 2xl:mb-[40px] flex justify-center lg:justify-start items-center gap-[16px] ">
          <SectionTitle title="Our Solutions"></SectionTitle>
          <SectionTitle title="Data Monetization"></SectionTitle>
        </div>
        <div className="mb-[24px] 1xs:mb-[24px] sm:mb-[24px] lg:mb-[18px] 2xl:mb-[24px]">
          <h2 className="text-[36px] leading-[43px] 1xs:text-[36px] 1xs:leading-[43px] sm:text-[36px] sm:leading-[43px] md:text-[50px] md:leading-[60px] lg:text-[60px] lg:leading-[67.5px] 2xl:text-[80px] 2xl:leading-[90px] tracking-[-0.03em] font-normal text-[#091F5B]">
            Monetize data, <br className=" md:hidden" /> unlock insights,
            <br className=" md:hidden" />
            <br className="hidden  lg:block" />
            <span
              className="bg-gradient-to-r from-[#00b2ff] to-[#0057ff] text-transparent"
              style={{ backgroundClip: 'text' }}
            >
              leverage AI <br className=" md:hidden" />
              capabilities <br className=" md:hidden" /> effectively
            </span>
          </h2>
        </div>
        <div>
          <h3 className="font-normal text-[#091F5B] text-[16px] leading-[19.36px]  1xs:text-[16px] 1xs:leading-[19.36px] sm:text-[16px] sm:leading-[19.36px] lg:text-[18px] lg:leading-[22.5px] 2xl:text-[24px] 2xl:leading-[30px] mb-16 ">
            Unlock actionable insights and discover data monetization use cases
            that drive <br className="hidden lg:block" /> revenue growth or
            operational efficiency.
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 1xs:gap-10 sm:gap-10 lg:gap-[20px] 2xl:gap-[51px]">
            {/* lg:gap-[38px] 2xl:gap-[51px] */}
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
              <h3 className="w-full font-normal text-[#091F5B] text-[16px] leading-[19.36px]  1xs:text-[16px] 1xs:leading-[19.36px] sm:text-[16px] sm:leading-[19.36px] lg:text-[18px] lg:leading-[20px] 2xl:text-[22px] 2xl:leading-[30px] mb-[16px] 1xs:mb-[16px] sm:mb-[16px] lg:mb-[18px] 2xl:mb-[24px] ">
                Finding ways to extract economic value from data is challenging.
                We closely work with our client to execute two parallel
                approaches of finding data monetization use case.
              </h3>
              <h3 className="w-full font-normal text-[#091F5B] text-[16px] leading-[19.36px]  1xs:text-[16px] 1xs:leading-[19.36px] sm:text-[16px] sm:leading-[19.36px] lg:text-[18px] lg:leading-[20px] 2xl:text-[22px] 2xl:leading-[30px] mb-[16px] 1xs:mb-[16px] sm:mb-[16px] lg:mb-[18px] 2xl:mb-[24px] ">
                (a) We examine existing data exploratively to identify unknow
                patterns or insights that serve innovation or a general business
                objective. 
              </h3>
              <h3 className="w-full font-normal text-[#091F5B] text-[16px] leading-[19.36px]  1xs:text-[16px] 1xs:leading-[19.36px] sm:text-[16px] sm:leading-[19.36px] lg:text-[18px] lg:leading-[20px] 2xl:text-[22px] 2xl:leading-[30px] mb-[16px] 1xs:mb-[16px] sm:mb-[16px] lg:mb-[18px] 2xl:mb-[24px] ">
                (b) We start with a pre-defined use case that comes as an
                ambition from business domain experts. We then do a gap analysis
                to understand what data and analytics needs to be created to
                support such use cases.
              </h3>
              <div className="mb-[16px] 1xs:mb-[16px] sm:mb-[16px] lg:mb-[18px] 2xl:mb-[24px] sm:pr-[78px] lg:pr-[30px] xl:pr-[36px] 2xl:pr-[49px]">
                <img src={card} alt="" />
              </div>

              <h3 className="w-full font-normal text-[#091F5B] text-[16px] leading-[19.36px]  1xs:text-[16px] 1xs:leading-[19.36px] sm:text-[16px] sm:leading-[19.36px] lg:text-[18px] lg:leading-[20px] 2xl:text-[22px] 2xl:leading-[30px] mb-[16px] 1xs:mb-[16px] sm:mb-[16px] lg:mb-[18px] 2xl:mb-[24px] ">
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
              <h3 className="w-full font-normal text-[#091F5B] text-[16px] leading-[19.36px]  1xs:text-[16px] 1xs:leading-[19.36px] sm:text-[16px] sm:leading-[19.36px] lg:text-[18px] lg:leading-[20px] 2xl:text-[22px] 2xl:leading-[30px] mb-[16px] 1xs:mb-[16px] sm:mb-[16px] lg:mb-[18px] 2xl:mb-[24px] ">
                Leverage your data assets to gain valuable insights and drive
                strategic decisions with our advanced analytics expertise,
                empowering your business to thrive in today's competitive
                landscape.
              </h3>
              <h3 className="w-full font-normal text-[#091F5B] text-[16px] leading-[19.36px]  1xs:text-[16px] 1xs:leading-[19.36px] sm:text-[16px] sm:leading-[19.36px] lg:text-[18px] lg:leading-[20px] 2xl:text-[22px] 2xl:leading-[30px] mb-[16px] 1xs:mb-[16px] sm:mb-[16px] lg:mb-[18px] 2xl:mb-[24px] ">
                Utilize your organization's data assets to gain valuable
                insights and make strategic decisions confidently with our
                advanced analytics expertise. We specialize in simplifying
                complex data processes, empowering your business to not just
                survive but flourish in today's competitive landscape.
              </h3>
              <h3 className="w-full font-normal text-[#091F5B] text-[16px] leading-[19.36px]  1xs:text-[16px] 1xs:leading-[19.36px] sm:text-[16px] sm:leading-[19.36px] lg:text-[18px] lg:leading-[20px] 2xl:text-[22px] 2xl:leading-[30px] mb-[16px] 1xs:mb-[16px] sm:mb-[16px] lg:mb-[18px] 2xl:mb-[24px] ">
                Our focus is on extracting actionable insights from data, making
                it easier for you to make informed decisions that drive your
                organization forward.
              </h3>
              <h3 className="w-full font-normal text-[#091F5B] text-[16px] leading-[19.36px]  1xs:text-[16px] 1xs:leading-[19.36px] sm:text-[16px] sm:leading-[19.36px] lg:text-[18px] lg:leading-[20px] 2xl:text-[22px] 2xl:leading-[30px] mb-[16px] 1xs:mb-[16px] sm:mb-[16px] lg:mb-[18px] 2xl:mb-[24px] ">
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
              <h3 className="w-full font-normal text-[#091F5B] text-[16px] leading-[19.36px]  1xs:text-[16px] 1xs:leading-[19.36px] sm:text-[16px] sm:leading-[19.36px] lg:text-[18px] lg:leading-[20px] 2xl:text-[22px] 2xl:leading-[30px] mb-[16px] 1xs:mb-[16px] sm:mb-[16px] lg:mb-[18px] 2xl:mb-[24px] ">
                (a) Our AI assistant solutions uses large language model (LLM)
                to answer natural language query about an enterprise business
                offering using enterprise specific data.
              </h3>
              <h3 className="w-full font-normal text-[#091F5B] text-[16px] leading-[19.36px]  1xs:text-[16px] 1xs:leading-[19.36px] sm:text-[16px] sm:leading-[19.36px] lg:text-[18px] lg:leading-[20px] 2xl:text-[22px] 2xl:leading-[30px] mb-[16px] 1xs:mb-[16px] sm:mb-[16px] lg:mb-[18px] 2xl:mb-[24px] ">
                (b) Our deep machine learning algorithm expertise allows us to
                build ML model that can measurably contribute in improving your
                business outcomes.
              </h3>
              <h3 className="w-full font-normal text-[#091F5B] text-[16px] leading-[19.36px]  1xs:text-[16px] 1xs:leading-[19.36px] sm:text-[16px] sm:leading-[19.36px] lg:text-[18px] lg:leading-[20px] 2xl:text-[22px] 2xl:leading-[30px] mb-[16px] 1xs:mb-[16px] sm:mb-[16px] lg:mb-[18px] 2xl:mb-[24px] ">
                Our AI assistant solutions leverage large language models (LLMs)
                to effectively respond to natural language queries regarding an
                enterprise's business offerings. By integrating
                enterprise-specific data, we ensure that our responses are
                customized to suit the unique needs of each organization.
              </h3>
              <h3 className="w-full font-normal text-[#091F5B] text-[16px] leading-[19.36px]  1xs:text-[16px] 1xs:leading-[19.36px] sm:text-[16px] sm:leading-[19.36px] lg:text-[18px] lg:leading-[20px] 2xl:text-[22px] 2xl:leading-[30px] mb-[16px] 1xs:mb-[16px] sm:mb-[16px] lg:mb-[18px] 2xl:mb-[24px] ">
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
