import React from "react";
import "./features.css";
import Coding from "../../../assets/Featured work/Coding.jpg";
import PC from "../../../assets/Featured work/PC.jpg";
import Low1 from "../../../assets/Featured work/Low1.jpg";
import Low2 from "../../../assets/Featured work/Low2.jpg";
const Features = () => {
	return (
		<div className="container">
			<div className="feature-main">
				<div className="feature-main-row1">
					<div>
						<div id="image-header">
							<h2>Inversion</h2>
						</div>
						<img
							src={Coding}
							alt=""
							className="img-div-1"
						/>
					</div>
					<img
						src={PC}
						alt=""
						className="img-div-1"
					/>
				</div>
				<div className="feature-main-row1">
					<img
						src={Low2}
						alt=""
						className="img-div-1"
					/>
					<div>
						<img
							src={Low1}
							alt=""
							className="img-div-1"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Features;
