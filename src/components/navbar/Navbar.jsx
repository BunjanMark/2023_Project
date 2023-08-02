import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import "./navbar.css";
import Home from "../../pages/Home/Home";
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
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/work">Work</Link>
					</li>
					<li>
						<Link to="/contact">
							Contact
						</Link>
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
