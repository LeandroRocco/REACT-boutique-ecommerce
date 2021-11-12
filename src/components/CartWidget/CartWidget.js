import iconoCarrito from "../../assets/carrito.png";
import { Link } from "react-router-dom";


const CartWidget = () => {
  return (
    <Link to="/carrito">
      <img className="Carrito" src={iconoCarrito} alt="#" />
    </Link>
  );
};

export default CartWidget;