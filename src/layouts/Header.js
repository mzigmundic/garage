import { NavLink } from "react-router-dom";

import logo from "../logo.png";

function Header() {
    return (
        <header className="header">
            <div className="header__content container">
                <NavLink to="/" exact className="header__logo">
                    <img src={logo} alt="logo" />
                </NavLink>
                <nav className="navigation">
                    <ul className="navigation__items">
                        <li className="navigation__item">
                            <NavLink to="/" exact activeClassName="active">
                                Home
                            </NavLink>
                        </li>
                        <li className="navigation__item">
                            <NavLink to="/collection" activeClassName="active">
                                Collection
                            </NavLink>
                        </li>
                        <li className="navigation__item">
                            <NavLink to="/brands" activeClassName="active">
                                Brands
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
