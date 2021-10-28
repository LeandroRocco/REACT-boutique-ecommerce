
export const Item = ({ productos }) => {
    return (
        <div>
            <div>
                <img src={productos.img} alt="imagen" />
            </div>
            <h3>{productos.name}</h3>
            <p>${productos.price}</p>
            <button>Agregar al carrito</button>
        </div>
    );
};