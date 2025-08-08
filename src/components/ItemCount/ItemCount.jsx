import { useState, useEffect } from "react";

const ItemCount = ({ stock, addProduct }) => {
    const [count, setCount] = useState(1);

    useEffect(() => {
        if (count > stock) {
            setCount(stock);
        }
    }, [stock]);

    const handleClickDecrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const handleClickIncrement = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const handleAdd = () => {
        if (stock === 0) return; 
        addProduct(count);
    };

    if (stock === 0) {
        return <p>SIN STOCK</p>;
    }

    return (
        <div className="quantity-container">
            <button onClick={handleClickDecrement}>-</button>
            <p>{count}</p>
            <button onClick={handleClickIncrement}>+</button>
            <button className="add-to-cart-btn" onClick={handleAdd}>Agregar al carrito</button>
        </div>
    );
};

export default ItemCount;

