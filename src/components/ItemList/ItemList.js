import Item from "../Item/Item";
import './ItemList.css'

export const ItemList = ({ productos }) => {
  
    return (
        <>
            <div>
                <div>
                    {productos.map((productos) => (
                        <Item productos={productos} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default ItemList;