import React, { useState, useEffect } from "react";
import AppLayout from "../Layouts/AppLayout";
import NavigationSidebar from "../Components/Sidebar/NavigationSidebar";
import RestaurantCard from "../Components/RestaurantCard/RestaurantCard";
import { useNavigate } from "react-router-dom";

export default function Restaurants() {
  const navigate = useNavigate();
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/restaurants/getAllRestaurant")
      .then((response) => response.json())
      .then((result) => {
        if (result.data.length > 0) {
          setRestaurants(result.data);
        }
      });
  }, []);

  function handleRestaurantSelect(id) {
    if (id) {
      navigate(`/restaurant/${id}`);
    }
  }

  return (
    <main className="main-container">
      {restaurants.length > 0 ? (
        restaurants.map((data, index) => (
          <RestaurantCard
            key={index}
            data={data}
            handleClick={handleRestaurantSelect}
          />
        ))
      ) : (
        <p>No restaurants found</p>
      )}
    </main>
  );
}