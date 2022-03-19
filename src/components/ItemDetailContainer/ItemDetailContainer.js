import React, { useState, useEffect } from "react";
import ItemDetail from "../../views/ItemDetail/ItemDetail";
import { useParams } from "react-router";
import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";
import Spinner from '../Spinner/Spinner';
import "../../App.css";

const ItemDetailContainer = () => {
  let id = useParams();
  let productID = id.id;
  const [filterProducts, setFilterProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const filtProducts = async () => {
      const q = query(collection(db, "allProducts"));
      const fireBaseProducts = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((product) => {
        fireBaseProducts.push({ ...product.data(), id: product.id });
      });
      const allProductsFilter = fireBaseProducts.find(
        (productFilter) => productID === productFilter.id
      );
      setFilterProducts(allProductsFilter);
    };
    filtProducts();
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [productID]);

  return (
    <>
      {isLoading ? (
        <div className="spinner">
          <Spinner />
        </div>
      ) : (
        <div>
          <ItemDetail product={filterProducts} />
        </div>
      )}
    </>
  );
};

export default ItemDetailContainer;
