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
  container: {
    position: "relative", 
    zIndex: "2", 
    height: "min-content" }
}

const logo = {

  global: {
    position: "absolute",
    zIndex: "1",
    width: "100%"
    // margin: "0 auto",
    // display: "flex"
  },

  center: {
    global: {
      left: "50%",
      transform: "translateX(-50%)",
    },
    small: {
      bottom: "-2.5rem",
    },
    medium: {
      bottom: "-4.5rem",
      // width: "10rem",
    },
    large: {
      bottom: "-4.5rem",
    }
  }
}



function NavbarSection() {

  const location = useLocation();
  const [logoStyle, setLogoStyle] = useState('');
  let newLogoStyle = {};

  useEffect(() => {
    // adjust styling of logo based on screen size and app page

    const getLogoStyle = () => {
      const screenWidth = window.innerWidth;

      switch (location.pathname) {
        case '/':
          newLogoStyle = {
            ...logo.center.global,
            ...(
              screenWidth < 576 ? logo.center.small :
              screenWidth < 768 ? logo.center.medium :
              logo.center.large
            ),
          };
          break;
        case '/game':
          newLogoStyle = {
            ...logo.left,
            ...(
              screenWidth < 576 ? logo.left.small :
              screenWidth < 768 ? logo.left.medium :
              logo.left.large
            ),
          };
          break;
        // default:
        //   setLogoStyle(
        //     screenWidth < 576 ? logo.global.small :
        //     screenWidth < 768 ? logo.global.medium :
        //     logo.global.large
        //   );
      }
    }

    setLogoStyle(newLogoStyle);
    getLogoStyle();

  }, [location.pathname]); // Re-run the effect when the location changes

  const navBarBrand = {
    position: 'relative',
    top: "5rem"
  }

  return (

      <Navbar className="" style={styles}>
        <Container 
        style={styles.container}>
        <Row className='w-100 align-items-center m-0 p-0'>
            <Col className='col-6 d-flex flex-col justify-content-start p-3'>
              <InstructionsBTN style={styles.navButtons}/>
            </Col>
            <Col className='col-6 d-flex flex-col justify-content-end p-3'>
              <HighscoresBTN style={styles.navButtons}/>
            </Col>
        </Row>
        </Container>
        <Container fluid className="p-0 m-0"style={logo.global}>
        <Row  className="w-100 p-0 m-0 justify-content-center">
          <Col className="col-5 d-flex flex-column justify-content-center">
            <Navbar.Brand className="mx-auto pt-2" style={navBarBrand} >          
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