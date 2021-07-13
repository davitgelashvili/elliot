import './style.scss';
import {Link} from "react-router-dom";

function Header(){
    return (
        <div className="header">
            <div className="container d-flex align-items-center justify-content-between">
                <h1 className="header__logo">LOGO</h1>
                <ul className="header__menu d-flex">
                    <li className="header__menu--item">
                        <Link to="/" className="header__menu--link">Main</Link>
                    </li>
                    <li className="header__menu--item">
                        <Link to="/news" className="header__menu--link">News</Link>
                    </li>
                    <li className="header__menu--item">
                        <Link to="/about" className="header__menu--link">About</Link>
                    </li>
                    <li className="header__menu--item">
                        <Link to="/faq" className="header__menu--link">FAQ</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header