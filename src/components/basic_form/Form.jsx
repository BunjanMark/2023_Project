import React from "react";
import "./form.css";
import { useState } from "react";

const Form = () => {
	const [data, setData] = useState({
		first_name: " ",
		last_name: " ",
		email: " ",
		password: " ",
	});

	const handleChange = (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
		console.log(data);
	};
	return (
		<div className="container justify-content">
			<br />
			<br />
			<br />
			<div>
				<label htmlFor="">Firstname</label>
				<input
					type="text"
					name="first_name"
					//
					onChange={handleChange}
					// Target first_name and whatever changes in input, it's value is stored in current state in useState
					value={data.first_name}
				/>
				<label htmlFor="">Lastname</label>
				<input
					type="text"
					name="last_name"
					onChange={handleChange}
					value={data.last_name}
				/>
				<label htmlFor="">Email</label>
				<input
					type="email"
					name="email"
					onChange={handleChange}
					value={data.last_name}
				/>
				<label htmlFor="">Password</label>
				<input
					type="password"
					name="password"
					onChange={handleChange}
					value={data.last_name}
				/>
				<input
					type="submit"
					name="submit"
					value="Register"
				/>
			</div>
		</div>
	);
};

export default Form;
