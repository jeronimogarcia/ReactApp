import carrito from "../../images/carrito.svg";
import { CartContext } from "../../context/CartContext";
import React, {useContext} from "react";
import "../../App.css";

const CardWidget = () => {
  const { products } = useContext(CartContext);
  return (
    <div className="cartWidgetDisplay">
      <img src={carrito} alt="logoCarrito" width="30px" height="30px" />
      {products.length !== 0 && (<p>{products.length}</p>)}
    </div>
  );
};

export default CardWidget;
