import React, { Component } from 'react';
import './App.css';
import CocktailsContainer from './cocktailsContainer'
import NavBar from './navBar'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route path='/' component={NavBar} />
            <Route path='/' component={CocktailsContainer} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
