import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StartPage from './components/StartPage';
import Question from './components/Question';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/question/:number" element={<Question />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
