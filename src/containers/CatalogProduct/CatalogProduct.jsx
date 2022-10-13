import { CatalogProductCategory } from "../../components";
import categories from "../../data/itemsCategories.json";

export const CatalogProduct = () => {
  return (
    <section id="CatalogProduct" className="catalogProduct">
      <div className="catalogProduct__item">
        {categories.map((item) => {
          return <CatalogProductCategory key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};
