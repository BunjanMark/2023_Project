import React from "react";
import "./visuals.css";
import image1 from "../../../assets/Visuals/image1.jpg";
import image2 from "../../../assets/Visuals/image2.jpg";
import image3 from "../../../assets/Visuals/image3.jpg";
import image4 from "../../../assets/Visuals/image4.jpg";
import image5 from "../../../assets/Visuals/image5.jpg";
import image6 from "../../../assets/Visuals/image6.jpg";
const Visuals = () => {
	return (
		<section>
			<div className="container">
				<section className="section-header">
					<h2>Visual Explorations</h2>
				</section>
			</div>
			<div className="container justify-content">
				<div className="feature-main">
					<div className="feature-main-row1">
						<img
							src={image1}
							alt=""
							className="img-div-1 visuals"
						/>
						<img
							src={image2}
							alt=""
							className="img-div-1 visuals"
						/>
					</div>
					<div className="feature-main-row1 ">
						<img
							src={image3}
							alt=""
							className="img-div-1 visuals"
						/>
						<img
							src={image4}
							alt=""
							className="img-div-1 visuals"
						/>
					</div>
					<div className="feature-main-row1">
						<img
							src={image5}
							alt=""
							className="img-div-1 visuals"
						/>
						<img
							src={image6}
							alt=""
							className="img-div-1 visuals"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Visuals;
