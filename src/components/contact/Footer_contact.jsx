import React from "react";
import Contact from "./Contact";
const Footer_contact = () => {
	return (
		<div className="container justify-content">
			<br />
			<br />
			<br />
			<section>
				<h2>Contact me</h2>
				<div className="container justify-content">
					<br />
					<p className="text-gray">
						I help businesses and companies
						reach their goals by designing
						user-centric digital products &
						interactive experiences.
					</p>

					<Contact />
				</div>
			</section>
		</div>
	);
};

export default Footer_contact;
