import React, { useState, useEffect } from 'react';
 

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already accepted the cookies
    const cookieAccepted = localStorage.getItem('cookieAccepted');

    if (!cookieAccepted) {
      setIsVisible(true); // Show the banner if not accepted yet
    }
  }, []);

  const acceptCookies = () => {
    // Store the user's preference in localStorage
    localStorage.setItem('cookieAccepted', 'true');
    setIsVisible(false); // Hide the banner after acceptance
  };

  const declineCookies = () => {
    // Store the user's preference in localStorage (optional, for analytics)
    localStorage.setItem('cookieAccepted', 'false');
    setIsVisible(false); // Hide the banner after declining
  };

  return (
    isVisible && (
      <div className="cookie-banner">
        <div className="cookie-banner-content">
          <p>
            We use cookies to improve your experience on our site. By using our site, you
            consent to cookies.
          </p>
          <div className="cookie-actions">
            <button className="accept-btn" onClick={acceptCookies}>
              Accept
            </button>
            <button className="decline-btn" onClick={declineCookies}>
              Decline
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default CookieBanner;
