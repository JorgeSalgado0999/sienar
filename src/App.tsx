import React, {useEffect, useState} from "react";
import {Link, Route, Routes} from "react-router-dom";
/* Inside imports */
import "src/Global/GlobalStyles.css";
import {Home, About, Solutions} from "src/components/pages";
import {NavBar, Footer} from "src/components/UI/molecules";

function App() {
	return (
		<div className="container">
			<header>
				<NavBar />
			</header>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/Solutions" element={<Solutions />} />
				<Route path="/About/" element={<About />}>
					<Route path="/About/:section" element={<About />} />
				</Route>
			</Routes>

			<Footer />
		</div>
	);
}

export default App;
