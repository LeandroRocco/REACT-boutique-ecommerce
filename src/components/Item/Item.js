import { Link } from "react-router-dom";
import { ItemCount } from '../ItemCount/ItemCount.js';

const Item = ({ productos }) => {
    return (
        <div>  
            <div>
                <img src={productos.img} alt="imagen" />
            </div>
            <h3>{productos.name}</h3>
            <p>${productos.price}</p>
            <ItemCount stock={productos.stock} initial={1} />
            <p>{productos.stock} unidades</p>
            <Link>
                Ver detalles
            </Link>
        </div>
    );
}

export default Item;