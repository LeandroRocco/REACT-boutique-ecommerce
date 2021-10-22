import { Item } from "./Item/Item";
import './ItemList.css'

export const ItemList = ({ product }) => {
  
    return (
        <>
            <Item
                name={product.name}
                price={product.price}
                img={product.img}
                stock={product.stock}
            />
        </>
    );
};

export default ItemList;