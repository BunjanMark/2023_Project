import React from "react";
import "./footer.css";
import GrfacebookOption from "react-icons/gr";

import { LiaFacebookF } from "react-icons/lia";

const Footer = () => {
	return (
		<section>
			<hr id="hr" />
			<div className="container" id="footer-container">
				<p className="text-gray header-text">
					Made by{" "}
					<span style={{ color: "white" }}>
						Shosho
					</span>{" "}
					&mdash; Copyright 2023
				</p>

				<div>
					{" "}
					<LiaFacebookF /> <LiaFacebookF />{" "}
					<LiaFacebookF /> <LiaFacebookF />{" "}
					<LiaFacebookF /> <LiaFacebookF />{" "}
				</div>
			</div>
		</section>
	);
};

export default Footer;
