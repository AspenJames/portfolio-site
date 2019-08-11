import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { profilePhoto } from '../photoSrc';

function NavBar() {
	const [iconClass, setIconClass] = useState('fa fa-bars');

	const navRef = React.createRef();

	const handleClick = e => {
		if (!navRef.current.classList.contains('responsive')) {
			navRef.current.classList.add('responsive');
			setIconClass('fa fa-times');
		} else {
			navRef.current.classList.remove('responsive');
			setIconClass('fa fa-bars');
		}
	}

	const handleNav = _ => {
		if (navRef.current.classList.contains('responsive')) {
			navRef.current.classList.remove('responsive');
			setIconClass('fa fa-bars');
		}
	}

	return (
		<div id='navContainer' ref={navRef}>
			<img id='profilephotoNav' src={profilePhoto} alt='profile' />
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
			<i className={iconClass} onClick={handleClick} />
		</div>
	);
}

export default NavBar;
