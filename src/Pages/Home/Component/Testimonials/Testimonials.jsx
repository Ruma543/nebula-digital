import React, { useRef, useState } from 'react';
import SectionTitle from '../../../../Component/Shared/SectionTitle/SectionTitle';
import arrow1 from '../../../../../public/_Testiomonial carousel arrow.png';
import arrow2 from '../../../../../public/_Testiomonial carousel arrow (1).png';
// slider
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// video player
import ReactPlayer from 'react-player/youtube';
import playButton from '../../../../../public/Group 1171275979.png';
const Testimonials = () => {
  const sliderRef = useRef(null);
  const [playingIndex, setPlayingIndex] = useState(null);
  const values = [
    {
      id: 1,
      video: 'https://www.youtube.com/watch?v=qWUZs-c8-0s',
    },
    {
      id: 2,
      video: 'https://www.youtube.com/watch?v=vZgyWfmw_Kw',
    },
    {
      id: 3,
      video: 'https://www.youtube.com/watch?v=8UmxIVmIUiw',
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
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
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
  const togglePlay = index => {
    setPlayingIndex(index === playingIndex ? null : index);
  };

  const renderPlayButton = index => {
    return (
      <img
        src={playButton}
        alt="Play"
        className="absolute inset-0 m-auto w-[40px] h-[40px] xl:w-[111px] xl:h-[111px] 2xl:w-[148px] 2xl:h-[148px] cursor-pointer"
        onClick={() => togglePlay(index)}
      />
    );
  };
  return (
    <div className="px-[20px]  xl:px-[54px] 2xl:px-[72px] sm:mb-[96px] xl:mb-[120px] 2xl:mb-[160px] ">
      <SectionTitle title="Testimonials"></SectionTitle>
      <div className=" mt-[24px] xl:mt-[30px] 2xl:mt-[40px]  w-full">
        <div className=" relative mb-[32px] xl:mb-[36px] 2xl:mb-[48px]">
          <h3 className="text-[20.09px]  leading-[24.32px] font-normal tracking-[-0.03em] sm:text-[24px] sm:leading-[29.05px] sm:font-normal sm:tracking-[-0.03em] xl:text-[60px] xl:leading-[67.5px] xl:font-normal  xl:tracking-[-0.03em] 2xl:text-[80px] 2xl:leading-[90px] 2xl:font-normal 2xl:tracking-[-0.03em]  text-[#091F5B]">
            Hear What{' '}
            <span
              className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent"
              style={{ backgroundClip: 'text' }}
            >
              Our Clients
            </span>{' '}
            Have to Say
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

        {/* slider */}
      </div>
      <Slider
        {...settings}
        ref={sliderRef}
        className=" grid grid-cols-1 xl:grid-cols-2 xl:gap-4 2xl:grid-cols-2 
          2xl:gap-5"
      >
        {values.map((data, index) => (
          <div
            className="relative border-8 border-white rounded-[30px]"
            key={index}
          >
            <div className=" w-full  h-[211px] xl:h-[393px] 2xl:h-[524px] rounded-[24px] xl:rounded-[22px] 2xl:rounded-[30px] relative">
              <ReactPlayer
                url={data.video}
                width="100%"
                height="100%"
                volume={playingIndex === index ? 1 : 0}
                muted={playingIndex !== index}
                playing={playingIndex === index}
                controls={false}
                style={{ borderRadius: 30 }}
              />
              {!playingIndex && renderPlayButton(index)}
            </div>
            {playingIndex === index && !playingIndex && renderPlayButton(index)}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
