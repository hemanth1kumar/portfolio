import React from "react";
import "./project.styles.css";

const Project = ({ title, description, tags, githubLink, url }) => (
	<div className="card p-2 mb-4">
		<div className="row project">
			<div className="col-12">
				<div className="row d-flex justify-content-center align-items-center">
					<div className="col-12">
						<h2 className="p-2">{title}</h2>
					</div>
					<div className="col-11 offset-1 mb-3">
						<p className="description">{description}</p>
					</div>

					{githubLink && (
						<div className="col-11 offset-1 mb-1">
							<p>
								{" "}
								Github:
								<span className="github-link">{githubLink}</span>
							</p>
						</div>
					)}

					{url && (
						<div className="col-11 offset-1 mb-1">
							<p>
								URL: <span className="url">{url}</span>
							</p>
						</div>
					)}

					<div className="col-11 offset-1">
						<label>Tags: </label>
						<b className="tags">{tags}</b>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default Project;
