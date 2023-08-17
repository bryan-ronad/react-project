import React, { useContext, useRef } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/cartContext";

const MealCard = ({ meal }) => {
  const { addToCart } = useContext(CartContext);
  const quantityRef = useRef(0);
  return (
    <Container fluid className="p-4 text-center border h-100 w-100">
      <Row>
        <Container>Meal ID: {meal.idMeal}</Container>{" "}
      </Row>
      <Row>
        <Container>Meal: {meal.strMeal}</Container>
      </Row>
      <Row>
        <Container>
          <Image src={meal.strMealThumb} width={150} />
        </Container>
      </Row>
      <Row className="mt-4">
        <Container fluid>
          Quantity: <input ref={quantityRef} type="number" name="qty" />
        </Container>
      </Row>
      <Row className="mt-2">
        <Container fluid>
          <Button
            onClick={() => {
              addToCart(meal, quantityRef.current.value);
            }}
          >
            Add to Cart
          </Button>
        </Container>
      </Row>
    </Container>
  );
};

export default MealCard;
