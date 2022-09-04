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
	const url = `https://firebasestorage.googleapis.com/v0/b/sienar2022.appspot.com/o/${props.photo}.png?alt=media&token=342161f7-42e0-44bc-b874-fe260a459072`;
	const overlayStyle = `color-overlay color-overlay-${props.type}`;
	const containerStyle = `service-container container-${props.type}`;
	const textPosition = `text-position${props.type}`;
	return (
		<div className={type ? "left" : "right"}>
			<Link to={`/solutions/${props.photo}`} className={containerStyle}>
				<img src={url} alt="" className="service-photo" />
				<h4 className={textPosition}>{props.service}</h4>
			</Link>
		</div>
	);
};
