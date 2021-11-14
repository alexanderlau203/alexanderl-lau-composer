import React from 'react';
import { 
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
