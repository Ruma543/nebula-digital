import { useRef } from 'react';
import SectionTitle from '../../../../Component/Shared/SectionTitle/SectionTitle';
// slider
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img from '../../../../../public/Group 6 (1).png';
import arrow1 from '../../../../../public/_Testiomonial carousel arrow.png';
import arrow2 from '../../../../../public/_Testiomonial carousel arrow (1).png';

const OurSolutions = () => {
  const sliderRef = useRef(null);
  const values = [
    {
      id: 1,
      value: 'Data Maturity Assessment',
      description:
        "Comprehensive approach to evaluate an organization's digital readiness",
    },
    {
      id: 2,
      value: 'Technology Platform',
      description:
        'Robust & scalable digital foundation for driving growth and efficiency',
    },
    {
      id: 3,
      value: 'Data Analytics & AI Solutions',
      description: 'Unlock actionable insights and discover data monetization',
    },
    {
      id: 4,
      value: 'Cyber Security Solutions',
      description:
        'Expert risk assessments, mitigation plans & tailored security strategies',
    },
    {
      id: 5,
      value: 'Cyber Security Solutions',
      description:
        'Expert risk assessments, mitigation plans & tailored security strategies',
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
              a strong <br /> data foundation and AI capabilities
            </span>
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
        {/* <div
          className="grid grid-cols-1 xl:grid-cols-4 xl:gap-[15px] 2xl:grid-cols-4 
          2xl:gap-[20px]"
        > */}
        <Slider {...settings} ref={sliderRef}>
          {values.map((data, id) => (
            <div
              // w-[390px] h-[389px] rounded-[24px] for small device
              className=" h-[389px] rounded-[24px] xl:h-[364.5px] xl:rounded-[22.5px]  2xl:h-[486px] 2xl:rounded-[30px] bg-blue-500 text-white border-2 border-white mr-4 pl-[20px] pt-[20px] pr-[40px] pb-[32px] xl:px-[18px] xl:pt-[18px] xl:pb-[16.5px] 2xl:px-[24px] 2xl:pt-[18px] 2xl:pb-[16.5px]"
              key={id}
            >
              {/* w-[390px]  xl:w-[300px] 2xl:w-[400px] */}
              <div className=" h-337px  xl:h-[330px]  2xl:h-[440px]">
                {/*w-330px  xl:w-[264px] 2xl:w-[352px]*/}
                <div className="w-full h-[62.4px] xl:w-full xl:h-[58.5px] 2xl:w-full 2xl:h-[78px] flex  justify-between items-center gap-[55.6px] xl:gap-[6.75px] mb-[208.6px] xl:mb-[184.5px] 2xl:mb-[248px]">
                  <h3 className="text-[20px] leading-[24px] font-semibold xl:text-[22.5px] xl:leading-[22.5px] xl:font-semibold 2xl:text-[30px] 2xl:leading-[30px] 2xl:font-semibold">
                    {data.value}
                  </h3>
                  <h3 className="sm:text-[28.8px] sm:leading-[34.85px] sm:font-normal xl:text-[27px] xl:leading-[32.64px] xl:font-normal 2xl:text-[36px] 2xl:leading-[43.57px] 2xl:font-normal">
                    0{data.id}
                  </h3>
                </div>
                <div className="flex  justify-between items-center w-full  ">
                  <h6 className=" h-[66px]  xl:h-[87px] 2xl:h-[116px] text-[18px] leading-[21.78px] font-normal xl:text-[18px] xl:leading-[21.78px] xl:font-normal 2xl:text-[24px] 2xl:leading-[29.05px] 2xl:font-normal tracking-[-0.03em] ">
                    {/*w-[245.6px] xl:w-[230.5px]  2xl:w-[307px] */}
                    {/* margin issue */}
                    {data.description}
                  </h6>
                  <img
                    className="sm:w-[32px] sm:h-[32px] xl:w-[32.25px] xl:h-[32.25px] 2xl:w-[43px] 2xl:h-[43px]"
                    src={img}
                    alt=""
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
    // </div>
  );
};

export default OurSolutions;
