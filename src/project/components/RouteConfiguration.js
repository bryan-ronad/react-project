import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Home from "../pages/Home";
import Login from "../pages/Login";
import List from "../pages/List";
import FoodList from "../pages/FoodList";
import Prices from "../pages/Prices";

const RouteConfiguration = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="list" element={<List />} />
        <Route path="category/:categoryName" element={<FoodList />} />
        <Route path="price" element={<ProtectedRoute component={Prices} />} />
      </Routes>
    </>
  );
};

export default RouteConfiguration;
