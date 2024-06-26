import React, { useState } from 'react';
import './StartPage.scss';
import Welcome from '../Welcome';
import Enter from '../Enter';
import mediaService from '../../services/MediaService';

const StartPage = () => {
  const [pageClass, setPageClass] = useState('');

  const slideWelcomePageAway = () => {
    mediaService.playMainTheme();
    setPageClass('slide-away');
  };

  return (
    <div className="StartPage">
      <div className={`page ${pageClass}`}>
        <Welcome slideAway={slideWelcomePageAway} />
      </div>
      <div className={`behind-page ${pageClass === 'slide-away' ? 'appear' : ''}`}>
        <Enter />
      </div>
    </div>
  );
};

export default StartPage;
