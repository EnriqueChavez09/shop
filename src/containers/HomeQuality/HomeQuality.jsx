import React from "react";
import { HomeQualityItem } from "../../components";
import items from "../../data/itemsHomeQuality.json";
export const HomeQuality = () => {
  return (
    <section id="HomeQuality" className="homeQuality">
      {items.map((item, index) => {
        return <HomeQualityItem key={index} item={item} />;
      })}
    </section>
  );
};
