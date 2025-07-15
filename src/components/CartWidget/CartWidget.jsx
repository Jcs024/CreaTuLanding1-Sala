import "./cartwidget.css";
import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () =>{
    return(
        <div className="cartwidget">
            <FaShoppingCart className="carrito" />
            <p>6</p>

        </div>
    )
}

export default CartWidget