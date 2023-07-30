import React from "react";
import "./contact.css";
import { CiMail } from "react-icons/ci";
const Contact = () => {
	return (
		<div>
			{/* No choice media query ta */}
			<div className="btn-primary btn">
				<CiMail className="mail-icon" />
				<p>bunjan.mark476@gmail.com</p>
			</div>
		</div>
	);
};

export default Contact;
