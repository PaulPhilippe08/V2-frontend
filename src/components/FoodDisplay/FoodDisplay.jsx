import React from "react";
import "./FoodDisplay.css";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {food_list
          .filter((item) => category === "All" || item.category === category) // Filtrer par catégorie
          .map((item, index) => {
            console.log("🔍 Produit affiché :", item); // Affiche chaque produit dans la console
            return <FoodItem key={item.id || index} {...item} />;
          })}
      </div>
    </div>
  );
};

export default FoodDisplay;
