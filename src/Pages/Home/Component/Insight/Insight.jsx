import React, { useEffect, useRef, useState } from 'react';
import SectionTitle from '../../../../Component/Shared/SectionTitle/SectionTitle';
// slider
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import arrow1 from '../../../../../public/_Testiomonial carousel arrow.png';
import arrow2 from '../../../../../public/_Testiomonial carousel arrow (1).png';
import Contact from '../../../../Component/Contact/Contact';
import Footer from '../../../../Component/Shared/Footer/Footer';

import img from '../../../../../public/SVG.png';
import img1 from '../../../../../public/Vector (1).png';
import img2 from '../../../../../public/facebook-icon 1.png';
import InsightCard from './InsightCard';

const Insight = () => {
  const sliderRef = useRef(null);
  const [showPreviousButton, setShowPreviousButton] = useState(false);
  const [showNextButton, setShowNextButton] = useState(true);
  const values = [
    {
      id: 1,
      img: 'https://i.ibb.co/bPdxWSv/64e7f73a2c8f38d6ca0c4a8c-Image-1-png-2.png',
      text1: 'Multi Touch Attribution \n(MTA) Model',
      text2:
        'The model estimates the impact of \ndigital marketing channels on signups, \nusing MTA scores to optimize \ncampaigns.',
    },
    {
      id: 2,
      img: 'https://i.ibb.co/VqQ7Z1X/64e7f73a2c8f38d6ca0c4a8c-Image-1-png-3.png',
      text1: 'AI assistant using \nLLM model',
      text2:
        'Fine-tuned a Large Language Model \n(LLM) with enterprise-specific data to \nsupport natural language queries about \nbusiness offerings.',
    },
    {
      id: 3,
      img: 'https://i.ibb.co/QJ84DP6/64e7f73a2c8f38d6ca0c4a8c-Image-1-png-4.png',
      text1: 'Personalized product and \nservice recommendation',
      text2:
        'Customer attributes are analyzed by this \nML algorithm, building a rich profile to \nrecommend targeted services based on \ntheir interests.',
    },
    {
      id: 4,
      img: 'https://i.ibb.co/GHMJJLZ/64e7f73a2c8f38d6ca0c4a8c-Image-1-png-5.png',
      text1: 'Personalized and adaptive \nlearning with AI agent',
      text2:
        'A reinforcement learning model that \ndynamically adapts course content \ndelivery based on individual learner \ninteractions.',
    },
    {
      id: 1,
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
    afterChange: afterChangeHandler,
  };
  return (
    <div>
      <div className="px-[16.75px] sm:px-[20px]  xl:px-[54px] 2xl:px-[72px]  bg-[#EDF0F5] rounded-t-[32px] xl:rounded-t-[52.5px] 2xl:rounded-t-[70px] pt-10 xl:pt-18  2xl:pt-24  text-primary  pb-[60px] lg:pb-[20px]  2xl:pb-[48px] ">
        {/* -mb-100  sm:mb-[96px] xl:mb-[120px] 2xl:mb-[160px]     pb-[60px] xl:pb-[36px]  2xl:pb-[48px] */}
        <SectionTitle title="Insights"></SectionTitle>
        <div className=" mt-[24px] xl:mt-[30px] 2xl:mt-[40px]  w-full">
          <div className=" relative mb-[32px] xl:mb-[36px] 2xl:mb-[48px]">
            <h3 className="text-[20.09px]  leading-[24.32px] font-normal tracking-[-0.03em] sm:text-[24px] sm:leading-[29.05px] sm:font-normal sm:tracking-[-0.03em] xl:text-[60px] xl:leading-[67.5px] xl:font-normal  xl:tracking-[-0.03em] 2xl:text-[80px] 2xl:leading-[90px] 2xl:font-normal 2xl:tracking-[-0.03em]  text-[#091F5B]">
              Discover Our Insights:{' '}
              <span
                className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent"
                style={{ backgroundClip: 'text' }}
              >
                Stay Ahead in <br /> the Digital Landscape
              </span>
              <div className="hidden lg:block  xl:absolute 2xl:absolute xl:-bottom-2 xl:right-0 2xl:-bottom-2 2xl:right-0 ">
                {/* Previous button */}
                {showPreviousButton && (
                  <button className="xl:mr-3 2xl:mr-4" onClick={handlePrevious}>
                    <img
                      className="xl:w-[42px] xl:h-[42px] 2xl:w-[56px] 2xl:h-[56px]"
                      src={arrow1}
                      alt=""
                    />
                  </button>
                )}
                {/* next button */}
                {showNextButton && (
                  <button onClick={handleNext}>
                    <img
                      className="xl:w-[42px] xl:h-[42px] 2xl:w-[56px] 2xl:h-[56px]"
                      src={arrow2}
                      alt=""
                    />
                  </button>
                )}
              </div>
            </h3>
          </div>
          <div className="hidden lg:block">
            {' '}
            <Slider
              {...settings}
              ref={sliderRef}
              className=" grid grid-cols-1 xl:grid-cols-4 xl:gap-4 2xl:grid-cols-4 
          2xl:gap-4  mb-[96px] xl:mb-[120px] 2xl:mb-[160px]"
            >
              {values.map((data, id) => (
                <InsightCard key={id} data={data}></InsightCard>
              ))}
            </Slider>
          </div>
          <div className="grid grid-cols-1  md:grid-cols-2 lg:hidden ">
            {' '}
            {values.map((data, id) => (
              <InsightCard key={id} data={data}></InsightCard>
            ))}
          </div>

          <Contact></Contact>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Insight;
