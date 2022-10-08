import { ItemProduct } from "../../components";
import items from "../../data/itemsProductsRecommended.json";
export const HomeRecommended = () => {
  return (
    <section id="HomeRecommended" className="homeRecommended">
      <p className="homeRecommended__title">Recomendados</p>
      <div className="homeRecommended__item">
        {items.map((item, index) => {
          return <ItemProduct key={index} item={item} />;
        })}
      </div>
    </section>
  );
};
