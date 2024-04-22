import React, { useEffect } from 'react';
import VenoBox from 'venobox';
// import venobox.css from node_module
import '../../../../../../node_modules/venobox/dist/venobox.css';
import playBtn from '../../../../../../public/Group 1171275979.png';
const VideoModal = ({ data }) => {
  console.log(data);
  const { video } = data || {};
  useEffect(() => {
    new VenoBox({
      selector: '.my-video-links',
    });
  }, []);

  return (
    <div className="rounded-[30px]">
      <a
        className="my-video-links w-full rounded-[30px]"
        data-autoplay="true"
        data-vbtype="video"
        href={video}
      >
        <img className="w-25 " src={playBtn} alt="" />
      </a>
    </div>
  );
};

export default VideoModal;
