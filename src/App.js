import './App.css';
import StartPage from './components/StartPage/StartPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Question from './components/Question/Question';

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
