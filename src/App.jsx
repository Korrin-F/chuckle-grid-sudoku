import NavbarSection from '../src/components/Navbar/NavbarSection';
import FooterSection from '../src/components/Footer/FooterSection';
import Home from './pages/Home/Home';
import Game from './pages/Game/Game';
import Highscores from './pages/Highscores/Highscores';
import './App.css';




function App() {

  return (
    <>
      <NavbarSection />
      <Home />
      <Game />
      <Highscores />
      <FooterSection />
    </>
  )
}

export default App;
