import dynamic from 'next/dynamic';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

const StartPage = dynamic(() => import('../components/StartPage'), { ssr: false });

const WelcomeComponent = () => {
  const queryClient = new QueryClient();
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <StartPage />;
    </HydrationBoundary>
  );
};

export default WelcomeComponent;
