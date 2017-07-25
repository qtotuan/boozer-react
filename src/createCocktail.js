import React, { Component } from 'react'
import { Button, Form, Grid, Dropdown, Icon } from 'semantic-ui-react'

class CreateCocktail extends Component {
  constructor(){
    super()

    this.state = {
      name: '',
      description: '',
      instructions: '',
      ingredients: [],
      proportions: {amount: '', ingredient_name: ''}

    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/api/v1/ingredients.json')
    .then(response => response.json())
    .then(ingredients => this.setState({ ingredients }) )
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
        instructions: this.state.instructions,
        proportions: [ this.state.proportions ]
      })
    })
    .then(response => response.json())
    .then(jsonObj => console.log(jsonObj))
  )

  render(){
    const ingredientsOptions = this.state.ingredients.map(ing => ({ value: ing.name, text: ing.name, id: ing.id }) )
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
              <Form.Field>
                <label>Ingredients</label>
                <input type='text' placeholder="Amount" onChange={this.handleChangeAmount} />
              </Form.Field>
              <Dropdown placeholder='Select Ingredients' onChange={this.handleChangeIngredient} fluid search selection options={ingredientsOptions} />
              <Button icon onClick={this.handleProportion}>
                <Icon name='plus' />
              </Button>
              <br/><br/>
              <Button primary size='big' type='submit'>Create</Button>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default CreateCocktail
