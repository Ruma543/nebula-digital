import React, { useState } from 'react';
import './Navbar.css';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import logo1 from '../../../../public/Group 1171276012 (2).png';
import logo2 from '../../../../public/Group 1171276012 (3).png';
import svg from '../../../../public/SVG.png';
import menu1 from '../../../../public/Vector.png';
import menu2 from '../../../../public/menu_FILL0_wght200_GRAD0_opsz24 1.png';

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const logoSrc = isHomePage ? logo1 : logo2;
  const titleColor = isHomePage ? 'text-white' : 'text-[#091F5B]';
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const pages = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? 'nav-link text-white xl:font-medium xl:text-[15px] xl:leading-[21px] 2xl:font-medium 2xl:text-[20px] 2xl:leading-[28px] xl:my-[10px] 2xl:my-[14px]'
              : 'nav-link text-[#091f5bb3]  xl:font-medium xl:text-[15px] xl:leading-[12px] 2xl:font-medium 2xl:text-[20px] 2xl:leading-[16px] xl:my-[14.88px] 2xl:my-[20.5px]'
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/solutions"
          className={({ isActive }) =>
            isActive
              ? 'nav-link text-[#091F5B] xl:font-medium xl:text-[15px] xl:leading-[21px] 2xl:font-medium 2xl:text-[20px] 2xl:leading-[28px] xl:my-[12px] 2xl:my-[16px]'
              : 'nav-link text-[#091f5bb3]  xl:font-medium xl:text-[15px] xl:leading-[12px] 2xl:font-medium 2xl:text-[20px] 2xl:leading-[16px] xl:my-[16.88px] 2xl:my-[22.5px]'
          }
        >
          Solutions
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/useCases"
          className={({ isActive }) =>
            isActive
              ? 'nav-link text-[#091F5B]  xl:font-medium xl:text-[15px] xl:leading-[21px] 2xl:font-medium 2xl:text-[20px] 2xl:leading-[28px] xl:my-[12px] 2xl:my-[16px]'
              : 'nav-link text-[#091f5bb3]  xl:font-medium xl:text-[15px] xl:leading-[12px] 2xl:font-medium 2xl:text-[20px] 2xl:leading-[16px] xl:my-[16.88px] 2xl:my-[22.5px]'
          }
        >
          Use Cases
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? 'nav-link text-[#091F5B] xl:font-medium xl:text-[15px] xl:leading-[21px] 2xl:font-medium 2xl:text-[20px] 2xl:leading-[28px] xl:my-[12px] 2xl:my-[16px]'
              : 'nav-link text-[#091f5bb3] xl:font-medium xl:text-[15px] xl:leading-[12px] 2xl:font-medium 2xl:text-[20px] 2xl:leading-[16px] xl:my-[16.88px] 2xl:my-[22.5px]'
          }
        >
          About
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="mx-auto ">
      <div
        className=" navbar px-[20px] xl:px-[52px] 2xl:px-[72px] fixed z-50 inset-0 flex justify-between items-center h-[28px] xl:h-[45.75px] mt-[16px] xl:mt-[28px] 2xl:h-[61px] 2xl:mt-[40px]  "
        //   className="container mx-auto  max-w-[390px]   mt-[24px] xl:max-w-[1332px]  xl:mx-[54px] xl:mt-[36px] 2xl:max-w-[1776px]  2xl:px-[72px] 2xl:pt-[48px] 2xl:px-[72px]
        // "
      >
        {/* mx-[20px] */}
        <div className="navbar-start ">
          <div className="flex justify-center items-center gap-[3px] ">
            {/* className="flex justify-center items-center gap-[3px] xl:gap-[2.25px] 2xl:gap-[3px] md:max-w-[131.25px] md:h-[30px] xl:max-w-[131.25px]
          xl:h-[30px] 2xl:max-w-[175px] 2xl:h-[40px]" */}
            <div className=" flex justify-center items-center w-[22px] h-[22px] md:w-[30px] md:h-[30px] xl:w-[30px] xl:h-[30px] 2xl:w-[40px] 2xl:h-[40px] ">
              <img src={logoSrc} alt="" />
            </div>
            <h3
              className={`text-sm  md:text-[17.14px] md:leading-[12.86px] md:font-normal md:tracking-tighter xl:text-[17.14px] xl:leading-[12.86px] xl:font-normal xl:tracking-tighter 2xl:text-[22.86px] 2xl:leading-[17.14px] 2xl:font-normal 2xl:tracking-tighter  ${titleColor}`}
            >
              nebula digital
            </h3>
          </div>
        </div>
        <div
          className="navbar-center hidden md:flex justify-center items-center  px-12 rounded-nav-link md:min-w-[459px] md:h-[43.75px] xl:min-w-[459px] xl:h-[43.75px] 2xl:mix-w-[612px] 2xl:h-[59px] "
          style={{
            background:
              'linear-gradient(90deg, rgba(255,255,255,0.3) 30%, rgba(255,255,255,0.05) 70%)',
          }}
        >
          <ul className="flex items-center justify-center md:gap-[30px] xl:gap-[40px] 2xl:gap-[60px] list-none">
            {pages}
          </ul>
        </div>
        <div className="navbar-end  ">
          <Link
            to="/home"
            className="hidden md:max-w-[132px] md:h-[38.25px] xl:max-w-[132px] xl:h-[38.25px] 2xl:max-w-[176px] 2xl:h-[51px] xl:py-[11.62px] 2xl:py-[15.5px] xl:px-[21px] 2xl:pl-[28px] 2xl:pr-[17.5px]  rounded-button bg-[#0F33E9] text-white  md:flex items-center justify-center md:gap-[12px] xl:gap-[12px] 2xl:gap-[16px] nav-link"
          >
            <span className="xl:w-[63px] xl:h-[15px] 2xl:w-[84px] 2xl:h-[20px] md:text-[13px] xl:text-[15px] xl:leading-[15px] xl:font-light 2xl:text-[20px] 2xl:leading-[20px] 2xl:font-light">
              Let’s talk
            </span>

            <div>
              <img
                className="xl:w-[15px] xl:h-[12px] 2xl:w-[20px] 2xl:h-[16px]"
                src={svg}
                alt=""
              />
            </div>
          </Link>
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
              <img className="w-[18.67px] h-[12.29px]" src={menu1} alt="" />
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

export default Navbar;
