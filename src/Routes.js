import React from 'react';
import { Route } from 'react-router-dom';

function Routes() {
	return (
		<>
			<Route exact path='/' render={() => <div>About</div>} />
			<Route exact path='/projects' render={() => <div>Projects</div>} />
			<Route exact path='/contact' render={() => <div>Contact</div>} />
		</>
	);
}

export default Routes;