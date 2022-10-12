import { Link } from "react-router-dom";

export const CartWithoutItemContent = () => {
  return (
    <div className="cartWithoutItemContent">
      <p className="cartWithoutItemContent__title">Tu Carro está vacío</p>
      <p className="cartWithoutItemContent__paragraph">
        Tenemos miles de ofertas y oportunidades únicas, ¿te las vas a perder?
      </p>
      <div className="cartWithoutItemContent__button">
        <Link to="/catalogos">Ir a comprar</Link>
      </div>
    </div>
  );
};
