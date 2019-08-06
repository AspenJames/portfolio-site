import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

import NavBar from './components/NavBar';
import Routes from './Routes';

function App() {
  return (
		<div className='App'>
			<Router>
				<div className='navBar'>
					<NavBar />
				</div>
				<div className='mainContent'>
					<Routes />
				</div>
			</Router>
		</div>
  );
}

export default App;
