import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Homepage from "./components/homepage/homepage.component";
import Header from "./components/Header/header.component";
import Projects from "./components/projects/projects.component";
import ContactMe from "./components/contact/contact.commponent";
function App() {
	return (
		<div className="App">
			<Header />
			<Switch>
				<Route exact path="/" component={Homepage} />
				<Route exact path="/projects" component={Projects} />
				<Route exact path="/contact" component={ContactMe} />
			</Switch>
		</div>
	);
}

export default App;
