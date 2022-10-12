import { CartWithoutItemContent, CartWithoutItemIcon } from "../../components";
export const CartWithoutItem = () => {
  return (
    <section id="CartWithoutItem" className="cartWithoutItem">
      <CartWithoutItemIcon />
      <CartWithoutItemContent />
    </section>
  );
};
