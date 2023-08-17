import React from "react";
import { Get } from "react-axios";
import { Col, Container, Row } from "react-bootstrap";
import CategoryCard from "../components/CategoryCard";
import axiosInstance from "../axiosInstance";

const List = () => {
  return (
    <Container fluid className="m-1 p-1 text-center">
      <Row>
        <Container fluid>
          <Get
            url="https://www.themealdb.com/api/json/v1/1/categories.php"
            instance={axiosInstance}
          >
            {(error, response, isLoading, makeRequest, axios) => {
              if (response !== null) {
                return (
                  <Container fluid>
                    <Container fluid>
                      <Row className="mt-2">
                        {response.data.categories.map((category) => (
                          <Col xs={4} className="mt-1 p-4">
                            <CategoryCard category={category} />
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
    </Container>
  );
};

export default List;
