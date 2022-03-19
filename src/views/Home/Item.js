import React from "react";
import Card from 'react-bootstrap/Card';
import "../../scss/card.scss";

const Item = ({info}) => {
  return (
    <button className="cards__button">
      <Card className="cards__infoContainer" style={{ width: "18rem" }}>
        <div className="cards__imgContainer">
        <Card.Img variant="top" src={info.img} height="400px"/>
        </div>
        <Card.Body className="cards__body">
          <Card.Title className="cards__title">{info.name}</Card.Title>
          <Card.Text className="cards__description">
            {info.description}
          </Card.Text>
          <Card.Text className="cards__price">
            Precio: ${info.price}
          </Card.Text>
          <Card.Text className="cards__compra">
            Ver Detalle
          </Card.Text>
        </Card.Body>
      </Card>
    </button>
  );
};

export default Item;

