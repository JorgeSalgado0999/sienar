import React, {useEffect, useRef, useState} from "react";
import "./Video.css";

interface Props {
	type: string;
}

export const Video = (props: Props) => {
	const type = props.type;
	const mode = localStorage.getItem("theme");
	const [url, setUrl] = useState(
		`https://sienar.s3.amazonaws.com/${type}_${mode}.mp4`
	);

	console.log(url);
	return (
		<div className="video-container">
			<video className="video" playsInline loop muted autoPlay src={url} />
		</div>
	);
};
