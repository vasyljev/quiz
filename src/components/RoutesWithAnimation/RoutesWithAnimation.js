import React, { lazy } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

const StartPage = lazy(() => import('../StartPage'));
const Question = lazy(() => import('../Question'));
const GameScore = lazy(() => import('../GameScore'));

const RoutesWithAnimation = () => {
  const location = useLocation();
  return (
    <Routes location={location} key={location.key}>
      <Route path="/" element={<StartPage />} />
      <Route path="/question/:number" element={<Question />} />
      <Route path="/score" element={<GameScore />} />
    </Routes>
  );
};

export default RoutesWithAnimation;
