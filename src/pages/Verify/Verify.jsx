import React, { useEffect } from "react";
import "./Verify.css";
import { useNavigate } from "react-router-dom";

const Verify = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Suppression de la logique de vérification de paiement
    navigate("/myorders");
  }, []);

  return (
    <div className="verify">
      <div className="spinner"></div>
    </div>
  );
};

export default Verify;
