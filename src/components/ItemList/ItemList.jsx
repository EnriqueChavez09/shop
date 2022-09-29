import React from "react";

export const ItemList = ({ item }) => {
  return (
    <li className="itemList">
      <a href={item.path}>{item.title}</a>
    </li>
  );
};
