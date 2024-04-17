// import 'venobox/venobox/venobox.css';
import VenoBox from 'venobox';
import { useEffect } from 'react';

const Video = () => {
  useEffect(() => {
    new VenoBox('.my-video-links', {
      autoplay: false, // Autoplay videos
      bgcolor: '#ffffff', // Background color of the box
      border: '10px', // Border size
      closeColor: '#fff', // Close button color
    });
  }, []);
  return (
    <h3>video</h3>
    // <div>
    //   <div className="hidden lg:block">for lg</div>
    //   <div className="flex lg:hidden">
    //     <h3>1</h3> <h3>2</h3>
    //   </div>
    // </div>
    // <div>
    //   <a
    //     className="my-video-links"
    //     data-vbtype="video"
    //     href="http://vimeo.com/xxx"
    //   >
    //     Vimeo
    //   </a>
    //   <a
    //     className="my-video-links"
    //     data-vbtype="video"
    //     href="https://www.youtube.com/watch?v=3L_occ-1qzo"
    //   >
    //     Youtube
    //   </a>
    //   <a
    //     className="my-video-links"
    //     data-vbtype="video"
    //     data-ratio="1x1"
    //     data-maxwidth="400px"
    //     href="my-video.mp4"
    //   >
    //     MP4
    //   </a>
    // </div>
    // <div>
    //   <a
    //     ClassName="my-video-links"
    //     data-autoplay="true"
    //     data-vbtype="video"
    //     href="http://vimeo.com/xxx"
    //   >
    //     Vimeo
    //   </a>
    //   <a
    //     ClassName="my-video-links"
    //     data-autoplay="true"
    //     data-vbtype="video"
    //     href="http://youtu.be/xxx"
    //   >
    //     Youtube
    //   </a>
    //   <a
    //     ClassName="my-video-links"
    //     data-autoplay="true"
    //     data-vbtype="video"
    //     data-ratio="1x1"
    //     data-maxwidth="400px"
    //     href="my-video.mp4"
    //   >
    //     MP4
    //   </a>
    // </div>
  );
};

export default Video;
