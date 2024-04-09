import OurSolutions from '../OurSolutions/OurSolutions';
import OurClient from '../OurClient/OurClient';
import UseCase from '../UseCase/UseCase';
import WeCreateMessage from '../WeCreateMessage/WeCreateMessage';
import Testimonials from '../Testimonials/Testimonials';
import Insight from '../Insight/Insight';
import Footer from '../../../../Component/Shared/Footer/Footer';
// import './Message.css';

const Message = () => {
  return (
    <div className=" text-gradient z-50 absolute w-full left-0  bg-white rounded-t-[32px] xl:rounded-t-[52.5px] 2xl:rounded-t-[70px] text-primary -mt-28 xl:-mt-24 2xl:-mt-25 pt-10 xl:pt-18 2xl:pt-24  ">
      {/* pt-10 xl:pt-18 2xl:pt-24 */}
      <h3 className="px-[20px]  xl:px-[54px] 2xl:px-[72px] max-w-[390px] h-[170px] xl:max-w-[1332px] xl:h-[192px] 2xl:max-w-[1776px] 2xl:h-[255px] text-[25px] sm:text-[28px] sm:leading-[33.89px] sm:font-normal sm:tracking-[-0.03em] xl:text-[55px] xl:leading-[63.75px] xl:font-normal  xl:tracking-[-0.03em] 2xl:text-[80px] 2xl:leading-[85px] 2xl:font-normal 2xl:tracking-[-0.03em] leading-[33.89px] text-[#091F5B] mb-[40px] xl:mb-[72px] 2xl:mb-[96px]">
        {/* sm:max-w-[390px] xl:max-w-[1332px] 2xl:max-w-[1776px] */}
        <span
          className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent"
          style={{ backgroundClip: 'text' }}
        >
          We are a technology platform
        </span>{' '}
        and data solution provider accelerating digital transformations with
        secure and actionable insights .
      </h3>
      {/* <OurClient></OurClient>
      <OurSolutions></OurSolutions>
      <UseCase></UseCase>
      <WeCreateMessage></WeCreateMessage>
      <Testimonials></Testimonials>
      <Insight></Insight> */}
    </div>
  );
};

export default Message;
