import React from 'react';

const CardInSolutionPage = () => {
  return (
    <div className="flex gap-4 items-center mb-[16px] 1xs:mb-[16px] sm:mb-[16px] lg:mb-[18px] 2xl:mb-[24px]">
      {' '}
      <div className=" h-56 relative ">
        <span className=" absolute bottom-0 ml-1  ">
          <img className=" h-10  w-[2px]" src={line} alt="" />
        </span>{' '}
        <span className="text-center w-[150px] -rotate-90 text-[20px] leading-[24px] font-medium tracking-[-0.03em] text-[#091F5B] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          Value realized
        </span>{' '}
        <span className="rotate-90  top-0 ">
          <img className=" h-10 w-[10px]" src={arrow} alt="" />
        </span>{' '}
      </div>
      <div className="flex flex-col">
        {/* 4 card */}
        <div className="grid grid-cols-2 gap-[9px] 1xs:gap-[9px] sm:gap-[9px] lg:gap-[12px] 2xl:gap-4 mb-[16px]">
          <div
            className="px-[12px] py-[27px] 1xs:px-[12px] 1xs:py-[27px] sm:px-[12px] sm:py-[27px] lg:px-[14px] lg:py-[35px] 2xl:px-[17px] 2xl:py-[46px] "
            style={{
              backgroundImage:
                'linear-gradient(48deg, rgba(0, 178, 255, 1) 10% ,rgba(0, 87, 255, 1) 90% )',
            }}
          >
            <div className="flex flex-col justify-center items-center">
              <h3 className="font-bold tracking-[-0.03em] text-[#FFFFFF] text-[12px] leading-[14px] 1xs:text-[12px] 1xs:leading-[14px] sm:text-[12px] sm:leading-[14px] lg:text-[15px] lg:leading-[18px] 2xl:text-[20px] 2xl:leading-[24.2px]">
                Quick wins
              </h3>
              <p className="text-center font-medium tracking-[-0.03em] text-[#FFFFFF] text-[8px] leading-[9px] 1xs:text-[8px] 1xs:leading-[9px] sm:text-[8px] sm:leading-[9px] lg:text-[9px] lg:leading-[11px] 2xl:text-[12px] 2xl:leading-[15px]">
                Target: Y1 product <br /> development
              </p>
            </div>
          </div>
          <div
            className="px-[12px] py-[27px] 1xs:px-[12px] 1xs:py-[27px] sm:px-[12px] sm:py-[27px] lg:px-[14px] lg:py-[35px] 2xl:px-[17px] 2xl:py-[46px] "
            style={{
              backgroundImage:
                'linear-gradient(48deg, rgba(0, 178, 255, 1) 10% ,rgba(0, 87, 255, 1) 90% )',
            }}
          >
            <div className="flex flex-col justify-center items-center">
              {' '}
              <h3 className="font-bold tracking-[-0.03em] text-[#FFFFFF] text-[12px] leading-[14px] 1xs:text-[12px] 1xs:leading-[14px] sm:text-[12px] sm:leading-[14px] lg:text-[15px] lg:leading-[18px] 2xl:text-[20px] 2xl:leading-[24.2px]">
                Differentiators
              </h3>
              <p className="text-center font-medium tracking-[-0.03em] text-[#FFFFFF] text-[8px] leading-[9px] 1xs:text-[8px] 1xs:leading-[9px] sm:text-[8px] sm:leading-[9px] lg:text-[9px] lg:leading-[11px] 2xl:text-[12px] 2xl:leading-[15px]">
                Target: Year 2+ to drive <br /> platform value and innovation
              </p>
            </div>
          </div>
          <div
            className="px-[12px] py-[27px] 1xs:px-[12px] 1xs:py-[27px] sm:px-[12px] sm:py-[27px] lg:px-[14px] lg:py-[35px] 2xl:px-[17px] 2xl:py-[46px]"
            style={{
              backgroundImage:
                'linear-gradient(48deg, rgba(0, 178, 255, 1) 10% ,rgba(0, 87, 255, 1) 90% )',
            }}
          >
            <div className="flex flex-col justify-center items-center">
              <h3 className="font-bold tracking-[-0.03em] text-[#FFFFFF] text-[12px] leading-[14px] 1xs:text-[12px] 1xs:leading-[14px] sm:text-[12px] sm:leading-[14px] lg:text-[15px] lg:leading-[18px] 2xl:text-[20px] 2xl:leading-[24.2px]">
                Ad Hoc
              </h3>
              <p className="text-center font-medium tracking-[-0.03em] text-[#FFFFFF] text-[8px] leading-[9px] 1xs:text-[8px] 1xs:leading-[9px] sm:text-[8px] sm:leading-[9px] lg:text-[9px] lg:leading-[11px] 2xl:text-[12px] 2xl:leading-[15px]">
                Target: Driven by competitive <br /> landscape
              </p>
            </div>
          </div>
          <div
            className="px-[12px] py-[27px] 1xs:px-[12px] 1xs:py-[27px] sm:px-[12px] sm:py-[27px] lg:px-[14px] lg:py-[35px] 2xl:px-[17px] 2xl:py-[46px] "
            style={{
              backgroundImage:
                'linear-gradient(48deg, rgba(0, 178, 255, 1) 10% ,rgba(0, 87, 255, 1) 90% )',
            }}
          >
            <div className="flex flex-col justify-center items-center">
              {' '}
              <h3 className="font-bold tracking-[-0.03em] text-[#FFFFFF] text-[12px] leading-[14px] 1xs:text-[12px] 1xs:leading-[14px] sm:text-[12px] sm:leading-[14px] lg:text-[15px] lg:leading-[18px] 2xl:text-[20px] 2xl:leading-[24.2px]">
                Deprioritize
              </h3>
              <p className="text-center font-medium tracking-[-0.03em] text-[#FFFFFF] text-[8px] leading-[9px] 1xs:text-[8px] 1xs:leading-[9px] sm:text-[8px] sm:leading-[9px] lg:text-[9px] lg:leading-[11px] 2xl:text-[12px] 2xl:leading-[15px]">
                High Effort Low value features
              </p>
            </div>
          </div>
        </div>
        {/* bottom virticle line */}
        <div className="flex justify-center items-center gap-[32px] ">
          <span className="   ">
            <img className="rotate-90 h-20  w-[2px] " src={line} alt="" />
          </span>{' '}
          <span className="text-center w-[150px]  text-[20px] leading-[24px] font-medium tracking-[-0.03em] text-[#091F5B]  ">
            Effort to build
          </span>{' '}
          <span className=" ">
            <img className="rotate-90 h-20  w-[10px] " src={arrow} alt="" />
          </span>{' '}
        </div>
      </div>
      {/* <div className="grid grid-cols-2 gap-[9px] 1xs:gap-[9px] sm:gap-[9px] lg:gap-[12px] 2xl:gap-4 mb-[16px]">
                  <div
                    className="px-[12px] py-[27px] 1xs:px-[12px] 1xs:py-[27px] sm:px-[12px] sm:py-[27px] lg:px-[14px] lg:py-[35px] 2xl:px-[17px] 2xl:py-[46px] "
                    style={{
                      backgroundImage:
                        'linear-gradient(48deg, rgba(0, 178, 255, 1) 10% ,rgba(0, 87, 255, 1) 90% )',
                    }}
                  >
                    <div className="flex flex-col justify-center items-center">
                      <h3 className="font-bold tracking-[-0.03em] text-[#FFFFFF] text-[12px] leading-[14px] 1xs:text-[12px] 1xs:leading-[14px] sm:text-[12px] sm:leading-[14px] lg:text-[15px] lg:leading-[18px] 2xl:text-[20px] 2xl:leading-[24.2px]">
                        Quick wins
                      </h3>
                      <p className="text-center font-medium tracking-[-0.03em] text-[#FFFFFF] text-[8px] leading-[9px] 1xs:text-[8px] 1xs:leading-[9px] sm:text-[8px] sm:leading-[9px] lg:text-[9px] lg:leading-[11px] 2xl:text-[12px] 2xl:leading-[15px]">
                        Target: Y1 product <br /> development
                      </p>
                    </div>
                  </div>
                  <div
                    className="px-[12px] py-[27px] 1xs:px-[12px] 1xs:py-[27px] sm:px-[12px] sm:py-[27px] lg:px-[14px] lg:py-[35px] 2xl:px-[17px] 2xl:py-[46px] "
                    style={{
                      backgroundImage:
                        'linear-gradient(48deg, rgba(0, 178, 255, 1) 10% ,rgba(0, 87, 255, 1) 90% )',
                    }}
                  >
                    <div className="flex flex-col justify-center items-center">
                      {' '}
                      <h3 className="font-bold tracking-[-0.03em] text-[#FFFFFF] text-[12px] leading-[14px] 1xs:text-[12px] 1xs:leading-[14px] sm:text-[12px] sm:leading-[14px] lg:text-[15px] lg:leading-[18px] 2xl:text-[20px] 2xl:leading-[24.2px]">
                        Differentiators
                      </h3>
                      <p className="text-center font-medium tracking-[-0.03em] text-[#FFFFFF] text-[8px] leading-[9px] 1xs:text-[8px] 1xs:leading-[9px] sm:text-[8px] sm:leading-[9px] lg:text-[9px] lg:leading-[11px] 2xl:text-[12px] 2xl:leading-[15px]">
                        Target: Year 2+ to drive <br /> platform value and
                        innovation
                      </p>
                    </div>
                  </div>
                  <div
                    className="px-[12px] py-[27px] 1xs:px-[12px] 1xs:py-[27px] sm:px-[12px] sm:py-[27px] lg:px-[14px] lg:py-[35px] 2xl:px-[17px] 2xl:py-[46px]"
                    style={{
                      backgroundImage:
                        'linear-gradient(48deg, rgba(0, 178, 255, 1) 10% ,rgba(0, 87, 255, 1) 90% )',
                    }}
                  >
                    <div className="flex flex-col justify-center items-center">
                      <h3 className="font-bold tracking-[-0.03em] text-[#FFFFFF] text-[12px] leading-[14px] 1xs:text-[12px] 1xs:leading-[14px] sm:text-[12px] sm:leading-[14px] lg:text-[15px] lg:leading-[18px] 2xl:text-[20px] 2xl:leading-[24.2px]">
                        Ad Hoc
                      </h3>
                      <p className="text-center font-medium tracking-[-0.03em] text-[#FFFFFF] text-[8px] leading-[9px] 1xs:text-[8px] 1xs:leading-[9px] sm:text-[8px] sm:leading-[9px] lg:text-[9px] lg:leading-[11px] 2xl:text-[12px] 2xl:leading-[15px]">
                        Target: Driven by competitive <br /> landscape
                      </p>
                    </div>
                  </div>
                  <div
                    className="px-[12px] py-[27px] 1xs:px-[12px] 1xs:py-[27px] sm:px-[12px] sm:py-[27px] lg:px-[14px] lg:py-[35px] 2xl:px-[17px] 2xl:py-[46px] "
                    style={{
                      backgroundImage:
                        'linear-gradient(48deg, rgba(0, 178, 255, 1) 10% ,rgba(0, 87, 255, 1) 90% )',
                    }}
                  >
                    <div className="flex flex-col justify-center items-center">
                      {' '}
                      <h3 className="font-bold tracking-[-0.03em] text-[#FFFFFF] text-[12px] leading-[14px] 1xs:text-[12px] 1xs:leading-[14px] sm:text-[12px] sm:leading-[14px] lg:text-[15px] lg:leading-[18px] 2xl:text-[20px] 2xl:leading-[24.2px]">
                        Deprioritize
                      </h3>
                      <p className="text-center font-medium tracking-[-0.03em] text-[#FFFFFF] text-[8px] leading-[9px] 1xs:text-[8px] 1xs:leading-[9px] sm:text-[8px] sm:leading-[9px] lg:text-[9px] lg:leading-[11px] 2xl:text-[12px] 2xl:leading-[15px]">
                        High Effort Low value features
                      </p>
                    </div>
                  </div>
                </div> */}
    </div>
  );
};

export default CardInSolutionPage;
