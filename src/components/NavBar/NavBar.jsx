import "./navbar.css";
import logo from "../../assets/jc.png";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navbar">
            <Link to="/">
                <img className="logo" src={logo} alt=""/>
            </Link>

            <ul className="categories">
                <li>
                    <Link to="/category/juegos" className="category">Juegos</Link>
                </li>
                <li>
                    <Link to="/category/regalos" className="category">Regalos</Link>    
                </li>
                <li>
                    <Link to="/category/monedas" className="category">Monedas</Link>
                </li>
            </ul>
            <CartWidget />
        </div>
    )
}

export default NavBar;