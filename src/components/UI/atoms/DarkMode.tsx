import React, {useState, useEffect} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSun, faMoon} from "@fortawesome/free-solid-svg-icons";
import {ChangeEventHandler} from "react";

export const DarkMode = () => {
	const setDark = () => {
		localStorage.setItem("theme", "dark");
		document.documentElement.setAttribute("data-theme", "dark");
	};

	const setLight = () => {
		localStorage.setItem("theme", "light");
		document.documentElement.setAttribute("data-theme", "light");
	};

	const storedTheme = localStorage.getItem("theme");

	const [iconMode, setIconMode] = useState(
		storedTheme === "light" ? true : false
	);

	const prefersDark =
		window.matchMedia &&
		window.matchMedia("(prefers-color-scheme: dark)").matches;

	const defaultDark =
		storedTheme === "dark" || (storedTheme === null && prefersDark);

	if (defaultDark) {
		setDark();
	}

	return (
		<div className="toggle-theme-wrapper">
			{iconMode ? (
				<FontAwesomeIcon
					icon={faSun}
					onClick={() => {
						setDark();
						setIconMode(false);
						window.location.reload();
					}}
				/>
			) : (
				<FontAwesomeIcon
					icon={faMoon}
					onClick={() => {
						setLight();
						setIconMode(true);
						window.location.reload();
					}}
				/>
			)}
		</div>
	);
};
