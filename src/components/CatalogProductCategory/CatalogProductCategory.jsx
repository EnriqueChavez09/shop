import React from "react";
import itemsProducts from "../../data/itemsProducts.json";
import { ItemProduct } from "../ItemProduct/ItemProduct";
export const CatalogProductCategory = ({ id, title }) => {
  const newItemsProducts = itemsProducts.filter((item) => item.category === id);
  return (
    <div className="catalogProductCategory">
      <div className="catalogProductCategory__title">
        <p>{title}</p>
      </div>
      <div className="catalogProductCategory__item">
        {newItemsProducts.map((item) => {
          return <ItemProduct key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};
