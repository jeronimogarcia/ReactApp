import { CartContext } from "../../context/CartContext";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import MessageSuccess from "../../components/SuccessMsg/Success";
import TextField from "@mui/material/TextField";
import Card from "react-bootstrap/Card";
import "../../App.css";
import "../../scss/cartForm.scss";

const initialState = {
  name: "",
  lastName: "",
  email: "",
};

const errorState = {
  nameError: "",
  lastNameError: "",
  emailError: "",
};

let buyer = {
  name: "",
  lastName: "",
  email: "",
};

const Cart = () => {
  const { products, deleteProduct, deleteCart } = useContext(CartContext);

  const total = products.reduce((acumulador, item) => {
    return acumulador + item.price * item.quantity;
  }, 0);

  const subTotal = products.reduce((acumulador, item) => {
    return acumulador + item.quantity;
  }, 0);

  const [client, setClient] = useState(initialState);
  const [error, setError] = useState(errorState);
  const [purchaseID, setPurchaseID] = useState("");

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setClient({ ...client, [name]: value });
  };

  const validate = () => {
    let nameError = "";
    let lastNameError = "";
    let emailError = "";

    if (!client.name) {
      nameError = "Completar campo";
    } 

    if (!client.lastName) {
      lastNameError = "Completar campo";
    }

    if (!client.email) {
      emailError = "Completar campo";
    } else if (!client.email.includes("@")) {
      emailError = "Formato de eMail erroneo";
    }

    if (emailError || nameError || lastNameError) {
      setError({ ...error, emailError, nameError, lastNameError });
      return false;
    }
    return true;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const isValid = validate();
    if (isValid) {
      buyer = {
        name: client.name,
        lastName: client.lastName,
        email: client.email,
      };
      const docRef = await addDoc(collection(db, "purchases"), {
        client, products,
      });
      setPurchaseID(docRef.id);
      setClient(initialState);
      deleteCart();
    }
  };

  if (products.length === 0) {
    return (
      <section className="cart__container">
        <h1>Carrito de Compras</h1>
        <h2>No hay Productos en el Carrito</h2>
        <div className="cart__btnCatContainer">
          <Link to="/">
            <button className="cart__btnCat">Ir a Catalogo de Productos</button>
          </Link>
        </div>
        {purchaseID && (
            <MessageSuccess purchaseID={purchaseID} buyer={buyer} />
          )}
      </section>
    );
  } else {
    return (
      <section className="cart__container">
        <h1>Carrito de Compras</h1>
        <div className="cart__tableContainer">
          <table className="cart__table">
            <thead className="cart__thead">
              <tr className="cart__tr">
                <th>Producto</th>
                <th className="cart__thImg"></th>
                <th>Precio Unidad</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
                <th>Quitar Producto</th>
              </tr>
            </thead>
            <tbody className="cart__tbody">
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td className="cart__tdImg">
                    <Card.Img variant="top" src={product.img} height="110px" />
                  </td>
                  <td>${product.price}</td>
                  <td>{product.quantity} unidades</td>
                  <td>${product.price * product.quantity}</td>
                  <td>
                    <button
                      className="cart__deleteBtn"
                      onClick={() => deleteProduct(product)}
                    >
                      <i className="fa-solid fa-trash fa-2xl"></i>
                      <i className="fa-solid fa-trash-can-xmark"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot className="cart__foot">
              <tr>
                <th></th>
                <th></th>
                <th>Cantidad Total</th>
                <th>{subTotal} unidades</th>
                <th>${total}</th>
                <th className="cart__thBtnContainer">
                  <div className="cart__btnContainer">
                    <button
                      className="cart__btnClean"
                      onClick={() => deleteCart()}
                    >
                      Borrar Carrito
                    </button>
                  </div>
                </th>
              </tr>
            </tfoot>
          </table>
        </div>

        <div className="form__mainContainer">
          <h2>Completar el Formulario para Finalizar la Compra</h2>
          <form className="form__container" onSubmit={onSubmit}>
            <TextField
              className="form__textField"
              placeholder="Nombre"
              value={error.name}
              name="name"
              onChange={handleOnChange}
              pattern="^[A-Za-z]"
            />
            <div>{error.nameError}</div>
            <TextField
              className="form__textField"
              placeholder="Apellido"
              value={client.lastName}
              name="lastName"
              onChange={handleOnChange}
            />
            <div>{error.lastNameError}</div>
            <TextField
              className="form__textField"
              placeholder="eMail"
              value={client.email}
              name="email"
              onChange={handleOnChange}
            />
            <div>{error.emailError}</div>
            <button className="form__btn">Finalizar Compra</button>
          </form>
        </div>
      </section>
    );
  }
};

export default Cart;
