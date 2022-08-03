import React, {useState} from "react";
import {Link} from "react-router-dom";
import "./Service.css";

interface Props {
	type: string;
	photo: string;
	service: string;
}

export const Service = (props: Props) => {
	const [type, setType] = useState(props.type === "left" ? true : false);
	const url = `https://sienar.s3.amazonaws.com/${props.photo}.png`;
	const overlayStyle = `color-overlay color-overlay-${props.type}`;
	return (
		<div className={type ? "left" : "right"}>
			<Link to={`/solutions/${props.photo}`} className="service-container">
				<img src={url} alt="" className="service-photo" />
				<div className={overlayStyle}></div>
				<h4 className="text-position">{props.service}</h4>
			</Link>
		</div>
	);
};
