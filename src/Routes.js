import React from 'react';
import { Route } from 'react-router-dom';

import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function Routes() {
	return (
		<>
			<Route exact path='/' component={About} />
			<Route exact path='/projects' render={() => <div>Projects</div>} />
			<Route exact path='/contact' component={Contact} />
		</>
	);
}

export default Routes;