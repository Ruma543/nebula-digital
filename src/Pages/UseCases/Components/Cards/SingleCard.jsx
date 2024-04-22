import React from 'react';
import SectionTitle from '../../../../Component/Shared/SectionTitle/SectionTitle';

const SingleCard = () => {
  // const { title1, title2, firstText, spanText, lastText, text2 } = data || {};
  return (
    <div className="grid grid-cols-1 gap-[64px] lg:gap-[24px] 2xl:gap-[32px] lg:grid-cols-2">
      {/* card 1 */}
      <div className="relative bg-white px-4 pt-10 pb-[70px] 1xs:px-4 1xs:pt-10 1xs:pb-[70px] sm:px-4 sm:pt-10 sm:pb-[70px] lg:px-12 lg:pt-[72px] lg:pb-12  2xl:px-[65px] 2xl:pt-[96px] 2xl:pb-[65px] rounded-[24px] lg:rounded-[22.5px] 2xl:rounded-[30px]">
        <div className="flex items-center justify-center md:justify-start gap-4 1xs:gap-4 sm:gap-4 lg:gap-3 2xl:gap-4 mb-[32px] lg:mb-[30px] 2xl:mb-[40px]">
          <SectionTitle title="Use Cases"></SectionTitle>
          <SectionTitle title="LLM Model"></SectionTitle>
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <div className="mb-[24px] lg:mb-[18px] 2xl:mb-[24px]">
              <h2 className=" text-[36px] leading-[43px] 1xs:text-[36px] 1xs:leading-[43px] sm:text-[36px] sm:leading-[43px] md:text-[50px] md:leading-[60px] lg:text-[50px] lg:leading-[57.5px] xl:text-[55px] xl:leading-[62.5px] 2xl:text-[75px] 2xl:leading-[80px] tracking-[-0.03em] font-normal text-[#091F5B]">
                AI assistant using{' '}
                <span
                  className="bg-gradient-to-r from-[#00b2ff] to-[#0057ff] text-transparent"
                  style={{ backgroundClip: 'text' }}
                >
                  LLM model for a
                </span>{' '}
                Fortune 500 company
              </h2>
            </div>
            <div className="mb-[32px] 1xs:mb-[32px] sm:mb-[32px] lg:mb-[97.5px] 2xl:mb-[120px] text-[16px] leading-[19px] 1xs:text-[16px] 1xs:leading-[19px] sm:text-[16px] sm:leading-[19px] lg:text-[18px] lg:leading-[22.5px] 2xl:text-[24px] 2xl:leading-[30px] font-normal text-[#091F5B]">
              {/*  */}
              <h3>
                Fine-tuned a Large Language Model (LLM) using enterprise
                specific data to answer natural language query about an
                enterprise business offering.
              </h3>
            </div>
          </div>
          <div className="absolute bottom-10 lg:bottom-12 2xl:bottom-[65px]">
            <button className=" text-[#FFFFFF] font-normal px-[14px] py-[6.5px] 1xs:px-[14px] 1xs:py-[6.5px] sm:px-[14px] sm:py-[6.5px] lg:px-[21px] lg:py-[7px] 2xl:px-[24px] 2xl:py-[10px] text-[14px] leading-[19px] 1xs:text-[14px] 1xs:leading-[19px] sm:text-[14px] sm:leading-[19px] lg:text-[18px] lg:leading-[23px] 2xl:text-[24px] 2xl:leading-[30px] bg-[#091F5B] rounded-[26.78px]  1xs:rounded-[26.78px] sm:rounded-[26.78px] lg:rounded-[75px] 2xl:rounded-[100px]">
              Learn More
            </button>
          </div>
        </div>
      </div>
      {/* card 2 */}
      <div className="relative bg-white px-4 pt-10 pb-[70px] 1xs:px-4 1xs:pt-10 1xs:pb-[70px] sm:px-4 sm:pt-10 sm:pb-[70px] lg:px-12 lg:pt-[72px] lg:pb-12  2xl:px-[65px] 2xl:pt-[96px] 2xl:pb-[65px] rounded-[24px] lg:rounded-[22.5px] 2xl:rounded-[30px]">
        <div className="flex items-center justify-center md:justify-start gap-4 1xs:gap-4 sm:gap-4 lg:gap-3 2xl:gap-4 mb-[32px] lg:mb-[30px] 2xl:mb-[40px]">
          <SectionTitle title="Use Cases"></SectionTitle>
          <SectionTitle title="Personalized Lea"></SectionTitle>
        </div>
        {/* <div className="flex flex-col justify-between"> */}
        {/* <div> */}
        <div className="mb-[24px] lg:mb-[18px] 2xl:mb-[24px]">
          <h2 className=" text-[36px] leading-[43px] 1xs:text-[36px] 1xs:leading-[43px] sm:text-[36px] sm:leading-[43px] md:text-[50px] md:leading-[60px] lg:text-[50px] lg:leading-[57.5px] xl:text-[55px] xl:leading-[62.5px] 2xl:text-[75px] 2xl:leading-[80px] tracking-[-0.03em] font-normal text-[#091F5B]">
            <span
              className="bg-gradient-to-r from-[#00b2ff] to-[#0057ff] text-transparent"
              style={{ backgroundClip: 'text' }}
            >
              Personalized and adaptive learning
            </span>{' '}
            with AI agent for a Big Tech giant
          </h2>
        </div>
        <div className="mb-[32px] 1xs:mb-[32px] sm:mb-[32px] lg:mb-[97.5px] 2xl:mb-[120px] text-[16px] leading-[19px] 1xs:text-[16px] 1xs:leading-[19px] sm:text-[16px] sm:leading-[19px] lg:text-[18px] lg:leading-[22.5px] 2xl:text-[24px] 2xl:leading-[30px] font-normal text-[#091F5B]">
          {/*  */}
          <h3>
            A Reinforcement learning model that learns adaptive course content
            delivery policy based on learners’ interaction
          </h3>
        </div>
        {/* </div> */}
        <div className="absolute bottom-10 lg:bottom-12 2xl:bottom-[65px]">
          <button className=" text-[#FFFFFF] font-normal px-[14px] py-[6.5px] 1xs:px-[14px] 1xs:py-[6.5px] sm:px-[14px] sm:py-[6.5px] lg:px-[21px] lg:py-[7px] 2xl:px-[24px] 2xl:py-[10px] text-[14px] leading-[19px] 1xs:text-[14px] 1xs:leading-[19px] sm:text-[14px] sm:leading-[19px] lg:text-[18px] lg:leading-[23px] 2xl:text-[24px] 2xl:leading-[30px] bg-[#091F5B] rounded-[26.78px]  1xs:rounded-[26.78px] sm:rounded-[26.78px] lg:rounded-[75px] 2xl:rounded-[100px]">
            Learn More
          </button>
        </div>
        {/* </div> */}
      </div>
      {/* card 3 */}
      <div className="relative bg-white px-4 pt-10 pb-[70px] 1xs:px-4 1xs:pt-10 1xs:pb-[70px] sm:px-4 sm:pt-10 sm:pb-[70px] lg:px-12 lg:pt-[72px] lg:pb-12  2xl:px-[65px] 2xl:pt-[96px] 2xl:pb-[65px] rounded-[24px] lg:rounded-[22.5px] 2xl:rounded-[30px]">
        <div className="flex items-center justify-center md:justify-start gap-4 1xs:gap-4 sm:gap-4 lg:gap-3 2xl:gap-4 mb-[32px] lg:mb-[30px] 2xl:mb-[40px]">
          <SectionTitle title="Use Cases"></SectionTitle>
          <SectionTitle title="MTA Model"></SectionTitle>
        </div>
        {/* <div className="flex flex-col justify-between"> */}
        {/* <div> */}
        <div className="mb-[24px] lg:mb-[18px] 2xl:mb-[24px]">
          <h2 className=" text-[36px] leading-[43px] 1xs:text-[36px] 1xs:leading-[43px] sm:text-[36px] sm:leading-[43px] md:text-[50px] md:leading-[60px] lg:text-[50px] lg:leading-[57.5px] xl:text-[55px] xl:leading-[62.5px] 2xl:text-[75px] 2xl:leading-[80px] tracking-[-0.03em] font-normal text-[#091F5B]">
            <span
              className="bg-gradient-to-r from-[#00b2ff] to-[#0057ff] text-transparent"
              style={{ backgroundClip: 'text' }}
            >
              Multi Touch Attribution (MTA)
            </span>{' '}
            model for a global tech company
          </h2>
        </div>
        <div className="mb-[32px] 1xs:mb-[32px] sm:mb-[32px] lg:mb-[97.5px] 2xl:mb-[120px] text-[16px] leading-[19px] 1xs:text-[16px] 1xs:leading-[19px] sm:text-[16px] sm:leading-[19px] lg:text-[18px] lg:leading-[22.5px] 2xl:text-[24px] 2xl:leading-[30px] font-normal text-[#091F5B]">
          {/*  */}
          <h3>
            The model estimates relative impact of various digital marketing
            channel for each customer signups. MTA scores are used as a metric
            to quickly (e.g. weekly) identify changes in performance and
            optimize campaigns on an ongoing basis.
          </h3>
        </div>
        {/* </div> */}
        <div className="absolute bottom-10 lg:bottom-12 2xl:bottom-[65px]">
          <button className=" text-[#FFFFFF] font-normal px-[14px] py-[6.5px] 1xs:px-[14px] 1xs:py-[6.5px] sm:px-[14px] sm:py-[6.5px] lg:px-[21px] lg:py-[7px] 2xl:px-[24px] 2xl:py-[10px] text-[14px] leading-[19px] 1xs:text-[14px] 1xs:leading-[19px] sm:text-[14px] sm:leading-[19px] lg:text-[18px] lg:leading-[23px] 2xl:text-[24px] 2xl:leading-[30px] bg-[#091F5B] rounded-[26.78px]  1xs:rounded-[26.78px] sm:rounded-[26.78px] lg:rounded-[75px] 2xl:rounded-[100px]">
            Learn More
          </button>
        </div>
        {/* </div> */}
      </div>
      {/* card 4 */}
      <div className="relative bg-white px-4 pt-10 pb-[70px] 1xs:px-4 1xs:pt-10 1xs:pb-[70px] sm:px-4 sm:pt-10 sm:pb-[70px] lg:px-12 lg:pt-[72px] lg:pb-12  2xl:px-[65px] 2xl:pt-[96px] 2xl:pb-[65px] rounded-[24px] lg:rounded-[22.5px] 2xl:rounded-[30px]">
        <div className="flex items-center justify-center md:justify-start gap-4 1xs:gap-4 sm:gap-4 lg:gap-3 2xl:gap-4 mb-[32px] lg:mb-[30px] 2xl:mb-[40px]">
          <SectionTitle title="Use Cases"></SectionTitle>
          <SectionTitle title="Personalized Recommendation"></SectionTitle>
        </div>
        {/* <div className="flex flex-col justify-between"> */}
        {/* <div> */}
        <div className="mb-[24px] lg:mb-[18px] 2xl:mb-[24px]">
          <h2 className=" text-[36px] leading-[43px] 1xs:text-[36px] 1xs:leading-[43px] sm:text-[36px] sm:leading-[43px] md:text-[50px] md:leading-[60px] lg:text-[50px] lg:leading-[57.5px] xl:text-[55px] xl:leading-[62.5px] 2xl:text-[75px] 2xl:leading-[80px] tracking-[-0.03em] font-normal text-[#091F5B]">
            Personalized{' '}
            <span
              className="bg-gradient-to-r from-[#00b2ff] to-[#0057ff] text-transparent"
              style={{ backgroundClip: 'text' }}
            >
              product & service recommendation
            </span>{' '}
            for a cloud company
          </h2>
        </div>
        <div className="mb-[32px] 1xs:mb-[32px] sm:mb-[32px] lg:mb-[97.5px] 2xl:mb-[120px] text-[16px] leading-[19px] 1xs:text-[16px] 1xs:leading-[19px] sm:text-[16px] sm:leading-[19px] lg:text-[18px] lg:leading-[22.5px] 2xl:text-[24px] 2xl:leading-[30px] font-normal text-[#091F5B]">
          {/*  */}
          <h3>
            This ML algorithm analyzes a wide array of customer attributes to
            paint a robust picture of each customer’s preferences. When these
            attributes indicate interest in the target service, the model
            produces a recommendation.
          </h3>
        </div>
        {/* </div> */}
        <div className="absolute bottom-10 lg:bottom-12 2xl:bottom-[65px]">
          <button className=" text-[#FFFFFF] font-normal px-[14px] py-[6.5px] 1xs:px-[14px] 1xs:py-[6.5px] sm:px-[14px] sm:py-[6.5px] lg:px-[21px] lg:py-[7px] 2xl:px-[24px] 2xl:py-[10px] text-[14px] leading-[19px] 1xs:text-[14px] 1xs:leading-[19px] sm:text-[14px] sm:leading-[19px] lg:text-[18px] lg:leading-[23px] 2xl:text-[24px] 2xl:leading-[30px] bg-[#091F5B] rounded-[26.78px]  1xs:rounded-[26.78px] sm:rounded-[26.78px] lg:rounded-[75px] 2xl:rounded-[100px]">
            Learn More
          </button>
        </div>
        {/* </div> */}
      </div>
      {/* card 5 */}
      <div className="relative bg-white px-4 pt-10 pb-[70px] 1xs:px-4 1xs:pt-10 1xs:pb-[70px] sm:px-4 sm:pt-10 sm:pb-[70px] lg:px-12 lg:pt-[72px] lg:pb-12  2xl:px-[65px] 2xl:pt-[96px] 2xl:pb-[65px] rounded-[24px] lg:rounded-[22.5px] 2xl:rounded-[30px]">
        <div className="flex items-center justify-center md:justify-start gap-4 1xs:gap-4 sm:gap-4 lg:gap-3 2xl:gap-4 mb-[32px] lg:mb-[30px] 2xl:mb-[40px]">
          <SectionTitle title="Use Cases"></SectionTitle>
          <SectionTitle title="Lead Scoring Model"></SectionTitle>
        </div>
        {/* <div className="flex flex-col justify-between"> */}
        {/* <div> */}
        <div className="mb-[24px] lg:mb-[18px] 2xl:mb-[24px]">
          <h2 className=" text-[36px] leading-[43px] 1xs:text-[36px] 1xs:leading-[43px] sm:text-[36px] sm:leading-[43px] md:text-[50px] md:leading-[60px] lg:text-[50px] lg:leading-[57.5px] xl:text-[55px] xl:leading-[62.5px] 2xl:text-[75px] 2xl:leading-[80px] tracking-[-0.03em] font-normal text-[#091F5B]">
            <span
              className="bg-gradient-to-r from-[#00b2ff] to-[#0057ff] text-transparent"
              style={{ backgroundClip: 'text' }}
            >
              Lead scoring
            </span>{' '}
            model for global tech company
          </h2>
        </div>
        <div className="mb-[32px] 1xs:mb-[32px] sm:mb-[32px] lg:mb-[97.5px] 2xl:mb-[120px] text-[16px] leading-[19px] 1xs:text-[16px] 1xs:leading-[19px] sm:text-[16px] sm:leading-[19px] lg:text-[18px] lg:leading-[22.5px] 2xl:text-[24px] 2xl:leading-[30px] font-normal text-[#091F5B]">
          {/*  */}
          <h3>
            Lead Scoring model ranks marketing leads based on their probability
            of engagement. The model was deployed for North America, Europe (few
            region) and Middle East region of AWS digital marketing team. For
            email campaigns, this model generated 3-times higher engagement
            (click to open rate) than baseline.
          </h3>
        </div>
        {/* </div> */}
        <div className="absolute bottom-10 lg:bottom-12 2xl:bottom-[65px]">
          <button className=" text-[#FFFFFF] font-normal px-[14px] py-[6.5px] 1xs:px-[14px] 1xs:py-[6.5px] sm:px-[14px] sm:py-[6.5px] lg:px-[21px] lg:py-[7px] 2xl:px-[24px] 2xl:py-[10px] text-[14px] leading-[19px] 1xs:text-[14px] 1xs:leading-[19px] sm:text-[14px] sm:leading-[19px] lg:text-[18px] lg:leading-[23px] 2xl:text-[24px] 2xl:leading-[30px] bg-[#091F5B] rounded-[26.78px]  1xs:rounded-[26.78px] sm:rounded-[26.78px] lg:rounded-[75px] 2xl:rounded-[100px]">
            Learn More
          </button>
        </div>
        {/* </div> */}
      </div>
      {/* card 6 */}
      <div className="relative bg-white px-4 pt-10 pb-[70px] 1xs:px-4 1xs:pt-10 1xs:pb-[70px] sm:px-4 sm:pt-10 sm:pb-[70px] lg:px-12 lg:pt-[72px] lg:pb-12  2xl:px-[65px] 2xl:pt-[96px] 2xl:pb-[65px] rounded-[24px] lg:rounded-[22.5px] 2xl:rounded-[30px]">
        <div className="flex items-center justify-center md:justify-start gap-4 1xs:gap-4 sm:gap-4 lg:gap-3 2xl:gap-4 mb-[32px] lg:mb-[30px] 2xl:mb-[40px]">
          <SectionTitle title="Use Cases"></SectionTitle>
          <SectionTitle title="Churn Management Model"></SectionTitle>
        </div>
        {/* <div className="flex flex-col justify-between"> */}
        {/* <div> */}
        <div className="mb-[24px] lg:mb-[18px] 2xl:mb-[24px]">
          <h2 className=" text-[36px] leading-[43px] 1xs:text-[36px] 1xs:leading-[43px] sm:text-[36px] sm:leading-[43px] md:text-[50px] md:leading-[60px] lg:text-[50px] lg:leading-[57.5px] xl:text-[55px] xl:leading-[62.5px] 2xl:text-[75px] 2xl:leading-[80px] tracking-[-0.03em] font-normal text-[#091F5B]">
            <span
              className="bg-gradient-to-r from-[#00b2ff] to-[#0057ff] text-transparent"
              style={{ backgroundClip: 'text' }}
            >
              Churn management
            </span>{' '}
            model
          </h2>
        </div>
        <div className="mb-[32px] 1xs:mb-[32px] sm:mb-[32px] lg:mb-[97.5px] 2xl:mb-[120px] text-[16px] leading-[19px] 1xs:text-[16px] 1xs:leading-[19px] sm:text-[16px] sm:leading-[19px] lg:text-[18px] lg:leading-[22.5px] 2xl:text-[24px] 2xl:leading-[30px] font-normal text-[#091F5B]">
          {/*  */}
          <h3>
            The model predicts churn probability of customers and recommends
            personalized intervention to retain customer.
          </h3>
        </div>
        {/* </div> */}
        <div className="absolute bottom-10 lg:bottom-12 2xl:bottom-[65px]">
          <button className=" text-[#FFFFFF] font-normal px-[14px] py-[6.5px] 1xs:px-[14px] 1xs:py-[6.5px] sm:px-[14px] sm:py-[6.5px] lg:px-[21px] lg:py-[7px] 2xl:px-[24px] 2xl:py-[10px] text-[14px] leading-[19px] 1xs:text-[14px] 1xs:leading-[19px] sm:text-[14px] sm:leading-[19px] lg:text-[18px] lg:leading-[23px] 2xl:text-[24px] 2xl:leading-[30px] bg-[#091F5B] rounded-[26.78px]  1xs:rounded-[26.78px] sm:rounded-[26.78px] lg:rounded-[75px] 2xl:rounded-[100px]">
            Learn More
          </button>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default SingleCard;
