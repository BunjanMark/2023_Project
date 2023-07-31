import React from "react";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Work from "./components/work/feature_header/Work";
import Features from "./components/work/feature_main/Features";
import Visuals from "./components/work/visual_exploration/Visuals";
const App = () => {
	return (
		<div>
			<Navbar />
			<Header />
			<Work />
			<Features />
			<Visuals />
		</div>
	);
};

export default App;
