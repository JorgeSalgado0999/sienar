import React, {useEffect, useState} from "react";
import {collection, onSnapshot} from "firebase/firestore";
import db from "src/firebase";

import {Video, Service} from "src/components/UI/atoms";
import {
	Analyse,
	Strategy,
	Implement,
	Development,
	Follow,
	LogoV,
} from "src/components/UI/atoms/icons";
import "./Home.css";

export const Home = () => {
	const [loading, setLoading] = useState(true);
	const [projects, setProjects] = useState("0");
	const [date, setDate] = useState("");
	const [days, setDays] = useState(0);

	function calcDays(parametro: string) {
		const date_1 = new Date(parametro);
		let date_2 = new Date();
		let difference = date_2.getTime() - date_1.getTime();
		let totalF = Math.ceil(difference / (1000 * 3600 * 24));
		setDays(totalF);
	}

	useEffect(() => {
		onSnapshot(collection(db, "sienar-data"), (snapshot) => {
			snapshot.docs.map((doc) => {
				calcDays(doc.data().date);
				setProjects(doc.data().projects);
				setDate(doc.data().date);
			});
		});
		setLoading(false);
	}, []);

	return (
		<div>
			{loading ? (
				<div></div>
			) : (
				<div>
					<div className="video-container">
						<Video type="home" />
						<div className="home-logo-absolute">
							<LogoV />
						</div>
						<div className="info-projects">
							<div className="info-box">
								<h5 className="home-info">
									+<span>{projects}</span> Completed Projects
								</h5>
							</div>
							<div className="info-box">
								<h5 className="home-info">
									+<span>{days}</span> Days on Operation
								</h5>
							</div>
						</div>
					</div>
					<h2 className="center">software development For The Enterprise</h2>
					<div className="intro">
						<p className="">
							With experience in machine learning and software development, we
							use and develop technology to increase the competitiveness of your
							business by focusing on user experience and innovation.
						</p>
					</div>
					<div className="services">
						<Service type="left" service="WEB DEVELOPMENT" photo="web" />
						<Service type="right" service="MOBILE APPS" photo="mobile" />
						<Service type="left" service="CLOUD SERVICES " photo="cloud" />
						<Service type="right" service="MACHINE LEARNING " photo="machine" />
						<Service type="left" service="ROBOTIC VISION" photo="robotic" />
						<Service type="right" service="BLOCKCHAIN" photo="blockchain" />
					</div>
					<div className="process">
						<h2>OUR PROCESS</h2>
						<div className="process-elements">
							<div className="process-element">
								<h5>
									<span>1º</span>Analyse
								</h5>
								<Analyse />
							</div>

							<div className="process-element down">
								<h5>
									<span>2º</span>Strategy
								</h5>
								<Strategy />
							</div>

							<div className="process-element ">
								<h5>
									<span>3º</span>Implement
								</h5>
								<Implement />
							</div>

							<div className="process-element down">
								<h5>
									<span>4º</span>Development
								</h5>
								<Development />
							</div>

							<div className="process-element">
								<h5>
									<span>5º</span>Follow Up
								</h5>
								<Follow />
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};
