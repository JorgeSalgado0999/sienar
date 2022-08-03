import React, {useEffect, useState} from "react";
import db from "src/firebase";
import {collection, onSnapshot} from "firebase/firestore";
import {Video, Service} from "src/components/UI/atoms";
import {
	Analyse,
	Strategy,
	Implement,
	Development,
	Follow,
} from "src/components/UI/atoms/icons";
import "./Home.css";

export const Home = () => {
	const [datos, setDatos] = useState([]);

	useEffect(() => {
		onSnapshot(collection(db, "sienar-data"), (snapshot) => {
			setDatos(snapshot.docs.map((doc) => doc.data()));
		});
	}, []);

	return (
		<div>	
			<Video type="home" />
			<div className="intro">
				<h2 className="center">
					software development For The Enterprise {datos[0].projects}
				</h2>
				<p className="center">
					With experience in machine learning and software development, we use
					and develop technology to increase the competitiveness of your
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
	);
};
