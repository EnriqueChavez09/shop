import { useParams } from "react-router-dom";
import { ProductRetrieveInformation } from "../../components";
import itemsProducts from "../../data/itemsProducts.json";
import itemsProductsRecommended from "../../data/itemsProductsRecommended.json";
export const ProductRetrieve = () => {
  const valor = useParams();
  const itemProduct = itemsProducts.find(
    (item) => item.slug === valor.productSlug
  );
  const product = itemProduct
    ? itemProduct
    : itemsProductsRecommended.find((item) => item.slug === valor.productSlug);
  return (
    <section id="ProductRetrieve" className="productRetrieve">
      <div className="productRetrieve__image">
        <img src={product.image} alt="" />
      </div>
      <ProductRetrieveInformation {...product} />
    </section>
  );
};
