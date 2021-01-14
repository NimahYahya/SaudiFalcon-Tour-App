import React, { useEffect, useState } from 'react';
import { FaArrowAltCircleUp } from '@react-icons/all-files/fa/FaArrowAltCircleUp';
import '../style/ScrollToUp.css';

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scorlled upto given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 1000) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <div onClick={scrollToTop}>
          <i>
            <FaArrowAltCircleUp
              size={30}
              color={'#af8447'}
            ></FaArrowAltCircleUp>
          </i>
        </div>
      )}
    </div>
  );
}

export default ScrollToTop;
