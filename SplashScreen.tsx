import React, { useEffect, useState } from 'react';
import './SplashScreen.css';

interface SplashScreenProps {
  version: string;
  onAnimationEnd: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ version, onAnimationEnd }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      // Give some time for the fade-out animation before calling onAnimationEnd
      setTimeout(onAnimationEnd, 500); 
    }, 3000); // Display for 3 seconds

    return () => clearTimeout(timer);
  }, [onAnimationEnd]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className={`splash-screen ${isVisible ? 'fade-in' : 'fade-out'}`}>
      <img src="/logo.png" alt="CHET Logo" className="splash-logo" />
      <div className="splash-version">v{version}</div>
    </div>
  );
};

export default SplashScreen;
