import { Route, Routes, BrowserRouter, useLocation } from 'react-router-dom';
import './App.scss';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import Home from './containers/home';
import About from './containers/about';
import Contact from './containers/contact';
import Projects from './containers/projects';
import Skills from './containers/skills';
import Resume from './containers/resume';
import Navbar from './components/navbar';
import particles from './utils.js/particles';

function App() {

  const Location = useLocation();
  // console.log(Location);
  const renderParticles = Location.pathname == '/';

  const handleInit = async (engine) => {
    if (!engine) return;
    try {
      await loadSlim(engine);
    } catch (error) {
      console.error("Failed to load tsparticles:", error);
    }
  };

  return (
    <div className="App">
      {/* particles js */}

      {renderParticles && (
          <Particles id='particles' init={handleInit} options={particles}/>
      )}
      

      {/* navbar */}
      <Navbar />

      {/* main page content */}
        <div className='nav_calc'>
          <Routes>
            <Route index path='/' element={<Home/>} />
            <Route index path='/about' element={<About/>} />
            <Route index path='/contact' element={<Contact/>} />
            <Route index path='/projects' element={<Projects/>} />
            <Route index path='/resume' element={<Resume/>} />
            <Route index path='/skills' element={<Skills/>} />
          </Routes>
        </div>
      
    </div>
  )
}

export default App;
