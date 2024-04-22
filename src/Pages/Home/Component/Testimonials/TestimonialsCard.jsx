import React from 'react';
import ReactPlayer from 'react-player';
import PlayerVeno from '../../../About/Component/PlayerVeno/PlayerVeno';
// import PlayerVeno from '../../../About/Component/PlayerVeno/PlayerVeno';
import img from '../../../../../public/banner.webp';
import playBtn from '../../../../../public/Group 1171275979.png';
import VideoModal from './VideoModal/VideoModal';

const TestimonialsCard = ({ data, renderPlayButton, index, playingIndex }) => {
  const { id, video, videoImg } = data | {};
  console.log(data.videoImg);
  return (
    <div className="relative border-8 border-white rounded-[30px]" key={index}>
      <div className=" w-full  h-[211px] md:h-[393px] xl:h-[393px] 2xl:h-[524px] rounded-[24px] xl:rounded-[22px] 2xl:rounded-[30px] relative">
        <img
          className=" w-full h-full rounded-[24px] xl:rounded-[22px] 2xl:rounded-[30px]"
          src={data.videoImg}
          alt=""
        />
        <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <VideoModal data={data}></VideoModal>
        </button>
      </div>
    </div>
  );
};

export default TestimonialsCard;
//  {/* <PlayerVeno></PlayerVeno> */}
//         {/* <ReactPlayer
//           url={data.video}
//           width="100%"
//           height="100%"
//           volume={playingIndex === index ? 1 : 0}
//           muted={playingIndex !== index}
//           playing={playingIndex === index}
//           controls={false}
//           style={{ borderRadius: 30 }}
//         /> */}
//         {/* {!playingIndex && renderPlayButton(index)} */}
// {
//   /* {playingIndex === index && !playingIndex && renderPlayButton(index)} */
// }
