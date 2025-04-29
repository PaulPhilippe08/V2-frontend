import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  // Charge le panier depuis localStorage dès l'initialisation
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : {};
  });

  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [food_list, setFoodList] = useState([]);
  const url = "https://v2-backend-jhey.onrender.com";

  // Sauvegarde automatique dans localStorage quand cartItems change
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      if (!prev[itemId]) return prev;

      const updated = { ...prev };
      updated[itemId] -= 1;

      if (updated[itemId] <= 0) {
        delete updated[itemId];
      }
      return updated;
    });
  };

  const getTotalCartAmount = () => {
    return Object.keys(cartItems).reduce((total, itemId) => {
      const item = food_list.find((product) => product._id === itemId);
      return total + (item?.price || 0) * cartItems[itemId];
    }, 0);
  };

  // Chargement des produits
  useEffect(() => {
    const fetchFoodList = async () => {
      try {
        const response = await axios.get(`${url}/api/food/list`);
        setFoodList(response.data.data);
      } catch (error) {
        console.error("Erreur de chargement des produits", error);
      }
    };
    fetchFoodList();
  }, []);

  return (
    <StoreContext.Provider
      value={{
        food_list,
        cartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
