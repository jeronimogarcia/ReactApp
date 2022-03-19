import Item from "../../views/Home/Item";
import "../../scss/card.scss";
import { Link } from "react-router-dom";

const ItemList = (props) => {
  return (
    <div className="cards__container">
      {props.products.map((product) => {
        return (
          <div key={product.id} className="cards__subContainer">
            <Link to={`/item/${product.id}`}>
              <Item info={product} key={product.id} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
