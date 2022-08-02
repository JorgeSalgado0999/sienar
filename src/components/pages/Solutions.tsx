import React from "react";
import {Video, Service} from "src/components/UI/atoms";
import {
	Mobile,
	Web,
	Machine,
	Cloud,
	Robotic,
	Blockchain,
} from "src/components/UI/atoms/icons";
import "./Solutions.css";

export const Solutions = () => {
	return (
		<div>
			<Video type="solutions" />
			<h2 className="center">software development For The Enterprise</h2>
			<p className="center">
				With experience in machine learning and software development, we use and
				develop technology to increase the competitiveness of your business by
				focusing on user experience and innovation.
			</p>
			<div className="row">
				<div className="col-img">
					<Web />
				</div>
				<div className="col-content">
					<h3>WEB Development</h3>
					<p>
						We develop web apps and backend solutions with engaging user flows
						to enhance user experience, we specialize in building enterprise
						websites.
					</p>
				</div>
			</div>

			<div className="row">
				<div className="col-content">
					<h3>MOBILE APPS</h3>
					<p>
						We develop high-quality mobile apps to promote your products or
						services without losing sight of your budget and schedule.
					</p>
				</div>
				<div className="col-img">
					<Mobile />
				</div>
			</div>

			<div className="row">
				<div className="col-img">
					<Machine />
				</div>
				<div className="col-content">
					<h3>MACHINE LEARNING</h3>
					<p>
						AI approaches and business applications have gained momentum in
						recent years and have enabled companies to streamline operations,
						improve performance and reduce uptime by relying on decision-making
						systems.
					</p>
				</div>
			</div>

			<div className="row">
				<div className="col-content">
					<h3>CLOUD SERVICES</h3>
					<p>
						Cloud solutions allow faster responses when processing large amounts
						of data. Save your business valuable time and money by deploying
						intelligent strategies and managed services in the cloud.
					</p>
				</div>
				<div className="col-img">
					<Cloud />
				</div>
			</div>

			<div className="row">
				<div className="col-img">
					<Robotic />
				</div>
				<div className="col-content">
					<h3>ROBOTIC VISION</h3>
					<p>
						Leverage the latest technologies on image processing for appearance
						inspection, alignment measurement, feature recognition, code
						reading, vision-guided robotics, position verification, and more.
					</p>
				</div>
			</div>

			<div className="row">
				<div className="col-content">
					<h3>BLOCKCHAIN </h3>
					<p>
						Develop various DeFi business models with smart contracts and
						decentralized organizations. Blockchain development is a
						cost-effective way to address the challenges faced by traditional
						centralized enterprises.
					</p>
				</div>
				<div className="col-img">
					<Blockchain />
				</div>
			</div>
			{/* */}
		</div>
	);
};
