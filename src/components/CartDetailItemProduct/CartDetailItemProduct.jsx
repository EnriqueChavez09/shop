import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeItem } from "../../store/amountSlice";
export const CartDetailItemProduct = ({
  id,
  image,
  title,
  price,
  stock,
  description,
}) => {
  const [amount, setAmount] = useState(1);
  const subtractAmount = () => {
    amount > 1 && setAmount(amount - 1);
  };
  const addAmount = () => {
    amount < stock && setAmount(amount + 1);
  };
  const distpach = useDispatch();
  const deleteItemToCart = () => {
    distpach(removeItem());
    const itemsInCart = JSON.parse(localStorage.getItem("itemsInCart"));
    const newItemsInCart = itemsInCart.filter((item) => item.id !== id);
    localStorage.setItem("itemsInCart", JSON.stringify(newItemsInCart));
  };
  return (
    <div className="cartDetailItemProduct">
      <div className="cartDetailItemProduct__image">
        <img src={image} alt="" />
      </div>
      <div className="cartDetailItemProduct__information">
        <p className="cartDetailItemProduct__information__title">{title}</p>
        <p className="cartDetailItemProduct__information__description">
          {description}
        </p>
      </div>
      <div className="cartDetailItemProduct__price">
        <p>${price}</p>
      </div>
      <div className="cartDetailItemProduct__counter">
        <button
          className="cartDetailItemProduct__counter__less"
          onClick={subtractAmount}
          disabled={amount === 1}
        >
          -
        </button>
        <p>{amount}</p>
        <button
          className="cartDetailItemProduct__counter__more"
          onClick={addAmount}
          disabled={amount === stock}
        >
          +
        </button>
        <button
          className="cartDetailItemProduct__counter__delete"
          onClick={() => deleteItemToCart()}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};
