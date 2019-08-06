import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
	return (
		<div id='navContainer'>
			<NavLink to='/'
				activeClassName='active'
				className='navLink' exact>Home</NavLink>
			<NavLink to='/projects'
				activeClassName='active'
				className='navLink'>Projects</NavLink>
			<NavLink to='/about'
				activeClassName='active'
				className='navLink'>About</NavLink>
			<NavLink to='/contact'
				activeClassName='active'
				className='navLink'>Contact</NavLink>
		</div>
	);
}

export default NavBar;