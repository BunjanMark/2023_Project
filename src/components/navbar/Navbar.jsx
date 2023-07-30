import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/logo.png";

import "./navbar.css";
const Navbar = () => {
	const [clicked, setClick] = useState(false);
	const handleClick = () => {
		setClick(!clicked);
	};
	return (
		<div className="nav">
			<div className="container" id="nav">
				<ul id="logo-section">
					<img
						src={logo}
						alt="page logo"
						className="logo"
					/>
					<h2>Sho.</h2>
				</ul>
				<ul
					id="menu"
					className={
						clicked
							? "menu active "
							: "menu "
					}
				>
					<li>
						<a href="index.html">home</a>
					</li>
					<li>
						<a href="index.html">work</a>
					</li>
					<li>
						<a href="index.html">contact</a>
					</li>
				</ul>
				<ul
					id="mobile"
					onClick={handleClick}
					className="icon"
				>
					<span>
						{clicked ? (
							<FaTimes className="nav-icon" />
						) : (
							<FaBars className="nav-icon" />
						)}
					</span>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
