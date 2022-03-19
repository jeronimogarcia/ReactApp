import Card from "react-bootstrap/Card";
import "../../scss/itemDetail.scss";
import React, { useContext, useEffect } from "react";
import ItemCount from "../../components/ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetail = (props) => {
  const [buy, setBuy] = React.useState(true);

  const { addProduct, products } = useContext(CartContext);

  useEffect(() => {
    if(props.product){
      setBuy(() => {
        return !products.some(p => p.id === props.product.id)
      })
    }
  }, [props.product, products]); 

  const onAdd = (counter) => {
    setBuy(false);
    addProduct(props.product, counter);
  };


  let stars = [];
  for (let i = 1; i <= props.product.rate; i++) {
    stars.push(i);
  }

  return (
    <div className="card__container">
      <div className="card__titleContainer">
        <i className="fa-solid fa-paw fa-lg"></i>
        <h3>Detalle del Producto</h3>
        <i className="fa-solid fa-paw fa-lg"></i>
      </div>
      {props.product && (
        <div className="card__subContainer">
          <div className="card__imgContainer">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={props.product.img} height="400px" />
            </Card>
          </div>
          <div className="card__textContainer">
            <div className="card__descriptionContainer">
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>{props.product.name}</Card.Title>
                  <Card.Text>{props.product.description}</Card.Text>
                  <div className="card__priceContainer">
                    <Card.Text>Precio:</Card.Text>
                    <div>${props.product.price}</div>
                  </div>
                  <Card.Text>Stock: {props.product.stock} unidades</Card.Text>
                  <div className="card__rateContainer">
                    <div className="card__rateText">
                      <Card.Text>Puntuación:</Card.Text>
                    </div>
                    <div className="card__rateStarsContainer">
                      {props.product.rate && (
                        <div className="card__rateStars">
                          {stars.map((star) => {
                            return (
                              <i key={star} className="fa-solid fa-star"></i>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>

            <div className="card__countContainer">
              {buy ? (
                <ItemCount
                  product={props.product}
                  handlerCounterBuy={(counter) => onAdd(counter)}
                  maxValue={5}
                  minValue={1}
                  initialValue={1}
                  quantity={0}
                />
              ) : (
                <div className="card__countbtnCarrito">
                  <Link to="/cart">
                    <button className="card__countBtn">Ir a carrito</button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemDetail;
