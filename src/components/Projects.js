import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';

function Projects() {
	const [projects, setProjects] = useState([{
		id: 1,
		title: "Test Project",
		description: "Not a real project, just a stand-in while I get the structure of the projects section set up.",
		source: "https://github.com/aspenjames/portfolio-site",
		img_src: "https://images.pexels.com/photos/249798/pexels-photo-249798.png?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
	}]);

	useEffect(() => {
		// we'll fetch our projects here, setProjects with return data
	});

	function renderProjectCards() {
		return projects.map(proj => <ProjectCard key={proj.id} project={proj} />);
	}

	return (
		<div className='container'>
			<h1 className='mainHeading' id='proj'>Project Showcase</h1>

			<div id='projectContainer'>

				{renderProjectCards()}
				{renderProjectCards()}
				{renderProjectCards()}
				{renderProjectCards()}
			</div>
		</div>
	);
}

export default Projects;
