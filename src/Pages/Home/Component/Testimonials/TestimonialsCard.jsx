import React from 'react';
import ReactPlayer from 'react-player';

const TestimonialsCard = ({ data, renderPlayButton, index, playingIndex }) => {
  const { id, video } = data | {};
  return (
    <div className="relative border-8 border-white rounded-[30px]" key={index}>
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
  );
};

export default TestimonialsCard;
