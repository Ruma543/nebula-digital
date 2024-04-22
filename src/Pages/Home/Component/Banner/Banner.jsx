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
          <div className="h-full  ">
            <div
              className=" h-full  w-full  flex flex-col px-[20px]  xl:pl-[54px] 2xl:pl-[72px]  text-left 
              "
            >
              <h3
                className="  text-[48px] leading-[58.9px] font-normal 
                tracking-[-.03em] md:text-[60px] md:leading-[60px] lg:text-[80px] lg:leading-[80px]  xl:text-[105px] xl:leading-[90px]  2xl:text-[140px] 2xl:leading-[120px]   mb-[20px] 1xs:mb-[20px] sm:mb-[20px] lg:mb-[45.8px] 2xl:mb-[58px]
                text-[#FFFFFF] "
              >
                Pioneering data driven{' '}
                <br className="hidden sm:block md:block xl:hidden" /> approach
                to modernize{' '}
                <br className="hidden sm:block md:block lg:block" />
                your <br className="hidden md:hidden xl:hidden" /> business
              </h3>

              <h3
                className="w-full md:w-10/12 lg:w-10/12 h-full text-left text-xs 1xs:text-[12px] 1xs:leading-[14.52px] 1xs:font-light  lg:text-[19.5px] 2xl:text-[26px] text-[#FFFFFF] 
              pr-[15px] 1xs:pr-[15px]  leading-[14.52px] lg:leading-[29.25px] lg:font-light 2xl:leading-[39px]"
              >
                We deliver cutting edge technology platforms and data solutions
                <br className="md:hidden" />
                for B2B enterprise <br className="hidden md:block lg:block" /> &
                governments, evolving their efficiency with{' '}
                <br className="md:hidden" /> revenue growth and cost reduction.
              </h3>
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
            <div className=" h-full  w-full  flex items-center flex-start flex-col  px-[20px] pt-[132px] xl:pt-[201px] 2xl:pt-[269px]    xl:pl-[54px] 2xl:pl-[72px] pb-[96px] xl:pb-[185.25px] 2xl:pb-[247px]">
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
            <div className=" h-full  w-full  flex items-center flex-start flex-col px-[20px] pt-[132px] xl:pt-[201px] 2xl:pt-[269px]    xl:pl-[54px] 2xl:pl-[72px] pb-[96px] xl:pb-[185.25px] 2xl:pb-[247px]">
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
