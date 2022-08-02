import React from "react";
import facebook from "../images/FacebookIcon.svg";
import github from "../images/GitHubIcon.svg";
import instagram from "../images/InstagramIcon.svg";
import twitter from "../images/TwitterIcon.svg";

export default function Footer() {
	return (
		<footer>
			<div className="footer-container">
				<img src={twitter} />
				<img src={facebook} />
				<img src={instagram} />
				<img src={github} />
			</div>
		</footer>
	);
}
