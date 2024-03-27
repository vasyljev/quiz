import './App.css';
import StartPage from './components/StartPage/StartPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
