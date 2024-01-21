import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Logo from './Logo';
import InstructionsBTN from './InstructionsBTN';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const styles = {
  backgroundColor: "var(--orange)",
  // maxHeight: "4rem",
  brand: {
    position: "absolute", // Use absolute positioning for the logo
    bottom: "-2.5rem",
    left: "2rem",
    zIndex: "2", // Make sure the logo is above other elements
  }
}

const logo = {

  global: {
    position: "absolute",
    zIndex: "2"
  },

  left: {
    small: {

    },
    medium: {

    },
    large: {
      bottom: "-2.5rem",
      left: "2rem",
    }
  },

  center: {
    small: {

    },
    medium: {

    },
    large: {

    }
  }
}



function NavbarSection() {

  const location = useLocation();
  const [logoStyle, setLogoStyle] = useState('');

  useEffect(() => {
    // adjust styling of logo based on screen size and app page

    const getLogoStyle = () => {
      const screenWidth = window.innerWidth;

      switch (location.pathname) {
        case '/':
          setLogoStyle(
            screenWidth < 576 ? logo.left.small :
            screenWidth < 768 ? logo.left.medium :
            logo.left.large
          );
          break;
        case '/game':
          setLogoStyle(
            screenWidth < 576 ? logo.center.small :
            screenWidth < 768 ? logo.center.medium :
            logo.center.large
          );
          break;
        // default:
        //   setLogoStyle(
        //     screenWidth < 576 ? logo.global.small :
        //     screenWidth < 768 ? logo.global.medium :
        //     logo.global.large
        //   );
      }
    }

    getLogoStyle(); // Call the function to set the initial style

  }, [location.pathname]); // Re-run the effect when the location changes

  

  return (
   
      <Nav 
      className="navbar justify-content-end"
      style={styles}
      >
        <Navbar.Brand 
        className=""
        style={{...logo.global, ...logoStyle}}>
          
          <Link to="/" > 
            <Logo /> 
          </Link>

        </Navbar.Brand>

        <Row 
        className='row me-2'
        >
            <Col className='col p-3'>
              <InstructionsBTN />
            </Col>
            <Col className='col p-3'>
              <Link to="/highscores">Highscores</Link>
            </Col>

        </Row>
 
      </Nav>
  
  );
}

export default NavbarSection;