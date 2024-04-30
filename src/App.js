import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { lazy, Suspense } from 'react';

const StartPage = lazy(() => import('./components/StartPage'));
const Question = lazy(() => import('./components/Question'));
const GameScore = lazy(() => import('./components/GameScore'));

function App() {
  return (
    <>
      <ChakraProvider>
        <BrowserRouter>
          <Suspense>
            <Routes>
              <Route path="/" element={<StartPage />} />
              <Route path="/question/:number" element={<Question />} />
              <Route path="/score" element={<GameScore />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </ChakraProvider>
      <audio controls loop preload="auto">
        <source src="/main-theme.mp3" type="audio/mpeg" />
      </audio>
    </>
  );
}

export default App;
