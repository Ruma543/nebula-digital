import React from 'react';
import img from '../../../../../public/Frame Conduct.png';
import SectionTitle from '../../../../Component/Shared/SectionTitle/SectionTitle';
const ConductPart = () => {
  return (
    <div className="mb-[64px] 1xs:mb-[64px] sm:mb-[64px] lg:mb-[36px] 2xl:mb-[48px] lg:flex lg:justify-between   bg-[#FFFFFF] rounded-[24px] 1xs:rounded-[24px] sm:rounded-[24px] lg:rounded-[36px] 2xl:rounded-[48px] ">
      {/* lg:gap-[125.25px] 2xl:gap-[137px] */}
      <div className=" w-full lg:w-2/3 py-[40px] px-[16px] 1xs:py-[40px] 1xs:px-[16px] sm:py-[40px] sm:px-[16px] lg:py-[72px] lg:px-[48px]  2xl:py-[96px] 2xl:px-[64px] ">
        <div className="mb-[30px] 1xs:mb-[30px] sm:mb-[30px] lg:mb-[30px] 2xl:mb-[40px] flex justify-center lg:justify-start items-center gap-[16px] ">
          <SectionTitle title="Our Solutions"></SectionTitle>
          <SectionTitle title="Data Assessment"></SectionTitle>
        </div>
        <div className="mb-[24px] 1xs:mb-[24px] sm:mb-[24px] lg:mb-[18px] 2xl:mb-[24px]">
          <h2 className="text-[36px] leading-[43px] 1xs:text-[36px] 1xs:leading-[43px] sm:text-[36px] sm:leading-[43px] md:text-[50px] md:leading-[60px] lg:text-[60px] lg:leading-[67.5px] 2xl:text-[80px] 2xl:leading-[90px] tracking-[-0.03em] font-normal text-[#091F5B]">
            Conduct{' '}
            <span
              className="bg-gradient-to-r from-[#00b2ff] to-[#0057ff] text-transparent"
              style={{ backgroundClip: 'text' }}
            >
              Data <br className=" md:hidden" /> Maturity{' '}
              <br className="hidden md:block" /> Assessment
            </span>
          </h2>
        </div>
        <div>
          <h3 className="w-5/6 font-normal text-[#091F5B] text-[16px] leading-[19.36px]  1xs:text-[16px] 1xs:leading-[19.36px] sm:text-[16px] sm:leading-[19.36px] lg:text-[18px] lg:leading-[20px] 2xl:text-[22px] 2xl:leading-[30px] mb-6">
            The Digital Transformation Maturity Assessment Framework provides a{' '}
            comprehensive approach to evaluate an organization's digital
            readiness and progress across crucial areas like strategy, culture,
            customer experience, operations, data, technology, innovation, and
            risk management
          </h3>
          <h3 className="w-5/6 font-normal text-[#091F5B] text-[16px] leading-[19.36px]  1xs:text-[16px] 1xs:leading-[19.36px] sm:text-[16px] sm:leading-[19.36px] lg:text-[18px] lg:leading-[20px] 2xl:text-[22px] 2xl:leading-[30px] mb-6">
            Through a blend of self-assessments, stakeholder interviews,
            workshops, and observations, it curates a multifaceted perspective
            on the organization's digital maturity levels. Precisely calibrated
            maturity levels illuminate the current digital posture while
            charting an aspirational trajectory, empowering strategic roadmap
            formulation and resource allocation
          </h3>
          <h3 className="w-5/6 font-normal text-[#091F5B] text-[16px] leading-[19.36px]  1xs:text-[16px] 1xs:leading-[19.36px] sm:text-[16px] sm:leading-[19.36px] lg:text-[18px] lg:leading-[20px] 2xl:text-[22px] 2xl:leading-[30px]  ">
            This rigorous paradigm recognizes digital transformation as an
            iterative journey, necessitating continuous evaluation and
            recalibration. Embracing the framework unlocks the potential to
            orchestrate enduring digital preeminence, catalyzing sustainable
            competitive advantages.
          </h3>
        </div>
      </div>
      <div className="hidden lg:block lg:w-1/3 rounded-[24px] 1xs:rounded-[24px] sm:rounded-[24px] lg:rounded-[36px] 2xl:rounded-[48px]">
        <img
          className=" h-full object-cover    rounded-[24px] 1xs:rounded-[24px] sm:rounded-[24px] lg:rounded-[36px] 2xl:rounded-[48px] "
          src={img}
          alt="img"
        />
      </div>
    </div>
  );
};

export default ConductPart;
