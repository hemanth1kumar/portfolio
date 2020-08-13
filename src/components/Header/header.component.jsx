import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./header.styles.css";

const Header = ({ location: { pathname } }) => {
	return (
		<nav className="navbar navbar-dark navbar-expand-sm fixed-top">
			<div className="container">
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#Navbar"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<Link to="/" className="navbar-brand">
					<h3 className="title">Hemanth Kumar</h3>
				</Link>
				<div className="collapse navbar-collapse" id="Navbar">
					<ul className="navbar-nav ml-auto">
						<li className={pathname === "/" ? "nav-item active ml-sm-2" : "nav-item ml-sm-2"}>
							<Link to="/" className="nav-link">
								<span className="fa fa-home fa-lg"></span> Home
							</Link>
						</li>
						<li className={pathname === "/projects" ? "nav-item active ml-sm-2" : "nav-item ml-sm-2"}>
							<Link to="/projects" className="nav-link">
								<span className="fa fa-address-card fa-lg"></span> Projects
							</Link>
						</li>
						<li className={pathname === "/contact" ? "nav-item active ml-sm-2" : "nav-item ml-sm-2"}>
							<Link to="/contact" className="nav-link">
								<span className="fa fa-address-card fa-lg"></span> Contact
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default withRouter(Header);
