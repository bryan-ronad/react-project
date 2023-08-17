import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Get } from "react-axios";
import axiosInstance from "../axiosInstance";
import MealCard from "../components/MealCard";

const FoodList = () => {
  const { categoryName } = useParams();

  return (
    <Row>
      <Container fluid>
        <Get
          url={`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`}
          instance={axiosInstance}
        >
          {(error, response, isLoading, makeRequest, axios) => {
            if (response !== null) {
              return (
                <Container fluid>
                  <Container fluid>
                    <Row className="mt-2">
                      {response.data.meals.map((meal) => (
                        <Col xs={4} className="mt-1 p-4">
                          <MealCard meal={meal} />
                        </Col>
                      ))}
                    </Row>
                  </Container>
                </Container>
              );
            }
          }}
        </Get>
      </Container>
    </Row>
  );
};

export default FoodList;
