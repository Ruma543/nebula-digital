import React, { useRef } from 'react';
import SectionTitle from '../../../../Component/Shared/SectionTitle/SectionTitle';

// slider
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import arrow1 from '../../../../../public/_Testiomonial carousel arrow.png';
import arrow2 from '../../../../../public/_Testiomonial carousel arrow (1).png';
const UseCase = () => {
  const sliderRef = useRef(null);
  const values = [
    {
      id: 1,
      img: '../../../../../public/64e7f73a2c8f38d6ca0c4a8c_Image-1.png.png',
      value: 'Data Maturity Assessment',
      text1: 'Multi Touch Attribution (MTA) Model',
      text2:
        'The model estimates the impact of digital marketing channels on signups, using MTA scores to optimize campaigns.',
    },
    {
      id: 2,
      img: '../../../../../public/64e7f73a2c8f38d6ca0c4a8c_Image-1.png (1).png',
      value: 'Technology Platform',
      text1: 'AI assistant using LLM model',
      text2:
        'Fine-tuned a Large Language Model (LLM) with enterprise-specific data to support natural language queries about business offerings.',
    },
    {
      id: 3,
      img: '../../../../../public/64e7f73a6d9402690c1aa6f8_Image-2.png.png',
      value: 'Data Analytics & AI Solutions',
      text1: 'Personalized product and service recommendation',
      text2:
        'Customer attributes are analyzed by this ML algorithm, building a rich profile to recommend targeted services based on their interests.',
    },
    {
      id: 4,
      img: '../../../../../public/64e7f73a6d9402690c1aa6f8_Image-2.png (1).png',
      value: 'Cyber Security Solutions',
      text1: 'Personalized and adaptive learning with AI agent',
      text2:
        'A reinforcement learning model that dynamically adapts course content delivery based on individual learner interactions.',
    },
    {
      id: 1,
      img: '../../../../../public/64e7f73a2c8f38d6ca0c4a8c_Image-1.png.png',
      value: 'Data Maturity Assessment',
      text1: 'Multi Touch Attribution (MTA) Model',
      text2:
        'The model estimates the impact of digital marketing channels on signups, using MTA scores to optimize campaigns.',
    },
  ];

  const handlePrevious = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="px-[20px]  xl:px-[54px] 2xl:px-[72px] mb-[96px] xl:mb-[120px] 2xl:mb-[160px] ">
      <SectionTitle title="Use Case"></SectionTitle>
      <div className=" mt-[24px] xl:mt-[30px] 2xl:mt-[40px]  w-full">
        <div className=" relative mb-[32px] xl:mb-[36px] 2xl:mb-[48px]">
          <h3 className="text-[20.09px]  leading-[24.32px] font-normal tracking-[-0.03em] sm:text-[24px] sm:leading-[29.05px] sm:font-normal sm:tracking-[-0.03em] xl:text-[60px] xl:leading-[67.5px] xl:font-normal  xl:tracking-[-0.03em] 2xl:text-[80px] 2xl:leading-[90px] 2xl:font-normal 2xl:tracking-[-0.03em]  text-[#091F5B]">
            See use cases of how we can{' '}
            <span
              className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent"
              style={{ backgroundClip: 'text' }}
            >
              empower your organizations
            </span>{' '}
            and create meaningful impact
            <div className="hidden md:block  xl:absolute 2xl:absolute xl:-bottom-2 xl:right-0 2xl:-bottom-2 2xl:right-0 ">
              <button className="xl:mr-3 2xl:mr-4" onClick={handlePrevious}>
                <img
                  className="xl:w-[42px] xl:h-[42px] 2xl:w-[56px] 2xl:h-[56px]"
                  src={arrow1}
                  alt=""
                />
              </button>
              <button onClick={handleNext}>
                <img
                  className="xl:w-[42px] xl:h-[42px] 2xl:w-[56px] 2xl:h-[56px]"
                  src={arrow2}
                  alt=""
                />
              </button>
            </div>
          </h3>
        </div>

        <Slider
          {...settings}
          ref={sliderRef}
          className=" grid grid-cols-1 xl:grid-cols-4 xl:gap-4 2xl:grid-cols-4 
          2xl:gap-4"
        >
          {values.map((data, id) => (
            <div
              className=" rounded-[24px]  xl:rounded-[22.5px]  2xl:rounded-[30px] "
              key={id}
            >
              <img
                className="w-full h-[325.67px] sm:h-[389px] xl:h-[364.5px] 2xl:h-[486px] mb-[20.9px] sm:mb-[24px] xl:mb-[22.5px] 2xl:mb-[30px]"
                src={data.img}
                alt=""
              />
              <div className="h-180px xl:h-[208px] 2xl:h-[274px] flex flex-col justify-between">
                <h3 className="text-[#091F5B] text-[19.2px] leading-[23.24px] font-bold tracking-[-0.03em] xl:text-[22.5px] xl:leading-[27.23px] xl:font-bold xl:tracking-[-0.03em] 2xl:text-[30px] 2xl:leading-[36.31px] 2xl:font-bold 2xl:tracking-[-0.03em] ">
                  {data.text1}
                </h3>
                <h3 className="text-[#091F5B] text-[19.2px] leading-[23.24px] font-normal tracking-[-0.03em] xl:text-[18px] xl:leading-[21.78px] xl:font-normal xl:tracking-[-0.03em] 2xl:text-[24px] 2xl:leading-[29.5px] 2xl:font-normal 2xl:tracking-[-0.03em]">
                  {data.text2}
                </h3>
                <h3 className="text-[#091F5B] text-[16px] leading-[19.36px] font-bold tracking-[-0.03em] xl:text-[18px] xl:leading-[21.78px] xl:font-bold xl:tracking-[-0.03em] 2xl:text-[24px] 2xl:leading-[29.5px] 2xl:font-bold 2xl:tracking-[-0.03em] underline">
                  Learn More
                </h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default UseCase;
