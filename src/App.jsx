import React from "react";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import MessageMe from "./pages/MessageMe/MessageMe";
import Register from "./pages/Register/Register";
import Work from "./pages/Work/Work";
// allows dynamic pages using react router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route
					path="/login"
					element={<Login />}
				></Route>
				<Route
					path="/message"
					element={<MessageMe />}
				></Route>
				<Route path="/work" element={<Work />}></Route>
				<Route
					path="/contact"
					element={<Register />}
				></Route>
			</Routes>
		</Router>
	);
};

export default App;
