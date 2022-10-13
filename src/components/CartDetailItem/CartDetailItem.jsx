import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CartDetailItemProduct } from "../../components";
export const CartDetailItem = ({ items }) => {
  const amount = useSelector((state) => state.amount.value);
  return (
    <div className="cartDetailItem">
      <p className="cartDetailItem__title">Carro ({amount} productos)</p>
      <div className="cartDetailItem__item">
        {items.map((item) => {
          return <CartDetailItemProduct key={item.id} {...item} />;
        })}
      </div>
      <div className="cartDetailItem__button">
        <Link to="/catalogos">
          <button>Seguir comprando</button>
        </Link>
      </div>
    </div>
  );
};
