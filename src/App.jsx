import { Route, Routes } from 'react-router-dom';
import './components/styles/main.css';
import NavBar from './components/NavBar';
import Home from './components/pages/Home';
import About from './components/pages/About';

function App() {
  return (
    <div className="app-wrapping-container">
      <NavBar />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/about" index element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
