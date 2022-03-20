import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./views/Cart/Cart"
import { HashRouter, Route, Routes } from "react-router-dom";
import {CartProvider} from "./context/CartContext";
import ErrorPage from "./views/ErrorPage/ErrorPage";


function App() {
  return (
    <CartProvider>
    <HashRouter>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <ItemListContainer
              title="Bienvenidos a Michi Store"
              categories="Catalogo de Productos"
            />
          }
        />
        <Route
          path="/category/:name"
          element={
            <ItemListContainer
              title="Bienvenidos a Michi Store"
              categories="Catalogo de Productos:"
            />
          }
        />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="*" element={<ErrorPage/>}></Route>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      <Footer />
    </HashRouter>
    </CartProvider>
  );
}

export default App;
