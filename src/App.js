import React from 'react';
import { 
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Compositions from './pages/Compositions';
import CompositionDetails from './pages/CompositionDetails';
import ReactGA from 'react-ga4';

ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_ID)

function App() {
  const location = useLocation()

  React.useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname })
    console.log(location.pathname)
  }, [location])

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/compositions" element={<Compositions />} />
      <Route path="/compositions/:piece" element={<CompositionDetails />} />
    </Routes>
  );
}

export default App;
