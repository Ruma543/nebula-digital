import React, { useState } from 'react';
import './Navbar.css';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import logo1 from '../../../../public/Group 1171276012 (2).png';
import logo2 from '../../../../public/Group 1171276012 (3).png';
import svg from '../../../../public/SVG (4).png';
import menu1 from '../../../../public/menu_FILL0_wght200_GRAD0_opsz24 1 (1).png';
import menu2 from '../../../../public/Vector (4).png';

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const logoSrc = isHomePage ? logo1 : logo2;
  const titleColor = isHomePage ? 'text-white' : 'text-[#091F5B]';
  const [menuOpen, setMenuOpen] = useState(false);
  const gradientColor = isHomePage
    ? 'linear-gradient(90deg, rgba(255,255,255,0.3) 30%, rgba(255,255,255,0.05) 70%)'
    : 'linear-gradient(90deg, rgba(0,102,255,0.1) 30%, rgba(0,102,255,0.1) 70%)';

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const navbarClasses = isHomePage ? 'navbar' : 'navbar navbar-transparent';
  const pages = (
    <>
      <li>
        <NavLink
          to="/"
          className={
            ({ isActive }) =>
              isActive
                ? 'nav-link text-white lg:font-light lg:text-[15px] lg:leading-[21px] 2xl:font-normal 2xl:text-[20px] 2xl:leading-[28px] '
                : // lg:my-[12px] 2xl:my-[14px]
                  'nav-link text-[#091f5bb3]  lg:font-Light lg:text-[15px] lg:leading-[12px] 2xl:font-medium 2xl:text-[20px] 2xl:leading-[16px] '
            // lg:my-[16.88px] 2xl:my-[20.5px]
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/solutions"
          className={
            ({ isActive }) =>
              isActive
                ? 'nav-link text-[#091F5B] lg:font-light lg:text-[15px] lg:leading-[21px] 2xl:font-medium 2xl:text-[20px] 2xl:leading-[28px] '
                : // lg:my-[12px] 2xl:my-[16px]
                  'nav-link text-[#091f5bb3] lg:font-light lg:text-[15px] lg:leading-[12px] 2xl:font-medium 2xl:text-[20px] 2xl:leading-[16px] '
            // lg:my-[16.88px] 2xl:my-[20.5px]
            //     ? 'nav-link text-[#091F5B] lg:font-light lg:text-[15px] lg:leading-[21px] 2xl:font-medium 2xl:text-[20px] 2xl:leading-[28px] '
            //     : // lg:my-[12px] 2xl:my-[16px]
            //       'nav-link text-[#091f5bbf]  lg:font-light lg:text-[15px] lg:leading-[12px] 2xl:font-normal 2xl:text-[20px] 2xl:leading-[16px] '
            // // lg:my-[16.88px] 2xl:my-[20.5px]
          }
        >
          Solutions
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/useCases"
          className={
            ({ isActive }) =>
              isActive
                ? 'nav-link text-[#091F5B]  lg:font-light lg:text-[15px] lg:leading-[21px] 2xl:font-medium 2xl:text-[20px] 2xl:leading-[28px] '
                : // lg:my-[12px] 2xl:my-[16px]
                  'nav-link text-[#091f5bb3]  lg:font-light lg:text-[15px] lg:leading-[12px] 2xl:font-medium 2xl:text-[20px] 2xl:leading-[16px] '
            // lg:my-[16.88px] 2xl:my-[20.5px]
          }
        >
          Use Cases
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={
            ({ isActive }) =>
              isActive
                ? 'nav-link text-[#091F5B] lg:font-light lg:text-[15px] lg:leading-[21px] 2xl:font-medium 2xl:text-[20px] 2xl:leading-[28px] '
                : // lg:my-[12px] 2xl:my-[16px]
                  'nav-link text-[#091f5bb3] lg:font-light lg:text-[15px] lg:leading-[12px] 2xl:font-medium 2xl:text-[20px] 2xl:leading-[16px] '
            // lg:my-[16.88px] 2xl:my-[20.5px]
          }
        >
          About
        </NavLink>
      </li>
    </>
  );

  const menuImg = isHomePage ? menu1 : menu2;
  return (
    <div className="mx-auto ">
      <div
        className={`${navbarClasses}  px-[20px] xl:px-[52px] 2xl:px-[72px] absolute  z-50 inset-0 flex justify-between items-center h-[28px] xl:h-[45.75px] mt-[16px] lg:mt-[17px] 2xl:h-[61px] xl:mt-[20px]`}
      >
        {/* mx-[20px] */}
        <div className="navbar-start ">
          <div className="flex justify-center items-center gap-[3px] ">
            <div className=" flex justify-center items-center w-[40px] h-[40px] 1xs:w-[40px] 1xs:h-[40px] sm:w-[40px] sm:h-[40px] lg:w-[30px] lg:h-[30px] 2xl:w-[40px] 2xl:h-[40px] ">
              {/* sm:w-[31.77px] sm:h-[31.77px] */}
              <img src={logoSrc} alt="" />
            </div>
            <h3
              className={` text-[24px] leading-[20px] font-medium  1xs:text-[24px] 1xs:leading-[20px] 1xs:font-medium sm:text-[24px] sm:leading-[20px] sm:font-medium   tracking-tighter  md:text-[17.14px] md:leading-[12.86px] md:font-medium md:tracking-tighter xl:text-[24px] xl:leading-[16px] xl:font-medium xl:tracking-tighter 2xl:text-[22.86px] 2xl:leading-[17.14px] 2xl:font-medium 2xl:tracking-tighter  ${titleColor}`}
            >
              nebula digital
            </h3>
          </div>
        </div>
        <div
          className="navbar-center hidden md:flex md:justify-center md:items-center   rounded-nav-link md:px-[40px] md:py-[8px] lg:px-[55px] lg:py-[16px] "
          //
          // md:min-w-[459px] md:h-[43.75px] xl:min-w-[459px] xl:h-[43.75px] 2xl:mix-w-[612px] 2xl:h-[59px]
          style={{
            background: gradientColor,
            // background:
            //   'linear-gradient(90deg, rgba(255,255,255,0.3) 30%, rgba(255,255,255,0.05) 70%)',
          }}
        >
          <ul className="flex items-center justify-center md:gap-[30px] lg:gap-[40px] 2xl:gap-[60px] list-none">
            {pages}
          </ul>
        </div>
        <div className="navbar-end  ">
          <button className=" hidden  bg-[#0F33E9] text-white md:px-[16px] md:py-[8px]  lg:px-[21px] lg:py-[11.62px] 2xl:px-[28px] 2xl:py-[15.5px] md:flex md:justify-center md:items-center md:gap-[6.9px] lg:gap-[12px]  2xl:gap-[16px] rounded-[28.8px] lg:rounded-[75px]  2xl:rounded-[100px] ">
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
            <div tabIndex={0} role="button" className=" md:hidden">
              <img className="w-[30px] h-[22px]" src={menuImg} alt="" />
              {/* "w-[24px] h-[15.81px] */}
            </div>
            {/* <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content -ml-10  mt-3 z-[1]  shadow  rounded-box w-30"
              // 
              style={{
                background:
                  'linear-gradient(90deg, rgba(255,255,255,0.3) 30%, rgba(255,255,255,0.05) 70%)',
              }}
            >
              {pages}
            </ul> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
