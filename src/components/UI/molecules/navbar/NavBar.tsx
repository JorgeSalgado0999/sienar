import React, {useState, useEffect} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark, faBars} from "@fortawesome/free-solid-svg-icons";
import {
	BrowserRouter,
	Routes,
	Route,
	Link,
	Outlet,
	useParams,
} from "react-router-dom";

import "./NavBar.css";
import {DarkMode} from "src/components/UI/atoms/DarkMode";

export const NavBar = () => {
	const [menuState, setMenuState] = useState(false);
	return (
		<nav className={menuState ? "NavbarItems" : "NavbarItems NavBarPadding"}>
			<Link to="/" className="nav-item">
				<h1 className="navbar-logo">
					SIENA<span>R</span>
				</h1>
			</Link>
			<div className="menu-icon" onClick={() => setMenuState(!menuState)}>
				<FontAwesomeIcon icon={menuState ? faXmark : faBars} size="5x" />
			</div>
			<ul className={menuState ? "nav-menu active" : "nav-menu"}>
				{menuState ? (
					<div className="menu-icon" onClick={() => setMenuState(!menuState)}>
						<FontAwesomeIcon icon={menuState ? faXmark : faBars} size="5x" />
					</div>
				) : (
					<div></div>
				)}
				<li className="nav-item">
					<Link
						to="/About"
						className="nav-item separator"
						onClick={() =>
							menuState ? setMenuState(!menuState) : setMenuState(menuState)
						}
					>
						About
					</Link>
				</li>
				<li className="nav-item">
					<Link
						to="/Solutions"
						className="nav-item separator"
						onClick={() =>
							menuState ? setMenuState(!menuState) : setMenuState(menuState)
						}
					>
						Solutions
					</Link>
				</li>
				<li className="nav-item">
					<Link
						to="/About/contact"
						className="nav-item separator"
						onClick={() =>
							menuState ? setMenuState(!menuState) : setMenuState(menuState)
						}
					>
						Contact
					</Link>
				</li>
				<li className="nav-item">
					<Link
						to="/"
						className="nav-item separator"
						onClick={() =>
							menuState ? setMenuState(!menuState) : setMenuState(menuState)
						}
					>
						ENG/ESP
					</Link>
				</li>
				<li className="nav-item ">
					<DarkMode />
				</li>
			</ul>
		</nav>
	);
};
