import React from "react";
import { Link } from "react-router-dom";

export const CartDetailSummaryCard = () => {
  return (
    <div className="cartDetailSummaryCard">
      <Link className="cartDetailSummaryCard__button">
        <button>Ir a pagar</button>
      </Link>
    </div>
  );
};
