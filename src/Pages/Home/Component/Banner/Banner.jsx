import React from 'react';
import img from '../../../../../public/banner.jpg';
import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
const bannerUrl = 'https://i.ibb.co/k5Sd1nG/banner.jpg';
const Banner = () => {
  return (
    <div
      className=" max-h-[525px] xl:max-h-[759px] 2xl:max-h-[1012px] w-full flex items-center font-primary  
    "
    >
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper h-full "
      >
        <SwiperSlide>
          <div
            className="h-full  "
            style={{
              backgroundImage: `url(${bannerUrl})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className=" h-full  w-full  flex    flex-col font-primary px-[20px] pt-[132px] xl:pt-[201px] 2xl:pt-[269px] xl:pl-[54px] 2xl:pl-[72px] pb-[123px] xl:pb-[185.25px] 2xl:pb-[247px] text-left">
              <h3
                className="text-5xl  text-[48px] leading-[58.9px] font-normal
                xl:text-[105px] xl:leading-[90px] xl:font-normal
                2xl:text-[140px] 2xl:leading-[120px] 2xl:font-normal
                2xl:tracking-tight text-[#FFFFFF] mb-[20px] xl:mb-[45.8px]
                2xl:mb-[58px] "
              >
                Pioneering data driven approach to modernize <br /> your
                business
              </h3>
              <h3 className="text-left text-xs  xl:text-[19.5px] 2xl:text-[26px] text-[#FFFFFF] pr-[36px]  leading-[14.52px] xl:leading-[29.25px] 2xl:leading-[39px] mb-[60px] xl:mb-[134.25px] 2xl:mb-[179px] ">
                We deliver cutting edge technology platforms and data solutions
                for B2B enterprise <br /> & governments, evolving their
                efficiency with revenue growth and cost reduction.
              </h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="h-full  "
            style={{
              backgroundImage: `url(${img})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
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
            style={{
              backgroundImage: `url(${img})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
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
      </Swiper>
    </div>
  );
};

export default Banner;
