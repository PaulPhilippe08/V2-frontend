import React, { useEffect, useState, useContext } from "react";
import "./MyOrders.css";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { FaBox } from "react-icons/fa"; // Icône de colis 📦

const MyOrders = () => {
  const { url, token } = useContext(StoreContext);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    console.log("Token utilisé :", token);
    setLoading(true); // ← Important si tu veux que le bouton "Rafraîchir" réactive le chargement

    try {
      const response = await axios.post(
        url + "/api/order/userorders",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Réponse de l'API :", response);

      if (response.data.success) {
        setData(response.data.data);
      } else {
        console.error("Erreur API : ", response.data.message);
      }
    } catch (error) {
      console.error("Erreur axios :", error.response?.data || error.message);
    } finally {
      setLoading(false); // ← AJOUT TRÈS IMPORTANT
    }
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  return (
    <div className="myorders">
      <h2>Mes Commandes</h2>
      {loading ? (
        <p>Chargement des commandes...</p>
      ) : data.length === 0 ? (
        <p>Aucune commande trouvée.</p>
      ) : (
        <div className="container">
          {data.map((order, index) => (
            <div key={index} className="my-orders-order">
              <FaBox size={40} color="#333" />
              <p>
                {order.items.map((item, i) =>
                  i === order.items.length - 1
                    ? `${item.name} x ${item.quantity}`
                    : `${item.name} x ${item.quantity}, `
                )}
              </p>
              <p>Total : ${order.amount}.00</p>
              <p>Articles : {order.items.length}</p>
              <p>
                <span style={{ color: "green" }}>&#x25cf;</span>{" "}
                <b>{order.status}</b>
              </p>
              <button onClick={fetchOrders}>Rafraîchir</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyOrders;
