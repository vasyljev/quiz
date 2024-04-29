import React, { useEffect, useState } from 'react';
import './StartPage.scss';
import Welcome from '../Welcome';
import Enter from '../Enter';

const StartPage = () => {
  const [pageClass, setPageClass] = useState('');
  useEffect(() => {
    localStorage.clear();
    const timer = setTimeout(() => {
      setPageClass('slide-away');
    }, 15000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="StartPage">
      <div className={`page ${pageClass}`}>
        <Welcome />
      </div>
      <div className={`behind-page ${pageClass === 'slide-away' ? 'appear' : ''}`}>
        <Enter />
      </div>
    </div>
  );
};

export default StartPage;
