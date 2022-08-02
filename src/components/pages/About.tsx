import React, {useEffect, useRef} from "react";
import {useParams} from "react-router-dom";

import {Video} from "src/components/UI/atoms";
import "./About.css";

export const About = () => {
	let {section} = useParams();
	const contact = useRef(null);

	function scrollTo(elementRef: any) {
		window.scrollTo({
			top: elementRef.current.offsetTop,
			behavior: "smooth",
		});
	}

	useEffect(() => {
		if (section === "contact") {
			scrollTo(contact);
		}
	}, []);

	return (
		<div className="about">
			<Video type="solutions" />
			<div className="about-content">
				<h2>About us</h2>
				<p>
					Sienar is an agency that develops well-made software solutions. Our
					engineers are self-taught, pragmatic and dedicated to deliver the best
					user experience and quality. We dive directly into the project's
					requirements to understand all the variables involved, and work
					side-by-side with our clients in a hands-on work scheme.
				</p>
				<p>
					As new approaches with machine learning and blockchain continue to
					evolve at an accelerated pace around the world, we aim to become an
					international company that actively contributes to scientific research
					and the generation of new knowledge.
				</p>
				<p>
					We want to make a difference by demonstrating the potential of new
					technologies for business success.
				</p>
			</div>

			<h2 style={{marginLeft: "2rem"}}>Drop us a Line:</h2>
			<div className="contact-form" ref={contact}>
				<div className="col-left">
					<form>
						<label>
							Name:
							<br />
							<input type="text" />
						</label>

						<label>
							Email:
							<br />
							<input type="text" />
						</label>

						<label>
							Message:
							<br />
							<textarea />
						</label>
						<input type="submit" value="Send" />
					</form>
				</div>

				<div className="col-right">
					<h5>Or contact us:</h5>
					<p>For quoting inquiries please get in touch:</p>
					<p className="mail mb">hello@sienar.com</p>
					<p>For any other requests, contact:</p>
					<p className="mail">communications@sienar.com</p>
				</div>
			</div>
		</div>
	);
};
