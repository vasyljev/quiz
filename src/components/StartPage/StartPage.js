'use client';

import React, { useState } from 'react';
import './StartPage.scss';
import Welcome from '../Welcome';
import Enter from '../Enter';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

const StartPage = () => {
  const [pageClass, setPageClass] = useState('');
  const queryClient = new QueryClient();

  const slideWelcomePageAway = () => {
    // mediaService.playMainTheme();
    setPageClass('slide-away');
  };

  return (
    <div className="StartPage">
      <div className={`page ${pageClass}`}>
        <Welcome slideAway={slideWelcomePageAway} />
      </div>
      <div className={`behind-page ${pageClass === 'slide-away' ? 'appear' : ''}`}>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <Enter />
        </HydrationBoundary>
      </div>
    </div>
  );
};

export default StartPage;
