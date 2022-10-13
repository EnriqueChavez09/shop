import { CartDetailItem, CartDetailSummary } from "../../components";

export const CartDetail = () => {
  const itemsInCart = localStorage.getItem("itemsInCart");

  return (
    <section id="CartDetail" className="cartDetail">
      <CartDetailItem items={itemsInCart ? JSON.parse(itemsInCart) : []} />
      <CartDetailSummary />
    </section>
  );
};
