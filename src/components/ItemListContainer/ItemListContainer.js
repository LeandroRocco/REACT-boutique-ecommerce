import './ItemListContainer.css';
import ItemList from "../ItemList/ItemList";
import { useEffect, useState } from "react";
import Products from "../../Products.json";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  const getData = (data) =>
      new Promise((resolve, reject) => {
          setTimeout(() => {
              if (data) {
                  resolve(data);
              } else {
                  reject("No se encontro nada");
              }
          }, 2000);
      });

  useEffect(() => {
      getData(Products)
          .then((res) => setProductos(res))
          .catch((err) => console.log(err));

  }, []);

  return (
    <>
      <ItemList productos={productos} />
    </>
  );
};
export default ItemListContainer;