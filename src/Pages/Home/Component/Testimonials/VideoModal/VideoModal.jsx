import React from 'react';
import img from '../../../../../../public/Frame.png';

const VideoModal = ({ isOpen, onClose, videoUrl }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-75 z-50">
      <div className="bg-white rounded-lg overflow-hidden max-w-lg w-full">
        <div className="relative pb-9/16">
          <iframe
            title="Video"
            src={videoUrl}
            className="absolute top-0 left-0 w-full h-full"
            frameBorder="0"
            allowFullScreen
            style={{ width: '100%', height: '100%' }}
          ></iframe>
        </div>
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          {/* <img src={img} alt="" /> */}
        </button>
      </div>
    </div>
  );
};

export default VideoModal;
