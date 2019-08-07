import React from 'react';
import { NavLink } from 'react-router-dom';
import { profilePhoto } from '../photoSrc';

function NavBar() {
	return (
		<div id='navContainer'>
			<img id='profilephoto' src={profilePhoto} alt='profile' />
			<NavLink to='/' exact
				activeClassName='active'
				className='navLink'>About</NavLink>
			<NavLink to='/projects'
				activeClassName='active'
				className='navLink'>Projects</NavLink>
			<NavLink to='/contact'
				activeClassName='active'
				className='navLink'>Contact</NavLink>
		</div>
	);
}

export default NavBar;