import React from "react";
import { Link } from "react-router-dom";

export const ItemList = ({ item }) => {
  return (
    <li className="itemList">
      <Link to={item.path}>{item.title}</Link>
    </li>
  );
};
