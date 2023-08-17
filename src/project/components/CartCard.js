import React, { useContext } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { CartContext } from "../contexts/cartContext";
import { PriceContext } from "../contexts/priceContext";

const CartCard = ({ meal }) => {
  const { removeFromCart } = useContext(CartContext);
  const { prices } = useContext(PriceContext);
  return (
    <Container fluid>
      <Row className="p-2">
        <Col className="text-center">{meal.idMeal}</Col>
        <Col className="text-center">{meal.strMeal}</Col>
        <Col className="text-center">{meal.qty}</Col>
        <Col className="text-center">{`Rs. ${prices[meal.idMeal]}`}</Col>
        <Col className="text-center">
          {parseInt(meal.qty) * parseInt(prices[meal.idMeal])}
        </Col>
        <Col className="text-center">
          <Button onClick={() => removeFromCart(meal)}>Delete</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default CartCard;
