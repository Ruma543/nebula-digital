import React from 'react';
import img from '../../../../../public/Frame Conduct.png';
import SectionTitle from '../../../../Component/Shared/SectionTitle/SectionTitle';
const ConductPart = () => {
  return (
    <div className="mb-[64px] 1xs:mb-[64px] sm:mb-[64px] lg:mb-[36px] 2xl:mb-[48px] lg:flex lg:justify-between   bg-[#FFFFFF] rounded-[24px] 1xs:rounded-[24px] sm:rounded-[24px] lg:rounded-[36px] 2xl:rounded-[48px]">
      {/* lg:gap-[125.25px] 2xl:gap-[137px] */}
      <div className=" py-[40px] pl-[16px] 1xs:py-[40px] 1xs:pl-[16px] sm:py-[40px] sm:pl-[16px] lg:py-[72px] lg:pl-[48px] 2xl:py-[96px] 2xl:pl-[64px]">
        <div className="mb-[30px] 1xs:mb-[30px] sm:mb-[30px] lg:mb-[30px] 2xl:mb-[40px] flex justify-center lg:justify-start items-center gap-[16px] ">
          <SectionTitle title="Our Solutions"></SectionTitle>
          <SectionTitle title="Data Assessment"></SectionTitle>
        </div>
        <div className="mb-[24px] 1xs:mb-[24px] sm:mb-[24px] lg:mb-[18px] 2xl:mb-[24px]">
          <h2 className="lg:text-[60px] lg:leading-[67.5px] 2xl:text-[80px] 2xl:leading-[90px] tracking-[-0.03em] font-normal text-[#091F5B]">
            Conduct{' '}
            <span
              className="bg-gradient-to-r from-[#0057ff] to-[#00b2ff] text-transparent"
              style={{ backgroundClip: 'text' }}
            >
              Data Maturity <br className="hidden lg:block" /> Assessment
            </span>
          </h2>
        </div>
        <div>
          <h3 className="font-normal text-[#091F5B] text-[16px] leading-[19.36px]  1xs:text-[16px] 1xs:leading-[19.36px] sm:text-[16px] sm:leading-[19.36px] lg:text-[18px] lg:leading-[22.5px] 2xl:text-[24px] 2xl:leading-[30px] mb-6">
            The Digital Transformation Maturity Assessment Framework provides a
            <br className="hidden lg:block" />
            comprehensive approach to evaluate an organization's digital
            readiness and <br className="hidden lg:block" /> progress across
            crucial areas like strategy, culture, customer experience,{' '}
            <br className="hidden lg:block" /> operations, data, technology,
            innovation, and risk management
          </h3>
          <h3 className="font-normal text-[#091F5B] text-[16px] leading-[19.36px]  1xs:text-[16px] 1xs:leading-[19.36px] sm:text-[16px] sm:leading-[19.36px] lg:text-[18px] lg:leading-[22.5px] 2xl:text-[24px] 2xl:leading-[30px] mb-6">
            Through a blend of self-assessments, stakeholder interviews,
            workshops, and <br className="hidden lg:block" /> observations, it
            curates a multifaceted perspective on the organization's{' '}
            <br className="hidden lg:block" /> digital maturity levels.
            Precisely calibrated maturity levels illuminate the{' '}
            <br className="hidden lg:block" /> current digital posture while
            charting an aspirational trajectory, empowering{' '}
            <br className="hidden lg:block" /> strategic roadmap formulation and
            resource allocation
          </h3>
          <h3 className="font-normal text-[#091F5B] text-[16px] leading-[19.36px]  1xs:text-[16px] 1xs:leading-[19.36px] sm:text-[16px] sm:leading-[19.36px] lg:text-[18px] lg:leading-[22.5px] 2xl:text-[24px] 2xl:leading-[30px] ">
            This rigorous paradigm recognizes digital transformation as an
            iterative <br className="hidden lg:block" /> journey, necessitating
            continuous evaluation and recalibration. Embracing the{' '}
            <br className="hidden lg:block" /> framework unlocks the potential
            to orchestrate enduring digital preeminence,{' '}
            <br className="hidden lg:block" /> catalyzing sustainable
            competitive advantages.
          </h3>
        </div>
      </div>
      <div className="hidden lg:block">
        <img
          className="lg:w-[494.25px] lg:h-[694px] 2xl:w-[658px] 2xl:h-[910px]"
          src={img}
          alt="img"
        />
        {/* 2xl:h-[922px */}
      </div>
    </div>
  );
};

export default ConductPart;
