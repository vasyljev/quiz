'use client';

import dynamic from 'next/dynamic';

const StartPage = dynamic(() => import('../components/StartPage'), { ssr: false });

const WelcomeComponent = () => {
  return <StartPage />;
};

export default WelcomeComponent;
