import './App.css';
import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './Header/Header.js';
import Footer from './Footer/Footer.js';
import Rate from './Rate/Rate.js';
import About from './About/About.js';
class App extends React.Component {

  render() {
    return (
      <div className="site">
        <Header/>
        <div className="container">
          <main>
            <Router>
              <Switch>
                <Route exact path="/" component={Rate} />
                <Route exact path="/about" component={About} />
              </Switch>
            </Router>
          </main>
        </div>

        <div className="container" id="cookies_info">
          <div className="site-content">
            <div className="well"> 
            <p>lorem ipsum dolor sit amet, consecteturlore lorem temp lorem ipsum dolor sit amet lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
