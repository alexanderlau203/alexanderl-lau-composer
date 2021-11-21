import React from 'react';
import { 
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Compositions from './pages/Compositions';
import CompositionDetails from './pages/CompositionDetails';

function App() {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/compositions" element={<Compositions />} />
        <Route path="/compositions/:piece" element={<CompositionDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
