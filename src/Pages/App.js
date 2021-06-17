import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ReactDOM from 'react-dom';

// importing pages
// import About from './About/About';
// import Blog from './About/About';
// import Contact from './Contact/Contact';
import Home from './Home/Home';
// import Portfolio from './Portfolio/Portfolio';

// importing font-awesome icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);

const App = () => {
  return (
    <Router>
      <div className='app'>
        {/* <Navigation /> */}
        <Switch>
          <Route path='/'>
            <section className='container'>
              <Home />
            </section>
          </Route>
          {/* <Route path='/about'>
            <About />
          </Route>
          <Route path='/portfolio'>
            <Portfolio />
          </Route>
          <Route path='/blog'>
            <Blog />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
