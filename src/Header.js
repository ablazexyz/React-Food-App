import { useState } from "react"
import Logo from "./assets/img/Burger.png"
import { Link } from "react-router-dom"

const Title = () => {
    return (
        <a className="logo-link" href="/">
            <img
                className="logo"
                src={Logo}
                alt="Logo"
            />
            <h5>Food Wars</h5>
        </a>

    )
}

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/about"}>About</Link></li>
                    <li><Link to={"/contact"}>Contact</Link></li>
                    <li>Cart</li>
                </ul>
                <button onClick={() => {
                    setIsLoggedIn(!isLoggedIn)
                }}>{isLoggedIn ? "Logout" : "Login"}</button>
            </div>
        </div>

    )
}

export default Header;