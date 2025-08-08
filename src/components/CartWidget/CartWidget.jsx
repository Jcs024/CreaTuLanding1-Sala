import "./cartwidget.css";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () =>{
    const { totalQuantity } = useContext(CartContext);
 
    return(
        <Link to="/cart" className="cartwidget">
            <FaShoppingCart className="carrito" />
            <p>{totalQuantity()}</p>
        </Link>
    )
}

export default CartWidget