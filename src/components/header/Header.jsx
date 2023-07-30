import React from "react";
import "./header.css";
import Contact from "../contact/Contact";
import Me from "../../assets/Me.jpg";
import logo from "../../assets/logo.png";
const Header = () => {
	return (
		<div className="container header">
			<section>
				<h1 id="header">
					Hi, I am Mark your Web developer based
					in Cagayan de Oro City.
				</h1>
				<p className="text-gray header-text">
					I help businesses and companies reach
					their goals by designing user-centric
					digital products & interactive
					experiences.
				</p>

				<Contact />
			</section>
			<section id="me-section">
				<img src={Me} alt="" id="me" />
			</section>
		</div>
	);
};

export default Header;
