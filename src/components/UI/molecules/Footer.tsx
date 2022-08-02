import React from "react";
import {Logo, Instagram, Linkedin} from "src/components/UI/atoms/icons";
import "./Footer.css";

export const Footer = () => {
	return (
		<footer>
			<div className="izq">
				<Logo />
				<h1>SIENAR</h1>
			</div>
			<div className="der">
				<Instagram />
				<Linkedin />
			</div>
		</footer>
	);
};
