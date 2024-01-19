import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarSection from '../src/components/Navbar/NavbarSection';
import FooterSection from '../src/components/Footer/FooterSection';
import Home from './pages/Home/Home';
import Game from './pages/Game/Game';
import Highscores from './pages/Highscores/Highscores';
import './App.css';




function App() {

  return (
    <>
      
      <Router>
        <NavbarSection />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
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
