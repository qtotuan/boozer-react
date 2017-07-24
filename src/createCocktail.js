import React, { Component } from 'react'

class CreateCocktail extends Component {
  constructor(){
    super()

    this.state = {
      name: '',
      description: '',
      instructions: ''
    }
  }

  handleChangeName = (event) => (
    this.setState({ name: event.target.value})
  )

  handleChangeDescription = (event) => (
    this.setState({ description: event.target.value})
  )

  handleChangeNameInstructions = (event) => (
    this.setState({ instructions: event.target.value})
  )

  handleSubmit = (event) => (
    event.preventDefault(),
    fetch('http://localhost:3000/api/v1/cocktails', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: this.state.name,
        description: this.state.description,
        instructions: this.state.instructions
      })
    })
    .then(response => response.json())
    .then(jsonObj => console.log(jsonObj))
  )

  render(){
    return(
      <div>
        <h2>Create a New Cocktail</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input type='text' onChange={this.handleChangeName}/><br></br>
          <label>Description</label>
          <input type='text' onChange={this.handleChangeDescription}/><br></br>
          <label>Instructions</label>
          <input type='text' onChange={this.handleChangeInstructions}/><br></br>
          <input type='submit' value='Create' />
        </form>
      </div>
    )
  }
}

export default CreateCocktail
