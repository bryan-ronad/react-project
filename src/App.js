import { Container } from "react-bootstrap";
import "./App.css";
import RouteConfiguration from "./project/components/RouteConfiguration";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./project/contexts/authContext";
import NavigationComponent from "./project/components/NavigationComponent";
import { CartProvider } from "./project/contexts/cartContext";
import { PriceProvider } from "./project/contexts/priceContext";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <PriceProvider>
          <Container fluid>
            <BrowserRouter>
              <NavigationComponent />
              <RouteConfiguration />
            </BrowserRouter>
          </Container>
        </PriceProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
