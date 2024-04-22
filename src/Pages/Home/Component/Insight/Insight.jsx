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
        'The model estimates the impact of digital marketing channels on signups, using MTA scores to optimize campaigns.',
    },
    {
      id: 2,
      img: 'https://i.ibb.co/VqQ7Z1X/64e7f73a2c8f38d6ca0c4a8c-Image-1-png-3.png',
      text1: 'AI assistant using \nLLM model',
      text2:
        'The model estimates the impact of digital marketing channels on signups, using MTA scores to optimize campaigns.',
    },
    {
      id: 3,
      img: 'https://i.ibb.co/QJ84DP6/64e7f73a2c8f38d6ca0c4a8c-Image-1-png-4.png',
      text1: 'Personalized product and \nservice ',
      text2:
        'The model estimates the impact of digital marketing channels on signups, using MTA scores to optimize campaigns.',
    },
    {
      id: 4,
      img: 'https://i.ibb.co/GHMJJLZ/64e7f73a2c8f38d6ca0c4a8c-Image-1-png-5.png',
      text1: 'Personalized and adaptive \nlearning with ',
      text2:
        '        The model estimates the impact of digital marketing channels on signups, using MTA scores to optimize campaigns.',
    },
    {
      id: 1,
      img: 'https://i.ibb.co/QJ84DP6/64e7f73a2c8f38d6ca0c4a8c-Image-1-png-4.png',
      text1: 'Multi Touch Attribution \n(MTA) Model',
      text2:
        '        The model estimates the impact of digital marketing channels on signups, using MTA scores to optimize campaigns.',
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
      <div className="px-[16.75px] sm:px-[20px]  xl:px-[54px] 2xl:px-[72px]  bg-[#EDF0F5] rounded-t-[32px] xl:rounded-t-[52.5px] 2xl:rounded-t-[70px] pt-10 xl:pt-18  2xl:pt-24  text-primary  pb-[60px] 1xs:pb-[60px] sm:pb-[60px]  lg:pb-[15px]  2xl:pb-[15px] font-primary ">
        {/* -mb-100  sm:mb-[96px] xl:mb-[120px] 2xl:mb-[160px]     pb-[60px] xl:pb-[36px]  2xl:pb-[48px] */}
        <SectionTitle title="Insights"></SectionTitle>
        <div className=" mt-[24px] xl:mt-[30px] 2xl:mt-[40px]   w-full">
          <div className=" relative mb-[32px] xl:mb-[36px] 2xl:mb-[48px]">
            <h3 className="font-normal tracking-[-0.03em] sm:w-full sm:h-full xl:w-full xl:h-full 2xl:w-full 2xl:h-full text-[25px] 1xs:text-[28px] 1xs:leading-[33.89px] sm:text-[28px] sm:leading-[33.89px] md:text-[40px] md:leading-[45px] xl:text-[50px] xl:leading-[60px]  2xl:text-[70px] 2xl:leading-[75px] text-[#091F5B]">
              Discover Our Insights:{' '}
              <span
                className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent"
                style={{ backgroundClip: 'text' }}
              >
                Stay Ahead in <br /> the Digital Landscape
              </span>
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
                    <div className="absolute inset-0 bg-[#EDF0F5] opacity-60"></div>
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
                    <div className="absolute inset-0 bg-[#EDF0F5] opacity-60"></div>
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
            {' '}
            <Slider
              {...settings}
              ref={sliderRef}
              className=" grid  xl:grid-cols-4 xl:gap-4 2xl:grid-cols-4 
          2xl:gap-4  mb-[96px] xl:mb-[120px] 2xl:mb-[160px]"
            >
              {values.map((data, id) => (
                <InsightCard key={id} data={data}></InsightCard>
              ))}
            </Slider>
          </div>
          <div className="grid grid-cols-1 gap-5 1xs:gap-5 sm:gap-5 md:grid-cols-2 lg:grid-cols-3 xl:hidden mb-[60px]">
            {/* */}{' '}
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
