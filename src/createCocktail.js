import React, { Component } from 'react'
import { Button, Form, Grid } from 'semantic-ui-react'

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
        <h2>Create New Cocktail</h2>
        <Grid centered columns={2}>
          <Grid.Column>
            <Form onSubmit={this.handleSubmit}>
              <Form.Field>
                <label>Name</label>
                <input type='text' onChange={this.handleChangeName}/>
              </Form.Field>
              <Form.TextArea label='Description' onChange={this.handleChangeDescription} placeholder='Describe your cocktail.' />
              <Form.TextArea label='Instructions' onChange={this.handleChangeInstructions} placeholder='Tell us how you make your cocktail.' />
              <Button type='submit'>Create</Button>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default CreateCocktail
