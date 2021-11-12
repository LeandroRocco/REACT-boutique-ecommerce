import { useState } from "react";
import iconoMas from "../../assets/boton-mas.png";
import iconoMenos from "../../assets/boton-menos.png";
import "./ItemCount.css";
import { Link } from "react-router-dom";

export function ItemCount({ stock, initial, onAdd }) {
    const [count, setCount] = useState(initial);
  
    const agrega = () => {
      if (count < stock) {
        setCount(count + 1)
      }
    };
  
    const quita = () => {
      if (count > initial) {
        setCount(count - 1)
      }
    };
  
    return (
      <div>
        <div>
            <div>
                <img onClick={agrega} className="iconoMas" src={iconoMas} alt="#" />
                <div>
                    <h3>{count}</h3>
                </div>
                <img onClick={quita} className="iconoMenos" src={iconoMenos} alt="#" />
            </div>
            <Link onClick={() => onAdd(count)}>
                  Agregar al carrito
            </Link>
        </div>
      </div>
    );
  }