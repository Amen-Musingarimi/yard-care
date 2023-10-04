import { Route, Routes } from 'react-router-dom';
import './components/styles/main.css';
import NavBar from './components/NavBar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import ServicesList from './components/pages/ServicesList';
import MultiStepForm from './components/pages/ServiceForms/MultiStepForm';

function App() {
  return (
    <div className="app-wrapping-container">
      <NavBar />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/about" index element={<About />} />
        <Route path="/services" index element={<ServicesList />} />
        <Route path="/book" index element={<MultiStepForm />} />
      </Routes>
    </div>
  );
}

export default App;
