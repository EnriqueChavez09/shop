import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/amountSlice";
import { IconContext } from "react-icons";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

export const ProductRetrieveInformation = ({
  title,
  stock,
  id,
  price,
  image,
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
    <div className="productRetrieveInformation">
      <div className="productRetrieveInformation__title">
        <p>{title}</p>
      </div>
      <div className="productRetrieveInformation__counter">
        <button
          className="productRetrieveInformation__counter__less"
          onClick={subtractAmount}
          disabled={amount === 1}
        >
          -
        </button>
        <p>{amount}</p>
        <button
          className="productRetrieveInformation__counter__more"
          onClick={addAmount}
          disabled={amount === stock}
        >
          +
        </button>
      </div>
      <div className="productRetrieveInformation__button">
        <Link to="/carrito">
          <button onClick={() => addItemToCart()}>Añadir al carrito</button>
        </Link>
        <div className="productRetrieveInformation__button__favorite">
          <IconContext.Provider value={{ color: "#ef5d5d", size: "25px" }}>
            <AiOutlineHeart />
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
};
