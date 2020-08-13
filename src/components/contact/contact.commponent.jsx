import React from "react";
import "./contact.styles.css";
import Panda from "../../assets/img/panda2.jpg";
import { useState } from "react";

const ContactMe = () => {
	const [formData, setFormData] = useState({ name: "", email: "", msg: "" });

	const onSubmit = () => {
		alert("Thank You !!");
		setFormData({ name: "", email: "", msg: "" });
	};

	return (
		<div className="contact-me">
			<div className="jumbotron">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<h1>Contact Me </h1>
						</div>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-12 col-sm-6 contact-img">
					<img src={Panda} alt="panda" />
				</div>
				<div className="col-12 col-sm-6">
					<div className="row p-4">
						<div className="col-12 col-sm-10">
							<div className="form-group">
								<label>Name: </label>
								<input
									className="form-control"
									placeholder="name"
									name="name"
									value={formData.name}
									onChange={(e) => setFormData({ ...formData, name: e.target.value })}
								/>
							</div>
						</div>
						<div className="col-12 col-sm-10 mt-sm-2">
							<div className="form-group">
								<label>Email: </label>
								<input
									className="form-control"
									placeholder="eg. hem@gmail.com"
									name="email"
									value={formData.email}
									onChange={(e) => setFormData({ ...formData, email: e.target.value })}
								/>
							</div>
						</div>
						<div className="col-12 col-sm-10 mt-sm-2">
							<div className="form-group">
								<label>Message: </label>
								<input
									className="form-control"
									placeholder="message"
									name="message"
									value={formData.msg}
									onChange={(e) => setFormData({ ...formData, message: e.target.value })}
								/>
							</div>
						</div>
						<div className="col-sm-9 mt-2">
							<button className="btn btn-primary float-right" onClick={onSubmit}>
								Submit
							</button>
						</div>
					</div>
					<div className="row pi p-4 mt-5 mr-sm-4">
						<div className="col-12 col-sm-12 mt-4">
							{/* <div className="form-group">
						<input className="form-control" placeholder="" />
					</div> */}
							Personal Information:
						</div>
						<div className="col-12 col-sm-12 mt-4">
							<p>Email : hemanthkumar.m16@iiits.in </p>
							<p>Phone no : +91 8919152592</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactMe;
