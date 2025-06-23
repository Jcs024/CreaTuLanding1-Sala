import "./navbar.css";
import logo from "../assets/jc.png";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div className="navbar">
            <img className="logo" src={logo} alt=""/>

            <ul>
                <li>Juegos</li>
                <li>Regalos</li>
                <li>Monedas</li>
            </ul>
            <CartWidget />
        </div>
    )
}

export default NavBar;