import React from "react";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Work from "./components/work/feature_header/Work";
import Features from "./components/work/feature_main/Features";
const App = () => {
	return (
		<div>
			<Navbar />
			<Header />
			<Work />
			<Features />
		</div>
	);
};

export default App;
