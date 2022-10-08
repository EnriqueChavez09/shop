import { useState } from "react";
import { IconContext } from "react-icons";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";

export const ItemProduct = ({ item }) => {
  const [amount, setAmount] = useState(1);
  const subtractAmount = () => {
    setAmount(amount - 1);
  };
  const addAmount = () => {
    setAmount(amount + 1);
  };
  const addCart = () => {
    alert("Se añadió al carrito");
  };
  return (
    <div className="itemProduct">
      <div className="itemProduct__image">
        <img src={item.image} alt="" />
      </div>
      <p className="itemProduct__title">{item.title}</p>
      <div className="itemProduct__number">
        <div className="itemProduct__number__counter">
          <button
            className="itemProduct__number__counter__less"
            onClick={subtractAmount}
          >
            -
          </button>
          <p>{amount}</p>
          <button
            className="itemProduct__number__counter__more"
            onClick={addAmount}
          >
            +
          </button>
        </div>
        <p className="itemProduct__number__price">$ {20 * amount}</p>
      </div>
      <div className="itemProduct__button">
        <button className="itemProduct__button__add" onClick={addCart}>
          <div className="itemProduct__button__add__cart">
            <IconContext.Provider value={{ color: "#FFFFFF", size: "25px" }}>
              <AiOutlineShoppingCart />
            </IconContext.Provider>
          </div>
          <p>Añadir al carrito</p>
        </button>
        <div className="itemProduct__button__favorite">
          <IconContext.Provider value={{ color: "#ef5d5d", size: "25px" }}>
            <AiOutlineHeart />
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
};
