import "../../scss/navBar.scss";
import CardWidget from "../CartWidget/CartWidget";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navContainer">
      <nav className="navigation">
        <ul className="list">
          <li>
            <Link to="/">
              <Logo />
            </Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/category/food">Alimentos</Link>
          </li>
          <li>
            <Link to="/category/toys">Juguetes</Link>
          </li>
          <li>
            <Link to="/category/accessories">Accesorios</Link>
          </li>
          <li className="carrito">
            <Link to="/cart">
              <CardWidget />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
