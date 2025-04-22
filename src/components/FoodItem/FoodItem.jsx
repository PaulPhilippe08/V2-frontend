import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import "./FoodItem.css";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ _id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart, url } =
    useContext(StoreContext);
  const quantity = cartItems[_id] || 0;

  return (
    <Card className="food-item shadow-sm">
      <Card.Img
        variant="top"
        src={`${url}/uploads/${image}`}
        alt={name}
        className="food-item-image"
      />

      {quantity === 0 ? (
        <button className="add-icon first-add" onClick={() => addToCart(_id)}>
          +
        </button>
      ) : (
        <div className="food-item-counter">
          <button className="remove-icon" onClick={() => removeFromCart(_id)}>
            -
          </button>
          <p>{quantity}</p>
          <button className="add-icon" onClick={() => addToCart(_id)}>
            +
          </button>
        </div>
      )}

      <Card.Body className="d-flex flex-column justify-content-between">
        <div>
          <Card.Title style={{ fontWeight: "bold" }}>{name}</Card.Title>
          <Card.Text className="text-muted">{description}</Card.Text>
        </div>
        <div>
          <h5 className="text-danger">${price}</h5>
          <Button
            className="custom-button btn-sm w-100"
            onClick={() => addToCart(_id)}
          >
            Ajouter au panier
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default FoodItem;
