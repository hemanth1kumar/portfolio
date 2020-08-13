import React from "react";
import "./homepage.styles.css";

const Homepage = () => (
	<div className="homepage">
		<div className="container">
			<div className="row">
				<div className="col-12">
					<h1 className="page-title role">Front-end Web Developer</h1>
					<p>
						This is hemanth, working as frontend developer since 8 months and passionate about web and frontend since 4 years.
					</p>
				</div>
				<div className="col-12 col-sm-11 mt-2 offset-sm-1 d-flex align-items-start justify-content-center">
					<p className="subtitle">
						Fell In Love <span className="heart"> ❤ </span> With React
					</p>
				</div>
			</div>
		</div>
	</div>
);

export default Homepage;
