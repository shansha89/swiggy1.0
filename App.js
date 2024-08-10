import react from "react";
import reactDOM from "react-dom/client"

const Header = () => {
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?size=small" />
            </div>

            <div className="nav-items">
            <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body"></div>
    )
}

const Footer = () => {
    return (
        <div className="footer"></div>
    )
}

const Applayout = () => {
    return(
        <div className="app">
            <Header/>
        </div>
    )
}

const root = reactDOM.createRoot(document.getElementById("root"));

root.render(<Applayout/>);
