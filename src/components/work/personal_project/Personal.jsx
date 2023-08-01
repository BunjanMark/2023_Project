import React from "react";
import "./personal.css";
import image1 from "../../../assets/Visuals/image1.jpg";
import image2 from "../../../assets/Visuals/image2.jpg";

const Personal = () => {
	return (
		<div>
			<section>
				<section className="section-header">
					<h2>Personal projects</h2>
				</section>
				<div className="container justify-content">
					<div className="feature-main">
						<div className="feature-main-row1">
							<img
								src={image1}
								alt=""
								className="img-div-1 visuals"
							/>
						</div>
						<div className="feature-main-row1">
							<img
								src={image2}
								alt=""
								className="img-div-1 visuals"
							/>
						</div>
						<div className="feature-main-row1">
							<img
								src={image2}
								alt=""
								className="img-div-1 visuals"
							/>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Personal;
