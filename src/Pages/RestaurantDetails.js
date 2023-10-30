
 

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../Components/ProductCard/ProductCard";

export default function RestaurantDetails() {
  const { id } = useParams();
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:4000/api/food/getAllFood/${id}`)
        .then((response) => response.json())
        .then((result) => {
          if (result.data.length > 0) {
            setFoods(result.data);
          }
        });
    }
  }, []);
  return (
    <main className="main-container">
      {foods.length > 0 ? (
        foods.map((data, index) => (
          <ProductCard
            key={index}
            data={data}
            user={{
              isAdmin: false,
              isUser: true,
            }}
          />
        ))
      ) : (
        <p>No restaurants found</p>
      )}
    </main>
  );
}