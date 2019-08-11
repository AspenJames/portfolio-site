import React from 'react';
import { NavLink } from 'react-router-dom';
import { profilePhoto } from '../photoSrc';

function NavBar() {
	const navRef = React.createRef();

	const handleClick = e => {
		if (!navRef.current.classList.contains('responsive')) {
			navRef.current.classList.add('responsive');
		} else {
			navRef.current.classList.remove('responsive');
		}
	}

	const handleNav = _ => {
		if (navRef.current.classList.contains('responsive')) {
			navRef.current.classList.remove('responsive');
		}
	}

	return (
		<div id='navContainer' ref={navRef}>
			<img id='profilephoto' src={profilePhoto} alt='profile' />
			<NavLink to='/' exact
				onClick={handleNav}
				activeClassName='active'
				className='navLink'>About</NavLink>
			<NavLink to='/projects'
				onClick={handleNav}
				activeClassName='active'
				className='navLink'>Projects</NavLink>
			<NavLink to='/contact'
				onClick={handleNav}
				activeClassName='active'
				className='navLink'>Contact</NavLink>
			<i className='fa fa-bars' onClick={handleClick} />
		</div>
	);
}

export default NavBar;
