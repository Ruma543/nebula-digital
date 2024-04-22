import React from 'react';

const ReservNavbar = () => {
  return (
    <div className="mx-auto ">
      <div
        className={`${navbarClasses}  px-[20px] xl:px-[52px] 2xl:px-[72px] absolute  z-50 inset-0 flex justify-between items-center h-[28px] xl:h-[45.75px] mt-[16px] lg:mt-[17px] 2xl:h-[61px] 2xl:mt-[40px]`}

        //   className="navbar mx-auto  max-w-[390px]   mt-[24px] xl:max-w-[1332px]  xl:mx-[54px] xl:mt-[36px] 2xl:max-w-[1776px]  2xl:px-[72px] 2xl:pt-[48px] 2xl:px-[72px]
        // "
      >
        {/* mx-[20px] */}
        <div className="navbar-start ">
          <div className="flex justify-center items-center gap-[3px] ">
            {/* className="flex justify-center items-center gap-[3px] xl:gap-[2.25px] 2xl:gap-[3px] md:max-w-[131.25px] md:h-[30px] xl:max-w-[131.25px]
          xl:h-[30px] 2xl:max-w-[175px] 2xl:h-[40px]" */}
            <div className=" flex justify-center items-center w-[31.77px] h-[31.77px] 1xs:w-[31.77px] 1xs:h-[31.77px] sm:w-[31.77px] sm:h-[31.77px] lg:w-[30px] lg:h-[30px] 2xl:w-[40px] 2xl:h-[40px] ">
              <img src={logoSrc} alt="" />
            </div>
            <h3
              className={`text-sm 1xs:text-[18.15px] 1xs:leading-[13.62px]  tracking-tighter 1xs:font-normal  md:text-[17.14px] md:leading-[12.86px] md:font-normal md:tracking-tighter xl:text-[17.14px] xl:leading-[12.86px] xl:font-normal xl:tracking-tighter 2xl:text-[22.86px] 2xl:leading-[17.14px] 2xl:font-normal 2xl:tracking-tighter  ${titleColor}`}
            >
              nebula digital
            </h3>
          </div>
        </div>
        <div
          className="navbar-center hidden md:flex md:justify-center md:items-center   rounded-nav-link md:px-[40px] md:py-[8px] lg:px-[55px] lg:py-[14px] "
          //
          // md:min-w-[459px] md:h-[43.75px] xl:min-w-[459px] xl:h-[43.75px] 2xl:mix-w-[612px] 2xl:h-[59px]
          style={{
            background:
              'linear-gradient(90deg, rgba(255,255,255,0.3) 30%, rgba(255,255,255,0.05) 70%)',
          }}
        >
          <ul className="flex items-center justify-center md:gap-[30px] lg:gap-[40px] 2xl:gap-[60px] list-none">
            {pages}
          </ul>
        </div>
        <div className="navbar-end  ">
          {/* <Link
            to="/home"
            className="hidden md:w-[132px] md:h-[38.25px]  lg:w-[132px] lmd:h-[38.25px]  md:py-[11.62px] lg:h-[38.25px]  lg:py-[11.62px] 2xl:w-[176px] 2xl:py-[15.5px] 2xl:h-[51px] md:px-[20px]  lg:px-[25px] 2xl:pl-[28px] 2xl:pr-[17.5px]  rounded-button bg-[#0F33E9] text-white  md:flex md:items-center md:justify-center  nav-link"
          >
            <span className=" md:w-[63px] md:h-[15px] lg:w-[63px] lg:h-[15px] xl:w-[63px] xl:h-[15px] 2xl:w-[84px] 2xl:h-[20px] md:text-[13px] lg:text-[16px] lg:leading-[16px] lg:font-light 2xl:text-[18px] 2xl:leading-[18px] 2xl:font-light">
              Let’s talk
            </span>

            <div>
              <img
                className="md:w-[10px] md:h-[12px] lg:w-[15px] lg:h-[12px] 2xl:w-[20px] 2xl:h-[16px]"
                src={svg}
                alt=""
              />
            </div>
          </Link> */}
          <button className=" hidden md:block bg-[#0F33E9] text-white md:px-[16px] md:py-[8px]  lg:px-[21px] lg:py-[11.62px] 2xl:px-[28px] 2xl:py-[15.5px] md:flex md:justify-center md:items-center md:gap-[6.9px] lg:gap-[12px]  2xl:gap-[16px] rounded-[28.8px] lg:rounded-[75px]  2xl:rounded-[100px] ">
            <span className=" md:text-[12px] md:leading-[12px] md:font-normal  lg:text-[15px] lg:leading-[15px] lg:font-normal 2xl:text-[20px] 2xl:leading-[20px] 2xl:font-normal">
              Let’s talk
            </span>
            <span>
              <img
                className="w-[8.64px] h-[8.64px] lg:w-[15px] lg:h-[12px] 2xl:w-[20px] 2xl:h-[16px]"
                src={svg}
                alt=""
              />
            </span>
          </button>
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
              <img className="w-[24px] h-[15.81px]" src={menu1} alt="" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content -ml-10 mt-3 z-[1]  shadow  rounded-box w-30"
              style={{
                background:
                  'linear-gradient(90deg, rgba(255,255,255,0.3) 30%, rgba(255,255,255,0.05) 70%)',
              }}
            >
              {pages}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservNavbar;
