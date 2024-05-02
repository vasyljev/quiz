import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { Suspense } from 'react';
import { AnimatePresence } from 'framer-motion';
import RoutesWithAnimation from './components/RoutesWithAnimation';

const LocationProvider = ({ children }) => <AnimatePresence>{children}</AnimatePresence>;

function App() {
  return (
    <>
      <ChakraProvider>
        <BrowserRouter>
          <Suspense>
            <LocationProvider>
              <RoutesWithAnimation />
            </LocationProvider>
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
