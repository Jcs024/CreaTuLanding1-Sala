import "./cartwidget.css";
import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () =>{
    return(
        <div className="cartwidget">
            <FaShoppingCart className="carrito" />
            <h2>6</h2>

        </div>
    )
}

export default CartWidget