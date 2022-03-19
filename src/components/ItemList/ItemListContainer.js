import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router";
import { db } from "../../firebase/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";
import Spinner from '../Spinner/Spinner';
import "../../App.css";

const ItemListContainer = (props) => {
  let productCat = "";
  let productCategory = useParams().name;

  if (productCategory === "food") {
    productCat = "Alimentos";
  } else if (productCategory === "toys") {
    productCat = "Juguetes";
  } else if (productCategory === "accessories") {
    productCat = "Accesorios";
  }

  const [allProducts, setAllProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      if (productCategory) {
        const q = query(
          collection(db, "allProducts"),
          where("category", "==", productCategory)
        );
        const fireBaseProducts = [];
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((item) => {
          fireBaseProducts.push({ ...item.data(), id: item.id });
        });
        setAllProducts(fireBaseProducts);
      } else {
        const q = query(collection(db, "allProducts"));
        const fireBaseProducts = [];
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((product) => {
          fireBaseProducts.push({ ...product.data(), id: product.id });
        });
        setAllProducts(fireBaseProducts);
      }
    };
    getProducts();
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [productCategory]);

  return (
    <>
      {isLoading ? (
        <div className="spinner">
          <Spinner />
        </div>
      ) : (
        <div className="title__container">
          <h1>{props.title}</h1>
          <h2>
            {props.categories} {productCat}
          </h2>
          <ItemList products={allProducts} />
        </div>
      )}
    </>
  );
};

export default ItemListContainer;
