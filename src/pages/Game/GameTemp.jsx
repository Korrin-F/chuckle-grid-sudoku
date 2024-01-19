import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import GridSection from "../../components/GameGrid/GridSection";
import UnderGameBoard from "../../components/GameSections/UnderGameBoard"

function GameTemp() {
  return (
    <Container>
      

      {/* Buttons */}
      <Row className="mt-3">
        <Col>
          <Button variant="primary">Gamble</Button>
        </Col>
        <Col className="text-center">
          <p className="m-0">or</p>
        </Col>
        <Col className="text-right">
          <MotivationButton />
        </Col>
      </Row>

      {/* Solution Button */}
      <Row className="mt-3">
        <Col className="text-center">
          <Button variant="warning">Solution</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default GameTemp;
