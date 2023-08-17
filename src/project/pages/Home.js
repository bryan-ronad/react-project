import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container fluid className="m-1 p-1 text-center">
      <Row>
        <Container>Welcome to the home page of food junction!</Container>
      </Row>
      <Row>
        <Container>
          <Link to="list">List of food items</Link>
        </Container>
      </Row>
    </Container>
  );
};

export default Home;
