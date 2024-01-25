import { Link } from 'react-router-dom';
import React from 'react';
import Logo from './Logo';
import InstructionsBTN from './InstructionsBTN';
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



function NavbarSection(props) {
  const { screenWidth } = props;
  console.log("Navbar Screen Width:", screenWidth);

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
        <Row className='w-100 align-items-center justify-content-center m-0 p-0 py-1'>
          <Col className="d-flex flex-col justify-content-between"
          xs={12}
          lg={10}
          xxl={7}
          >
            <InstructionsBTN style={styles.navButtons}/>
            <HighscoresBTN style={styles.navButtons}/>
          </Col>

        </Row>
        </Container>
        <Container fluid className="p-0 m-0"style={styles.logoContainer}>
        <Row  className="w-100 p-0 m-0 justify-content-center">
          <Col className="d-flex flex-column justify-content-center"
          xs={11}
          sm={8}
          md={6}
          xl={5}
          xxl={4}
          >
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