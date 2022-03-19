import "../../scss/itemDetail.scss";
import React from "react";

const ItemCount = (props) => {
  const [counter, setCounter] = React.useState(props.initialValue);

  const handlerCounterUp = () => {
    if (counter < props.product.stock) {
      const counterInc = (counterUp) => {
        const nextCounter = counterUp + 1;
        return nextCounter;
      };
      setCounter(counterInc);
    }
  };

  const handlerCounterDown = () => {
    if (counter > props.minValue) {
      const counterDec = (counterDown) => {
        const beforeCounter = counterDown - 1;
        return beforeCounter;
      };
      setCounter(counterDec);
    }
  };

  return (
    <div className="card__countSubContainer">
      <div className="card__countNumberContainer">
        <div className="card__countQuantity">
          <p>Cantidad: {counter}</p>
        </div>
        <div className="card__countBtnContainer">
          <div>
            <button onClick={handlerCounterUp}>
              <i className="fa-solid fa-plus"></i>
            </button>
          </div>
          <div>
            <button onClick={handlerCounterDown}>
              <i className="fa-solid fa-minus"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="card__countbtnCarrito">
        <button className="card__countBtn" onClick={() => props.handlerCounterBuy(counter)}>
          Poner en carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;

