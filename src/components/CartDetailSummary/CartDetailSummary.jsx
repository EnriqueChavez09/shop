import React from "react";
import { CartDetailSummaryCard } from "../CartDetailSummaryCard/CartDetailSummaryCard";

export const CartDetailSummary = () => {
  return (
    <div className="cartDetailSummary">
      <p className="cartDetailSummary__title">Resumen de la orden</p>
      <CartDetailSummaryCard />
    </div>
  );
};
