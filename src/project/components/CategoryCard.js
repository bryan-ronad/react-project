import React from "react";
import { Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  return (
    <Container fluid className="border h-100 w-100">
      <Row>
        <Container>ID: {category.idCategory}</Container>
      </Row>
      <Row>
        <Container>Category: {category.strCategory}</Container>
      </Row>
      <Row>
        <Container>
          <Image src={category.strCategoryThumb} width={250} />
        </Container>
      </Row>
      <Row>{category.strCategoryDescription}</Row>
      <Row className="mt-2">
        <Container>
          <Link to={`/category/${category.strCategory}`} replace>
            View Category
          </Link>
        </Container>
      </Row>
    </Container>
  );
};

export default CategoryCard;
