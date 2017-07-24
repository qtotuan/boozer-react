import React, { Component } from 'react';
import ShowCocktail from './showCocktail'
import List from './list'
import CreateCocktail from './createCocktail'
import { Route } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'

class CocktailsContainer extends Component {

  constructor() {
    super()

    this.state = {
      cocktails: [],
      currentCocktail: {}
    }
  }

  componentDidMount() {
    let that = this
    fetch('http://localhost:3000/api/v1/cocktails.json')
      .then(res => res.json())
      .then(data =>{
        console.log("fetching", this)
        this.setState({
          cocktails: data
        })})
  }

  changeCocktail(cocktail) {
    // debugger
    this.setState({
      currentCocktail: cocktail
    })
  }

  render() {
    console.log("rendering", this.state.cocktails)
    return(
      <div>
        <Route path='/cocktails/new' component={CreateCocktail} />
        <Route path='/cocktails/:id' render={ () => (
          <ShowCocktail cocktail={this.state.currentCocktail} />
            )} />
        <Route exact path='/cocktails' render={ () => (
          <List cocktails={this.state.cocktails} changeCocktail={this.changeCocktail.bind(this)} />
            )} />
      </div>
    )
  }

}

export default CocktailsContainer
