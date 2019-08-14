import React from 'react';

function ProjectCard(props) {
	const { title, description, source, img_src } = props.project;

	return (
		<div className='projectCard'>
			<h3 className='projectTitle'>{title}</h3>
			<p className='projectDesc'>{description}</p>
			<a href={source} className='projectLink'>View on GitHub</a>
			<img className='projectImg' src={img_src} alt={title} />
		</div>
	);
}

export default ProjectCard;