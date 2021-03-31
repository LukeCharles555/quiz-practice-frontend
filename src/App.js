import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";

import WelcomePage from './views/WelcomePage';
import CreateQuiz from './components/CreateQuiz';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">Test Quiz App</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Todos</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Todo</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
        <Route path="/" exact component={WelcomePage} />
        <Route path="/create" component={CreateQuiz} />
        </div>
      </Router>
    );
  }
}

export default App;
