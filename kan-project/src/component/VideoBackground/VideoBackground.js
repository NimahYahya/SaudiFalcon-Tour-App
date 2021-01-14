import React from 'react';
import SaudiTour from './SaudiTour.mp4';
const VideoBackground = () => {
  return (
    <div
      className="video-container"
      style={{ width: '80%', margin: '0 auto 20px auto' }}
    >
      <video autoPlay loop muted style={{ width: '100%' }}>
        <source src={SaudiTour} type="video/mp4"></source>
      </video>
    </div>
  );
};

export default VideoBackground;
