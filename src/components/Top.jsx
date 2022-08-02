import React from "react";
import Mail from "../images/Mail.svg";
import linkedin from "../images/linkedin.svg";

export default function Top() {
	return (
		<>
			<div className="top">
				<h1 className="name">Laura Smith</h1>
				<p className="role">Front End Developer</p>
				<small className="website">laurasmith.website</small>
			</div>
			<span className="btn-cont">
				<button className="btn mail">
					<img src={Mail} /> Email
				</button>
				<button className="btn linkedin">
					<img src={linkedin} /> Linkedin
				</button>
			</span>
		</>
	);
}
