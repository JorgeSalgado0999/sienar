import React, {useEffect, useState} from "react";
import {Link, Route, Routes} from "react-router-dom";
/* Inside imports */
import "src/Global/GlobalStyles.css";
import {Home, About, Solutions, Admin} from "src/components/pages";
import {NavBar, Footer} from "src/components/UI/molecules";

function App() {
	return (
		<div className="container">
			<header>
				<NavBar />
			</header>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/sienar-admin" element={<Admin />} />
				<Route path="/Solutions" element={<Solutions />}>
					<Route path="/Solutions/:service" element={<Solutions />} />
				</Route>
				<Route path="/About/" element={<About />}>
					<Route path="/About/:section" element={<About />} />
				</Route>
				<Route path="/*" element={<h1> Página no encontrada</h1>} />
			</Routes>

			<Footer />
		</div>
	);
}

export default App;
