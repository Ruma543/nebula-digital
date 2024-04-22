import Footer from '../../Component/Shared/Footer/Footer';
import AllContent from './Component/AllContent/AllContent';
import Banner from './Component/Banner/Banner';

const About = () => {
  return (
    <div className="font-primary bg-[#EDF0F5]">
      <div className=" w-full  pt-[85px] px-[20px] 1xs:pt-[85px] 1xs:px-[20px] sm:pt-[85px] sm:px-[20px]  lg:pt-[95px] xl:px-[54px] 2xl:pt-[105px] 2xl:px-[72px] ">
        {/* pt-[100px]  lg:pt-[99.75px]*/}
        <Banner></Banner>
        <AllContent></AllContent>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default About;
