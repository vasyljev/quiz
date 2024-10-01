import dynamic from 'next/dynamic';

const GameScore = dynamic(() => import('../../components/GameScore'), { ssr: false });

const MyComponent = () => {
  return <GameScore />;
};

export default MyComponent;
