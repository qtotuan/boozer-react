import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CocktailsContainer from './cocktailsContainer'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route path='/' component={CocktailsContainer} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
