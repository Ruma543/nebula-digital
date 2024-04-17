import React from 'react';
import img from '../../../../../public/Frame digital.png';
import SectionTitle from '../../../../Component/Shared/SectionTitle/SectionTitle';
const DigitalPart = () => {
  return (
    <div className="mb-[64px] 1xs:mb-[64px] sm:mb-[64px] lg:mb-[36px] 2xl:mb-[48px] lg:flex  lg:justify-between  bg-[#FFFFFF] rounded-[24px] 1xs:rounded-[24px] sm:rounded-[24px] lg:rounded-[36px] 2xl:rounded-[48px]">
      {/* lg:gap-[125.25px] 2xl:gap-[137px] */}
      <div className=" py-[40px] pl-[16px] 1xs:py-[40px] 1xs:pl-[16px] sm:py-[40px] sm:pl-[16px] lg:py-[72px] lg:pl-[48px] 2xl:py-[96px] 2xl:pl-[64px]">
        <div className="mb-[30px] 1xs:mb-[30px] sm:mb-[30px] lg:mb-[30px] 2xl:mb-[40px] flex justify-center lg:justify-start items-center gap-[16px] ">
          <SectionTitle title="Our Solutions"></SectionTitle>
          <SectionTitle title="Data Transformation"></SectionTitle>
        </div>
        <div className="mb-[24px] 1xs:mb-[24px] sm:mb-[24px] lg:mb-[18px] 2xl:mb-[24px]">
          <h2 className="lg:text-[60px] lg:leading-[67.5px] 2xl:text-[80px] 2xl:leading-[90px] tracking-[-0.03em] font-normal text-[#091F5B]">
            Digital Transformation <br className="hidden lg:block" />
            <span
              className="bg-gradient-to-r from-[#00b2ff] to-[#0057ff] text-transparent"
              style={{ backgroundClip: 'text' }}
            >
              Change Management
            </span>
          </h2>
        </div>
        <div>
          <h3 className="font-normal text-[#091F5B] text-[16px] leading-[19.36px]  1xs:text-[16px] 1xs:leading-[19.36px] sm:text-[16px] sm:leading-[19.36px] lg:text-[18px] lg:leading-[22.5px] 2xl:text-[24px] 2xl:leading-[30px] lg:mb-7 2xl:mb-9 ">
            We offer comprehensive change mgt consultancy for mid-large scale
            digital <br className="hidden lg:block" /> transformation
            initiative.
          </h3>
          <h3 className="font-normal text-[#091F5B] text-[16px] leading-[19.36px]  1xs:text-[16px] 1xs:leading-[19.36px] sm:text-[16px] sm:leading-[19.36px] lg:text-[18px] lg:leading-[22.5px] 2xl:text-[24px] 2xl:leading-[30px] lg:mb-7 2xl:mb-9 ">
            Digital transformation culture is pivotal for organizations aiming
            to integrate digital <br className="hidden lg:block" /> technologies
            seamlessly, emphasizing innovation, agility, collaboration,
            continuous <br className="hidden lg:block" /> learning, and a focus
            on customer needs. Change management complements this by{' '}
            <br className="hidden lg:block" /> guiding the organization and its
            people from their current operational state towards an{' '}
            <br className="hidden lg:block" /> envisioned future, ensuring
            smooth transitions.
          </h3>
          <h3 className="font-normal text-[#091F5B] text-[16px] leading-[19.36px]  1xs:text-[16px] 1xs:leading-[19.36px] sm:text-[16px] sm:leading-[19.36px] lg:text-[18px] lg:leading-[22.5px] 2xl:text-[24px] 2xl:leading-[30px] ">
            Effective communication, leadership support, tailored training, and
            open feedback <br className="hidden lg:block" /> channels are
            critical components of successful change management strategies.{' '}
            <br className="hidden lg:block" />
            Together, these elements foster an environment where technological
            advancements <br className="hidden lg:block" /> and human dynamics
            synergize, driving the organization forward. Cultivating a culture{' '}
            <br className="hidden lg:block" />
            receptive to digital transformation and managing change meticulously
            are <br className="hidden lg:block" /> indispensable for achieving
            long-term success in digital era.
          </h3>
        </div>
      </div>
      <div
        className="hidden lg:block lg:w-[494.25px] lg:h-[714px] 2xl:w-[658px] 2xl:h-[952px]"
        // style={{
        //   backgroundImage: `url(${img})`,
        //   backgroundRepeat: 'no-repeat',
        //   backgroundSize: 'cover',
        //   backgroundPosition: 'center',
        // }}
      >
        <img
          className="lg:block lg:w-[494.25px] lg:h-[714px] 2xl:w-[658px] 2xl:h-[952px]"
          src={img}
          alt="img"
        />
      </div>
    </div>
  );
};

export default DigitalPart;
