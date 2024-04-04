import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StartPage from './components/StartPage';
import Question from './components/Question';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/question/:number" element={<Question />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;