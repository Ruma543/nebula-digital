import React, { useEffect, useRef, useState } from 'react';
import SectionTitle from '../../../../Component/Shared/SectionTitle/SectionTitle';

// slider
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import arrow1 from '../../../../../public/_Testiomonial carousel arrow.png';
import arrow2 from '../../../../../public/_Testiomonial carousel arrow (1).png';
import UseCaseCard from './UseCaseCard';
const UseCase = () => {
  const sliderRef = useRef(null);
  const [showPreviousButton, setShowPreviousButton] = useState(false);
  const [showNextButton, setShowNextButton] = useState(true);
  const values = [
    {
      id: 1,
      img: 'https://i.ibb.co/cDCHHLF/64e7f73a2c8f38d6ca0c4a8c-Image-1-png.webp',
      value: 'Data Maturity Assessment',
      text1: 'Multi Touch Attribution \n(MTA) Model',
      text2:
        'The model estimates the impact of \ndigital marketing channels on signups, \nusing MTA scores to optimize \ncampaigns.',
    },
    {
      id: 2,
      img: 'https://i.ibb.co/5Gd1qhq/64e7f73a6d9402690c1aa6f8-Image-2-png-1.webp',
      value: 'Technology Platform',
      text1: 'AI assistant using \nLLM model',
      text2:
        'Fine-tuned a Large Language Model \n(LLM) with enterprise-specific data to \nsupport natural language queries about \nbusiness offerings.',
    },
    {
      id: 3,
      img: 'https://i.ibb.co/jfpVGqM/64e7f73a6d9402690c1aa6f8-Image-2-png.webp',
      value: 'Data Analytics & AI Solutions',
      text1: 'Personalized product and \nservice recommendation',
      text2:
        'Customer attributes are analyzed by this \nML algorithm, building a rich profile to \nrecommend targeted services based on \ntheir interests.',
    },
    {
      id: 4,
      img: 'https://i.ibb.co/Dr8dtS7/64e7f73a2c8f38d6ca0c4a8c-Image-1-png-1.webp ',
      value: 'Cyber Security Solutions',
      text1: 'Personalized and adaptive \nlearning with AI agent',
      text2:
        'A reinforcement learning model that \ndynamically adapts course content \ndelivery based on individual learner \ninteractions.',
    },
    {
      id: 5,
      img: 'https://i.ibb.co/QJ84DP6/64e7f73a2c8f38d6ca0c4a8c-Image-1-png-4.png',
      text1: 'Multi Touch Attribution \n(MTA) Model',
      text2:
        'The model estimates the impact of digital marketing channels on signups, using MTA scores to optimize campaigns.',
    },
  ];
  // for button disable
  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      const currentSlide = slider.innerSlider.state.currentSlide;
      setShowPreviousButton(currentSlide !== 0);
      setShowNextButton(
        currentSlide !== slider.innerSlider.state.slideCount - 1
      );
    }
  }, []);

  const handlePrevious = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };
  // for button hidden
  const afterChangeHandler = currentSlide => {
    setShowPreviousButton(currentSlide !== 0);
    setShowNextButton(currentSlide < values.length - 4);
  };
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
    afterChange: afterChangeHandler,
  };
  return (
    <div className="px-[20px]  xl:px-[54px] 2xl:px-[72px] mb-[96px] xl:mb-[120px] 2xl:mb-[160px] ">
      <SectionTitle title="Use Cases"></SectionTitle>
      <div className=" mt-[24px] xl:mt-[30px] 2xl:mt-[40px]  w-full">
        <div className=" relative mb-[32px] xl:mb-[36px] 2xl:mb-[48px]">
          <h3 className="text-[#091F5B] font-normal tracking-[-0.03em] sm:w-full sm:h-full xl:w-full xl:h-full 2xl:w-full 2xl:h-full text-[25px] 1xs:text-[28px] 1xs:leading-[33.89px] sm:text-[28px] sm:leading-[33.89px] md:text-[40px] md:leading-[45px] xl:text-[50px] xl:leading-[60px]  2xl:text-[70px] 2xl:leading-[75px] ">
            {/*text-[#091F5B] font-normal tracking-[-0.03em] sm:w-full sm:h-full xl:w-full xl:h-full 2xl:w-full 2xl:h-full text-[25px] sm:text-[28px] sm:leading-[33.89px] md:text-[40px] md:leading-[45px] xl:text-[50px] xl:leading-[60px]  2xl:text-[70px] 2xl:leading-[75px] */}
            See use cases of how we can{' '}
            <span
              className="bg-gradient-to-r from-[#00b2ff] to-[#0057ff] text-transparent"
              style={{ backgroundClip: 'text' }}
            >
              empower your organizations
            </span>{' '}
            and create meaningful impact
            {/* <div className="hidden xl:block  xl:absolute 2xl:absolute xl:-bottom-2 xl:right-0 2xl:-bottom-2 2xl:right-0 "> */}
            {/* Previous button */}
            {/* {showPreviousButton && (
                <button className="xl:mr-3 2xl:mr-4" onClick={handlePrevious}>
                  <img
                    className="xl:w-[42px] xl:h-[42px] 2xl:w-[56px] 2xl:h-[56px]"
                    src={arrow1}
                    alt=""
                  />
                </button>
              )} */}
            {/* next button */}
            {/* {showNextButton && (
                <button onClick={handleNext}>
                  <img
                    className="xl:w-[42px] xl:h-[42px] 2xl:w-[56px] 2xl:h-[56px]"
                    src={arrow2}
                    alt=""
                  />
                </button>
              )} */}
            {/* </div> */}
            <div className="hidden xl:block  xl:absolute 2xl:absolute xl:-bottom-2 xl:right-0 2xl:-bottom-2 2xl:right-0 ">
              {/* Previous button */}
              {showPreviousButton ? (
                <button className="xl:mr-3 2xl:mr-4" onClick={handlePrevious}>
                  <img
                    className="xl:w-[42px] xl:h-[42px] 2xl:w-[56px] 2xl:h-[56px]"
                    src={arrow1}
                    alt=""
                  />
                </button>
              ) : (
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-white opacity-60"></div>
                  <button
                    className=" xl:mr-3 2xl:mr-4"
                    onClick={handlePrevious}
                  >
                    <img
                      className="xl:w-[42px] xl:h-[42px] 2xl:w-[56px] 2xl:h-[56px]"
                      src={arrow1}
                      alt=""
                    />
                  </button>
                </div>
              )}
              {/* next button */}
              {showNextButton ? (
                <button onClick={handleNext}>
                  <img
                    className="xl:w-[42px] xl:h-[42px] 2xl:w-[56px] 2xl:h-[56px]"
                    src={arrow2}
                    alt=""
                  />
                </button>
              ) : (
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-white opacity-60"></div>
                  <button onClick={handleNext}>
                    <img
                      className=" xl:w-[42px] xl:h-[42px] 2xl:w-[56px] 2xl:h-[56px]"
                      src={arrow2}
                      alt=""
                    />
                  </button>
                </div>
              )}
            </div>
          </h3>
        </div>

        <div className="hidden xl:block">
          <Slider
            {...settings}
            ref={sliderRef}
            // className=" grid grid-cols-1 xl:grid-cols-4 xl:gap-4 2xl:grid-cols-4
            // 2xl:gap-4"
          >
            {values.map((data, id) => (
              <UseCaseCard key={id} data={data}></UseCaseCard>
            ))}
          </Slider>
        </div>
        <div className="grid grid-cols-1 gap-5 1xs:gap-5 sm:gap-5 md:grid-cols-2 lg:grid-cols-3 xl:hidden">
          {values.map((data, id) => (
            <UseCaseCard key={id} data={data}></UseCaseCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UseCase;
