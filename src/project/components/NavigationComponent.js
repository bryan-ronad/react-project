import React, { useContext, useState } from "react";
import { Row, Col, Container, Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/cartContext";
import { AuthContext } from "../contexts/authContext";
import CartCard from "./CartCard";

const NavigationComponent = () => {
  const [cartShow, setCartShow] = useState(false);
  const handleCartShow = () => setCartShow(true);
  const handleCartHide = () => setCartShow(false);
  const { name } = useContext(AuthContext);
  const handleCartCheckout = () => {
    let tempHistory = localStorage.getItem("checkoutHistory") || [];
    tempHistory = [
      ...tempHistory,
      {
        cart: cart,
        timestamp: new Date(),
        name: name,
      },
    ];
    localStorage.setItem("checkoutHistory", JSON.stringify(tempHistory));
  };
  const { cart } = useContext(CartContext);
  const { authenticated } = useContext(AuthContext);
  return (
    <Container className="p-4 mt-2" fluid>
      <Row>
        <Col className="text-center">
          <Link to="/">Home</Link>
        </Col>
        <Col className="text-center">
          <Link to="list">List items</Link>
        </Col>
        <Col className="text-center">
          <Link to="price">Set Prices</Link>
        </Col>
        <Col className="text-center">
          {authenticated ? (
            <Link to="logout">Logout</Link>
          ) : (
            <Link to="login">Login</Link>
          )}
        </Col>
        <Col className="text-center">
          <Button onClick={handleCartShow}>Show cart</Button>
        </Col>
      </Row>
      <Modal show={cartShow} onHide={handleCartHide} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container fluid>
            <Row>
              <Col className="text-center">
                <b>ID</b>
              </Col>
              <Col className="text-center">
                <b>Meal</b>
              </Col>
              <Col className="text-center">
                <b>Qty</b>
              </Col>
              <Col className="text-center">
                <b>Price</b>
              </Col>
              <Col className="text-center">
                <b>Total</b>
              </Col>
              <Col className="text-center"></Col>
            </Row>
            <hr />
            {cart.length > 0
              ? cart.map((meal) => <CartCard meal={meal} />)
              : "No meals in cart"}
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCartCheckout}>
            Checkout
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default NavigationComponent;
