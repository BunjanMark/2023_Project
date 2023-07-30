import React from "react";
import "./features.css";
import Coding from "../../../assets/Featured work/Coding.jpg";
import PC from "../../../assets/Featured work/PC.jpg";
const Features = () => {
	return (
		<div className="container">
			<div>
				<div>
					<img
						src={Coding}
						alt=""
						className="img-div-1"
					/>
				</div>
				<img src={PC} alt="" className="img-div-1" />
			</div>
		</div>
	);
};

export default Features;
