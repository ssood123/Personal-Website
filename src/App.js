import './App.scss'
import { Route, Routes, useLocation } from 'react-router-dom'
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import Home from './containers/home';
import About from './containers/about';
import Contact from './containers/contact';
import Portfolio from './containers/portfolio';
import Resume from './containers/resume';
import Skills from './containers/skills';
import Navbar from './components/navBar';
import particles from './utils/particles';

function App() {
  const location = useLocation();
  const handleInit = async (main) => {
    await loadFull(main);
  }

  return (
    <div className="App">
      {
        (location.pathname.includes("/personal-website") || window.location.pathname.includes("/personal-website")) &&
        <Particles id="particles" options={particles} init={handleInit} />
      }
      <Navbar />
      <div className="App__main-page-content">
        <Routes>
          <Route path="/personal-website" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}


export default App;
