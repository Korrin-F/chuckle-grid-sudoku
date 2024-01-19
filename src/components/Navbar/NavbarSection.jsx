import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import InstructionsBTN from './InstructionsBTN';

const styles = {
  backgroundColor: "var(--teal)",
}

function Navbar() {
  return (
   
      <nav className="navbar justify-content-between"
      style={styles}
      >
        
        <div className="navbar-brand"
        >
          <Link to="/"> <Logo /> </Link>
        </div>

        <div 
        className='row me-2'
        >
            <div className='col p-3'>
              <InstructionsBTN />
            </div>
            <div className='col p-3'>
              <Link to="/highscores">Highscores</Link>
            </div>

        </div>
 
      </nav>
  
  );
}

export default Navbar;