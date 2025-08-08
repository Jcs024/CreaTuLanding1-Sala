import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import './cart.css';

const Cart = () => {
    const { cart, totalPrice, deleteProductById, updateProductQuantity, emptyCart } = useContext(CartContext);

    if (cart.length === 0){
        return (
            <div className="vacio">
                <h2>Carrito Vacío</h2>
                <Link to="/"><button className="carrito-comprar-btn">Volver</button></Link>
            </div>
        );
    }

    return (
        <div className="cart-container">
            <h2>Carrito de compras</h2>
            {
                cart.map((productCart) => (
                    <div className="item-container" key={productCart.id}>
                        <img src={productCart.image} alt="" />
                        <p className="title">{productCart.title}</p>
                        <p>c/u: ${productCart.price} USD</p>
                        <div className="carrito-item-controls">
                            <button className="cantidad-btn"
                                onClick={() => updateProductQuantity(productCart.id, productCart.quantity - 1)}
                                disabled={productCart.quantity <= 1}
                            >-</button>

                            <span style={{ margin: '0 10px' }}>{productCart.quantity}</span>

                            <button className="cantidad-btn"
                                onClick={() => updateProductQuantity(productCart.id, productCart.quantity + 1)}
                                disabled={productCart.quantity >= productCart.stock}
                            >+</button>
                        </div>
                        <p>Precio parcial: ${productCart.price * productCart.quantity} USD</p>
                        <button onClick={() => deleteProductById(productCart.id)} className="carrito-vaciar-btn">Eliminar</button>
                    </div>
                ))
            }
            <p>Precio total: ${totalPrice()} USD</p>
            <Link to="/checkout" className="carrito-comprar-btn">Continuar con mi compra</Link>
            <button onClick={() => emptyCart()} className="carrito-vaciar-btn">Vaciar carrito</button>
        </div>
    );
}

export default Cart;
