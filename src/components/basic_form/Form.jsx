import React from "react";
import "./form.css";
import { useState } from "react";

const Form = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	// Define the form submission handler function
	const formSubmissionHandler = (event) => {
		event.preventDefault();
		console.log(formData);
	};
	return (
		<div className="container justify-content">
			<br />
			<br />
			<br />
			<form action="/action_page.php">
				<label>Full Name</label>
				<input
					type="text"
					id="name"
					name="name"
					placeholder="Enter your name.."
				/>
				<br />
				<label>Email</label>
				<input
					type="email"
					id="email"
					name="email"
					placeholder="Enter your email"
				/>
				<br />
				<label>Subject</label>
				<textarea
					id="subject"
					name="subject"
					placeholder="Enter your message.."
				></textarea>
				<input type="submit" value="Submit" />
			</form>
		</div>
	);
};

export default Form;
