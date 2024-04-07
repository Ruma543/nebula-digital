import React from 'react';
import Navbar from '../Component/Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Component/Shared/Footer/Footer';

const Main = () => {
  return (
    <div className="mx-auto">
      {/* sm:max-w-[640px] md:max-w-[1024px] xl:max-w-[1440px] 2xl:max-w-[1920px] */}
      <Navbar></Navbar>
      <Outlet></Outlet>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default Main;
