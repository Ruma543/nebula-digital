// import './Message.css';

const Message = () => {
  return (
    <div className=" pt-10 px-[20px] 1xs:pt-10 1xs:px-[20px]  sm:pt-10 sm:px-[20px] lg:px-[54px] lg:pt-[51px]  2xl:px-[72px] 2xl:pt-[68px] mb-[40px] lg:mb-[72px] 2xl:mb-[96px] ">
      <h3 className="w-full  tracking-[-0.03em] font-normal text-[#091F5B] text-[25px]  leading-[33.89px] 1xs:text-[28px] 1xs:leading-[33.89px] sm:text-[28px] sm:leading-[33.89px]   lg:text-[48px] lg:leading-[55px] xl:text-[55px] xl:leading-[60px]  2xl:text-[80px] 2xl:leading-[85px] ">
        {/*max-w-[390px] 1xs:max-w-[390px] sm:max-w-[390px] xl:max-w-[1332px] 2xl:max-w-[1776px] h-[170px]  xl:h-[192px]  2xl:h-[255px]  */}
        {/* text-[34px] leading-10 xs:text-[40px] xs:leading-[48px] md:text-6xl lg:text-[54px] lg:leading-[60px] 2xl:text-[60px] 2xl:leading-[66px] 3xl:text-[79px] 3xl:leading-[88px]" */}
        <span
          className="bg-gradient-to-r from-[#00b2ff] to-[#0057ff] text-transparent"
          style={{ backgroundClip: 'text' }}
        >
          We are a technology platform
        </span>{' '}
        and data solution provider accelerating digital transformations with{' '}
        secure and actionable insights .
      </h3>
    </div>
  );
};

export default Message;
