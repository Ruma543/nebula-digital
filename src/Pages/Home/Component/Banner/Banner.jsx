import React from 'react';
import img from '../../../../../public/banner.webp';
import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
// const bannerUrl = 'https://i.ibb.co/k5Sd1nG/banner.jpg';
const Banner = () => {
  return (
    <div
      // className=" max-h-[525px] xl:max-h-[759px] 2xl:max-h-[1012px] w-full flex items-center font-primary"
      className=" w-full h-[248px] 1xs:h-[525px] sm:h-[525px] lg:h-[759px]  xl:h-[759px] 2xl:h-[1012px]  font-primary pt-[132px] 1xs:pt-[132px] lg:pt-[190px]  xl:pt-[190px] 2xl:pt-[260px] pb-[80px] 1xs:pb-[80px] lg:pb-[185.25px] xl:pb-[185.25px] 2xl:pb-[247px]"
      //  xl:h-[759px] xl:pt-[201.75px] 2xl:pt-[269px]
      style={{
        backgroundImage: `url(${img})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Swiper
        spaceBetween={30}
        pagination={{
          // clickable: false,
          el: '.swiper-pagination',
          type: 'bullets',
        }}
        modules={[Pagination]}
        className="mySwiper h-full "
      >
        <SwiperSlide>
          <div
            className="h-full  "
            // style={{
            //   backgroundImage: `url(${img})`,
            //   backgroundRepeat: 'no-repeat',
            //   backgroundSize: 'cover',
            //   backgroundPosition: 'center',
            // }}
          >
            <div
              className=" h-full  w-full  flex flex-col font-primary px-[20px]  xl:pl-[54px] 2xl:pl-[72px]  text-left 
              "
            >
              {/* space-y-[20px] 1xs:space-y-[20px] 
            xl:space-y-[45.8px] 2xl:space-y-[58px] */}
              {/* pt-[132px] xl:pt-[195.75px] 2xl:pt-[269px] pb-[123px] xl:pb-[185.25px] 2xl:pb-[247px] */}
              {/* <div
                className="h-[232px] 1xs:h-[232px] lg:h-[270px] xl:h-[270px] 
                mb-[20px] 1xs:mb-[20px] xl:mb-[45.8px] 2xl:mb-[58px]
             "
              > */}
              <h3
                className="  text-[48px] leading-[58.9px] font-normal 
                tracking-[-.03em] lg:text-[105px] lg:leading-[90px] lg:font-normal lg:tracking-[-.03em] 2xl:text-[140px] 2xl:leading-[120px] 2xl:font-normal 2xl:tracking-[-.03em]  mb-[20px] 1xs:mb-[20px] lg:mb-[45.8px] 2xl:mb-[58px]
                text-[#FFFFFF] "
              >
                {/*  xl:text-[105px] xl:leading-[90px] xl:-tracking-[.03em]  2xl:tracking-tight  mb-[20px] 1xs:mb-[20px] xl:mb-[45.8px] 2xl:mb-[58px]*/}
                Pioneering data driven approach to modernize{' '}
                <br className="hidden lg:block" />
                your business
              </h3>
              {/* </div> */}
              {/* <div className="h-[45px] 1xs:h-[45px] lg:h-[58.5px] xl:h-[58.5px]"> */}{' '}
              <h3
                className="w-full lg:w-8/12 h-full text-left text-xs 1xs:text-[12px] 1xs:leading-[14.52px] 1xs:font-light  lg:text-[19.5px] 2xl:text-[26px] text-[#FFFFFF] 
              pr-[15px] 1xs:pr-[15px]  leading-[14.52px] lg:leading-[29.25px] lg:font-light 2xl:leading-[39px]"
              >
                {/* mb-[60px] xl:mb-[134.25px] 2xl:mb-[179px]  xl:text-[19.5px]*/}
                We deliver cutting edge technology platforms and data solutions
                for B2B enterprise <br className="hidden lg:block" /> &
                governments, evolving their efficiency with revenue growth and
                cost reduction.
              </h3>
              {/* </div> */}
            </div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <div
            className="h-full  "
            // style={{
            //   backgroundImage: `url(${img})`,
            //   backgroundRepeat: 'no-repeat',
            //   backgroundSize: 'cover',
            //   backgroundPosition: 'center',
            // }}
          >
            <div className=" h-full  w-full  flex items-center flex-start flex-col font-primary px-[20px] pt-[132px] xl:pt-[201px] 2xl:pt-[269px]    xl:pl-[54px] 2xl:pl-[72px] pb-[96px] xl:pb-[185.25px] 2xl:pb-[247px]">
              <h3 className="w-full text-left text-5xl xl:text-8xl 2xl:text-9xl  text-[#FFFFFF] mb-5 xl:mb-[45.8px] 2xl:mb-[58px]">
                Pioneering data driven approach to modernize your business
              </h3>
              <p className=" text-xs  xl:text-[19.5px] 2xl:text-[26px] text-[#FFFFFF] pr-[36px] md:pr-[300px] xl:pr-[606.75px] 2xl:pr-[789px] leading-[14.52px] xl:leading-[29.25px] 2xl:leading-[39px]">
                We deliver cutting edge technology platforms and data solutions
                for B2B enterprise & governments, evolving their efficiency with
                revenue growth and cost reduction.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="h-full  "
            // style={{
            //   backgroundImage: `url(${img})`,
            //   backgroundRepeat: 'no-repeat',
            //   backgroundSize: 'cover',
            //   backgroundPosition: 'center',
            // }}
          >
            <div className=" h-full  w-full  flex items-center flex-start flex-col font-primary px-[20px] pt-[132px] xl:pt-[201px] 2xl:pt-[269px]    xl:pl-[54px] 2xl:pl-[72px] pb-[96px] xl:pb-[185.25px] 2xl:pb-[247px]">
              <h3 className="w-full text-left text-5xl xl:text-8xl 2xl:text-9xl  text-[#FFFFFF] mb-5 xl:mb-[45.8px] 2xl:mb-[58px]">
                Pioneering data driven approach to modernize your business
              </h3>
              <p className=" text-xs  xl:text-[19.5px] 2xl:text-[26px] text-[#FFFFFF] pr-[36px] md:pr-[300px] xl:pr-[606.75px] 2xl:pr-[789px] leading-[14.52px] xl:leading-[29.25px] 2xl:leading-[39px]">
                We deliver cutting edge technology platforms and data solutions
                for B2B enterprise & governments, evolving their efficiency with
                revenue growth and cost reduction.
              </p>
            </div>
          </div>
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Banner;
