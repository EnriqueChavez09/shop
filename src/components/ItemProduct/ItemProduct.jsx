import { useState } from "react";
import { IconContext } from "react-icons";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addItem } from "../../store/amountSlice";

export const ItemProduct = ({
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
  const addItemToCart = () => {
    distpach(addItem());
    const item = {
      id: id,
      image: image,
      title: title,
      price: price,
      stock: stock,
      description: description,
    };
    if (localStorage.getItem("itemsInCart")) {
      const itemsInCart = JSON.parse(localStorage.getItem("itemsInCart"));
      itemsInCart.push(item);
      localStorage.setItem("itemsInCart", JSON.stringify(itemsInCart));
    } else {
      const itemsInCart = [];
      itemsInCart.push(item);
      localStorage.setItem("itemsInCart", JSON.stringify(itemsInCart));
    }
  };
  return (
    <div className="itemProduct">
      <div className="itemProduct__image">
        <img src={image} alt="" />
      </div>
      <p className="itemProduct__title">{title}</p>
      <div className="itemProduct__number">
        <div className="itemProduct__number__counter">
          <button
            className="itemProduct__number__counter__less"
            onClick={subtractAmount}
            disabled={amount === 1}
          >
            -
          </button>
          <p>{amount}</p>
          <button
            className="itemProduct__number__counter__more"
            onClick={addAmount}
            disabled={amount === stock}
          >
            +
          </button>
        </div>
        <p className="itemProduct__number__price">$ {price * amount}</p>
      </div>
      <div className="itemProduct__button">
        <button
          className="itemProduct__button__add"
          onClick={() => addItemToCart()}
        >
          <div className="itemProduct__button__add__cart">
            <IconContext.Provider value={{ color: "#FFFFFF", size: "25px" }}>
              <AiOutlineShoppingCart />
            </IconContext.Provider>
          </div>
          <Link to="/carrito">Añadir al carrito</Link>
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
