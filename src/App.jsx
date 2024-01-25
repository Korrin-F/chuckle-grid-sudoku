import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import NavbarSection from '../src/components/Navbar/NavbarSection';
import FooterSection from '../src/components/Footer/FooterSection';
import Home from './pages/Home/Home';
import Game from './pages/Game/Game';
import Highscores from './pages/Highscores/Highscores';
import NewGame from './pages/Game/NewGame';
import './App.css';




function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    console.log("Screen Width:", screenWidth);
    console.log("Data Type:", typeof(screenWidth));
    return () => {
      window.removeEventListener('resize', handleResize);
    };
    
  }, []);

  return (
    <>
      
      <Router>
        <NavbarSection screenWidth={screenWidth}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<NewGame screenWidth={screenWidth}/>} />
          <Route path="/highscores" element={<Highscores />} />
        </Routes>
      </Router>
      {/* <Home />
      <Game />
      <Highscores /> */}
      <FooterSection />

    </>
  )
}

export default App;
