import { useEffect, useRef, useState } from 'react';
import SectionTitle from '../../../../Component/Shared/SectionTitle/SectionTitle';
// slider
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img from '../../../../../public/Group 6 (1).png';
import arrow1 from '../../../../../public/_Testiomonial carousel arrow.png';
import arrow2 from '../../../../../public/_Testiomonial carousel arrow (1).png';
import SlideCard from './SlideCard';

const OurSolutions = () => {
  const sliderRef = useRef(null);
  // for button disable
  const [showPreviousButton, setShowPreviousButton] = useState(false);
  const [showNextButton, setShowNextButton] = useState(true);
  const values = [
    {
      id: 1,
      value: 'Data Maturity Assessment',
      color: '#0F33E9',
      button: './Group 6 (5).png',
      textColor: '#FFFFFF',
      description:
        "Comprehensive approach to evaluate an organization's digital readiness",
    },
    {
      id: 2,
      value: 'Technology Platform',
      color: '#EDF0F5',
      button: './Group 6 (4).png',
      textColor: '#091F5B',
      description:
        'Robust & scalable digital foundation for driving growth and efficiency',
    },
    {
      id: 3,
      value: 'Data Analytics & AI Solutions',
      color: '#DFF5FF',
      button: './Group 6 (5).png',
      textColor: '#091F5B',
      description: 'Unlock actionable insights and discover data monetization',
    },
    {
      id: 4,
      value: 'Cyber Security Solutions',
      color: '#D0D5DD',
      button: './Group 6 (5).png',
      textColor: '#091F5B',
      description:
        'Expert risk assessments, mitigation plans & tailored security strategies',
    },
    {
      id: 5,
      value: 'Expert assessments, tailored strategies, employee training',
      color: '#091F5B',
      button: './Group 6 (3).png',
      textColor: '#FFFFFF',
      description:
        'Enhance cyber defense and compliance through tailored strategies and training.',
    },
    {
      id: 6,
      value: 'Expert assessments, tailored strategies, employee training',
      color: '#091F5B',
      button: './Group 6 (3).png',
      textColor: '#FFFFFF',
      description:
        'Enhance cyber defense and compliance through tailored strategies and training.',
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
  // console.log(data.color);
  return (
    <div className="px-[20px]  xl:px-[54px] 2xl:px-[72px] mb-[96px] xl:mb-[120px] 2xl:mb-[160px] ">
      <SectionTitle title="Our Solutions"></SectionTitle>
      <div className=" mt-[24px] xl:mt-[30px] 2xl:mt-[40px]  w-full">
        <div className=" relative  sm:h-[136px]  xl:h-[128px]  2xl:h-[170px] mb-[32px] xl:mb-[36px] 2xl:mb-[48px]">
          {/*sm:max-w-[390px] xl:max-w-[1350px] 2xl:max-w-[1800px] */}
          <h3 className="text-[#091F5B] sm:w-full sm:h-full xl:w-full xl:h-full 2xl:w-full 2xl:h-full text-[25px] sm:text-[28px] sm:leading-[33.89px] sm:font-normal sm:tracking-[-0.03em] xl:text-[55px] xl:leading-[63.75px] xl:font-normal  xl:tracking-[-0.03em] 2xl:text-[80px] 2xl:leading-[85px] 2xl:font-normal 2xl:tracking-[-0.03em] leading-[33.89px]">
            Our solutions and apps are built over{' '}
            <span
              className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent"
              style={{ backgroundClip: 'text' }}
            >
              a strong <br className="hidden lg:block" /> data foundation and AI
              capabilities
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
        {/* <div
          className="grid grid-cols-1 xl:grid-cols-4 xl:gap-[15px] 2xl:grid-cols-4 
          2xl:gap-[20px]"
        > */}
        <div className="hidden lg:block">
          <Slider {...settings} ref={sliderRef}>
            {values.map((data, id) => (
              <SlideCard key={id} data={data}></SlideCard>
            ))}
          </Slider>
        </div>
        <div className="grid grid-cols-1  md:grid-cols-2 lg:hidden">
          {values.map((data, id) => (
            <SlideCard key={id} data={data}></SlideCard>
          ))}
        </div>
      </div>
    </div>
    // </div>
  );
};

export default OurSolutions;
