import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Logo from './Logo';
import InstructionsBTN from './InstructionsBTN';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import HighscoresBTN from './HighscoresBTN';

const styles = {
  backgroundColor: "var(--orange)",
  navButtons: {
    backgroundColor: "var(--blue)",
    borderRadius: "1rem",
    border: "outset 0.5rem var(--blue)",
    boxShadow: "inset 0 0 1rem var(--shadow), 0 -2px .75rem var(--shadow-teal)",
    color: "white",
    fontFamily: "var(--fontThree)",
  },
  buttonContainer: {
    position: "relative", 
    zIndex: "2", 
    height: "min-content" 
  },
  logoContainer: {
    position: "absolute",
    zIndex: "1",
    width: "100%"
  }
}

const logo = {
  global: {
    position: 'relative',
  },
  xsmall: {
    bottom: "-9rem",
  },
  small: {
    bottom: "-9rem",
  },
  medium: {
    bottom: "-4rem",
  },
  large: {
    bottom: "-4.75rem",
  },
  xlarge: {
    bottom: "-5rem",
  },
  xxlarge: {
    bottom: "-5.5rem",
  }
}



function NavbarSection() {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);


  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
    
  }, []);

  const newLogoStyle = {
    ...logo.global,
    ...(screenWidth >= 1400 ? logo.xxlarge :
      screenWidth >= 1200 ? logo.xlarge :
      screenWidth >= 992 ? logo.large :
      screenWidth >= 768 ? logo.medium :
      screenWidth >= 576 ? logo.small :
      logo.xsmall),
  };

  return (

      <Navbar style={styles}>
        <Container style={styles.buttonContainer}>
        <Row className='w-100 align-items-center m-0 p-0'>
            <Col className='col-6 d-flex flex-col justify-content-start p-3'>
              <InstructionsBTN style={styles.navButtons}/>
            </Col>
            <Col className='col-6 d-flex flex-col justify-content-end p-3'>
              <HighscoresBTN style={styles.navButtons}/>
            </Col>
        </Row>
        </Container>
        <Container fluid className="p-0 m-0"style={styles.logoContainer}>
        <Row  className="w-100 p-0 m-0 justify-content-center">
          <Col className="col-11 col-sm-8 col-md-6  d-flex flex-column justify-content-center">
            <Navbar.Brand className="mx-auto p-2" style={newLogoStyle} >          
              <Link to="/" > 
                <Logo /> 
              </Link>
            </Navbar.Brand>
          </Col>
        </Row>
        </Container>
      </Navbar>

  );
  }

export default NavbarSection;