import React from 'react';
import { Route } from 'react-router-dom';

import About from './components/About';

function Routes() {
	return (
		<>
			<Route exact path='/' component={About} />
			<Route exact path='/projects' render={() => <div>Projects</div>} />
			<Route exact path='/contact' render={() => <div>Contact</div>} />
		</>
	);
}

export default Routes;