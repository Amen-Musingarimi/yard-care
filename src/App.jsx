import { Route, Routes } from 'react-router-dom';
import './components/styles/main.css';
import NavBar from './components/NavBar';
import Home from './components/pages/Home';

function App() {
  return (
    <div className="app-wrapping-container">
      <NavBar />
      <Routes>
        <Route path="/" index element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
