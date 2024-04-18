import React, { useEffect } from 'react';
import VenoBox from 'venobox';
import '../../../../../node_modules/venobox/dist/venobox.css';
const PlayerVeno = () => {
  useEffect(() => {
    new VenoBox({
      selector: '.my-video-links',
    });
  }, []);
  const values = [
    {
      id: 1,
      video: 'https://www.youtube.com/watch?v=qWUZs-c8-0s',
      img: '../../../../public/banner.webp',
    },
    {
      id: 2,
      video: 'https://www.youtube.com/watch?v=vZgyWfmw_Kw',
      img: '../../../../public/banner.webp',
    },
    {
      id: 3,
      video: 'https://www.youtube.com/watch?v=8UmxIVmIUiw',
      img: '../../../../public/banner.webp',
    },
  ];
  return (
    <div>
      <a
        className="my-video-links"
        data-autoplay="true"
        data-vbtype="video"
        href="https://www.youtube.com/watch?v=qWUZs-c8-0s"
      >
        Youtube
      </a>
    </div>
  );
};

export default PlayerVeno;
