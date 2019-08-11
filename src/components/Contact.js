import React from 'react';

import { profilePhoto } from '../photoSrc';

function Contact() {
	return (
		<div className='container'>
			<img id='profilephotoContent' src={profilePhoto} alt='profile' />
			<h1 className='mainHeading'>Hello!</h1>
			<div id='contact'>
				<p>Type: <a href='mailto:aspenjames@tqca.org'>aspenjames@tqca.org</a></p>
				<p>Call: <a href='tel:2062902148'>(206)290-2148</a></p>
				<p>Read: <a href='https://dev.to/aspenjames' target='_blank' rel='noopener noreferrer'>Dev.to/aspenjames</a></p>
			</div>
		</div>
	);
}

export default Contact;
