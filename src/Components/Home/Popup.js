import React, { useEffect, useState } from 'react';
import './Popus.css';

const Popup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    // Automatically close the popup after 10 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 10000); // 10000ms = 10 seconds

    // Cleanup the timer when the component is unmounted or isVisible changes
    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div>
        <div className="popup-overlay" id="popup">
          <div className="popup-content">
            <button className="close-btn" onClick={closePopup} style={{ color: 'white' }}>×</button>
          </div>
        </div>
      </div>
    )
  );
};

export default Popup;
