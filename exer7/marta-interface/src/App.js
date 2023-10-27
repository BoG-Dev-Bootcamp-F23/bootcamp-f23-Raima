import './App.css';
import LinesPage from './pages/LinesPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/lines/:color" element={<LinesPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;