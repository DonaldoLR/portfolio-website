import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navigation from '../Components/Navigation';
// importing pages
//import About from './About/About';
//import Blog from './Blog/Blog';
import Contact from './Contact/Contact';
import Home from './Home/Home';
import Portfolio from './Portfolio/Portfolio';
import Affiliates from './Affiliates/Affiliates';

// importing font-awesome icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
	faBars,
	faExternalLinkAlt,
	faArrowUp,
	faArrowRight,
} from '@fortawesome/free-solid-svg-icons';

library.add(fab, faBars, faExternalLinkAlt, faArrowUp, faArrowRight);

const App = () => {
	return (
		<Router>
			<div className='app'>
				<Navigation />
				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
					<Route exact path='/Portfolio'>
						<Portfolio />
					</Route>
					{/* <Route exact path='/About'>
            <About />
          </Route>
          <Route exact path='/Blog'>
            <Blog />
          </Route> */}
					<Route exact path='/Contact'>
						<Contact />
					</Route>
					<Route exact path='/Affiliates'>
						<Affiliates />
					</Route>
				</Switch>
			</div>
		</Router>
	);
};

export default App;
