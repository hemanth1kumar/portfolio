import React from "react";
import Project from "../project/project.component";
import "./projects.styles.css";

export default class Projects extends React.Component {
	constructor() {
		super();
		this.state = {
			projects: [
				{
					title: "Social Network",
					description: (
						<span>
							A platform for developers to find other developers and follow thier github profiles and repositories. It is a{" "}
							<strong> MERN stack </strong> application with Atlas cloud as database and Redux for overall application state
							management. In trend <strong>Token based authentication </strong> is implemented using jsonwebtoken and
							passwords are encrypted using <strong>brcypt.js</strong>.
						</span>
					),
					tags: "MERN, ReactJs, Redux, NodeJs, MongoDb, ReactRouter, jwt",
					githubLink: "https://github.com/hemanth1kumar/socialnetwork",
					url: "https://shielded-falls-98909.herokuapp.com/",
				},
				{
					title: "Sports Management System",
					description: (
						<span>
							{" "}
							<strong>Django</strong> based web application for managing sports activities in an organization, school, college
							etc.
							<strong> Authentication</strong> and role based <strong>authorization</strong> are implemented. Admin, Coach,
							Player are the three different roles available and each have different privileges. Any announcement or updates
							can be easily views through the site. Plain html, css and vanilla javascript are used.
						</span>
					),
					tags: "Django, HTML5, CSS3, JS",
					githubLink: "https://github.com/hemanth1kumar/Sportsmanagementsystem",
					url: null,
				},
				{
					title: "Plant Monitoring System",
					description: (
						<span>
							{" "}
							<strong>IoT</strong> based web application using <strong>Django</strong> for monitoring the condition of the
							plant surrounding environment. Various sensors like Temperature, moisture sensors are used to collect data from
							plant. <strong> Raspberry pi 3</strong> is used to send the collected information to the application on cloud
							and the web app fetches data from database and renders the UI.
							<br />
							<br />
							Control of actuator or motor through web application is an added feature and the actuator is automatically
							turned on/off when the temperature or any other parameter or parameters together falls below threshold level.
						</span>
					),
					tags: "Django, HTML5, CSS3, JS",
					githubLink: null,
					url: null,
				},
				{
					title: "To-do App",
					description: (
						<span>
							To-do app made in <strong>ReactJs</strong> with responsiveness incorporated with the help of{" "}
							<strong>flexbox</strong> and css media queries.
							<strong>Redux</strong> is used for state management and acts as a single source of truth to the app.
						</span>
					),
					tags: "ReactJs, Redux, CSS3, Flexbox",
					githubLink: null,
					url: null,
				},
				{
					title: "Static Responsive Website",
					description: (
						<span>
							{" "}
							A static <strong>Responsive</strong> website is made with no frameworks liek bootstrap, material ui etc. CSS{" "}
							<strong>Flexbox</strong> is used with a combination of media queries to maintain responsiveness in all screen
							size devices.
						</span>
					),
					tags: " HTML5, CSS3, Flexbox",
				},
			],
		};
	}

	render() {
		return (
			<div className="projects">
				<div className="jumbotron">
					<div className="container">
						<h3 className="title"> Projects </h3>
						<div className="row mb-4">
							<p className="subtitle ml-auto"> ~ Projects always play a crucial role in getting ahead in your career ~ </p>
						</div>
						{/* <p className="subtitle">These are some of the interesting projects that I have done.</p> */}
					</div>
				</div>
				<div className="container">
					{this.state.projects.map((project, i) => (
						<Project {...project} key={i} />
					))}
				</div>
			</div>
		);
	}
}
