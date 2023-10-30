
import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Restaurants from "./Pages/Restaurants";
import RestaurantDetails from "./Pages/RestaurantDetails";
import Cart from "./Pages/Cart";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/restaurants" Component={Restaurants} />
        <Route path="/restaurant/:id" Component={RestaurantDetails} />
        <Route path="/cart" Component={Cart} />
      </Routes>
    </div>
  );
}

export default App;