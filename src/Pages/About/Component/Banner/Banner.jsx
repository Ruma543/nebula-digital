import img from '../../../../../public/banner.webp';

const Banner = () => {
  return (
    <div
      className=" w-full h-[435px] rounded-[24px] 1xs:h-[435px] 1xs:rounded-[24px] lg:h-[360px] lg:rounded-[36px]  2xl:h-[480px] 2xl:rounded-[48px] pt-[91px] pl-[16px] 1xs:pt-[91px] 1xs:pl-[16px] lg:pt-[72px] lg:pl-[37.5px] 2xl:pt-[96px] 2xl:pl-[50px] mb-[40px] 1xs:mb-[40px] sm:mb-[40px] lg:mb-[48px] 2xl:mb-[64px] "
      style={{
        backgroundImage: `url(${img})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h3 className="font-normal tracking-[-0.03em] text-[#FFFFFF] text-[52px] leading-[62px] 1xs:text-[52px] 1xs:leading-[62px]  sm:text-[52px] sm:leading-[62px] lg:text-[69px] lg:leading-[72px] 2xl:text-[92px] 2xl:leading-[96px]">
        Future-proof your organization. Start your digital transformation
        journey.
      </h3>
    </div>
  );
};

export default Banner;
