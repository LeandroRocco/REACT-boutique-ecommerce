import { useState } from "react";
import { ItemCount } from "../ItemCount/ItemCount";
import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
  const [qty, setQty] = useState(0);
  const onAdd = (selectedQty) => {
    setQty(selectedQty);
    console.log(`Agregaste ${selectedQty} productos`);
  };
  return (
    <>
      <h1 className="EstiloItemList">{greeting}</h1>
      <ItemCount stock={20} initial={0} onAdd={onAdd} />
    </>
  );
};
export default ItemListContainer;