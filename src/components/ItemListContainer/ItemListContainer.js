import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import './ItemListContainer.css';
import Products from "../../Products.json";

const ItemListContainer = ({ greeting }) => {
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
      <h1 className="EstiloItemList">{greeting}</h1>
      <ItemList productos={productos} />
    </>
  );
};
export default ItemListContainer;