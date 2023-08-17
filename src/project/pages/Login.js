import React, { useContext, useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { AuthContext } from "../contexts/authContext";

const Login = () => {
  const { authenticated, login, name } = useContext(AuthContext);
  const [nameState, setNameState] = useState("");
  return (
    <Container fluid className="text-center mt-4">
      <Row>
        <Container fluid className="text-center mt-2">
          {authenticated ? (
            `Hey, ${name}`
          ) : (
            <Container fluid>
              <Row>
                <Container fluid className="text-center">
                  Name:{" "}
                  <input
                    type="text"
                    onChange={(e) => setNameState(e.target.value)}
                  />
                </Container>
              </Row>
              <Row>
                <Container fluid className="text-center mt-2">
                  <Button onClick={() => login(nameState)}>Login</Button>
                </Container>
              </Row>
            </Container>
          )}
        </Container>
      </Row>
    </Container>
  );
};

export default Login;
