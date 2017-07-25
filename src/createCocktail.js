import React, { Component } from 'react'
import { Button, Form, Grid, Dropdown, Icon } from 'semantic-ui-react'
import SelectedIngredientsList from './selectedIngredientsList'

class CreateCocktail extends Component {
  constructor(){
    super()

    this.state = {
      name: '',
      description: '',
      instructions: '',
      ingredients: [],
      proportions: []

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

  handleChangeInstructions = (event) => (
    this.setState({ instructions: event.target.value})
  )

  handleProportion = (event) => {

    let amount = document.getElementById('amount').value
    let ingredient_name = document.getElementById('ingredient').innerText

    console.log("This is the captured amount", amount);
    console.log("This is the captured ingredient", ingredient_name);


    this.setState({
      proportions: [ ...this.state.proportions, {
        amount,
        ingredient_name
      }]
    })

    console.log("This is the new state", this.state.proportions)

    document.getElementById('amount').value = ""
  }


  handleSubmit = (event) => {

    event.preventDefault()
    let cocktail = {
        name: this.state.name,
        description: this.state.description,
        instructions: this.state.instructions,
        proportion_attributes: this.state.proportions
    }

    fetch('http://localhost:3000/api/v1/cocktails', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({cocktail})
    })
    .then(response => response.json())
    .then(jsonObj => console.log(jsonObj))
  }

  render(){
    const ingredientsOptions = this.state.ingredients.map(ing => ({ value: ing.name, text: ing.name, id: ing.id }) )
    return(
      <div>
        <h2>Create New Cocktail</h2>
        <Grid centered columns={2}>
          <Grid.Column>
            <Form>
              <Form.Field>
                <label>Name</label>
                <input type='text' onChange={this.handleChangeName}/>
              </Form.Field>
              <Form.TextArea label='Description' onChange={this.handleChangeDescription} placeholder='Describe your cocktail.' />
              <Form.TextArea label='Instructions' onChange={this.handleChangeInstructions} placeholder='Tell us how you make your cocktail.' />

              <SelectedIngredientsList proportions={this.state.proportions} />

              <Form.Field>
                <label>Ingredients</label>
                <input id="amount" type='text' placeholder="Amount" onChange={this.handleChangeAmount} />
              </Form.Field>
              <Dropdown id="ingredient" placeholder='Select Ingredients' onChange={this.handleChangeIngredient} fluid search selection options={ingredientsOptions} />
              <br/>
              <Button icon onClick={this.handleProportion}>
                <Icon name='plus' />
              </Button>

              <br/><br/><br/>
              <Button primary size='big' type='submit' onClick={this.handleSubmit}>Create</Button>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default CreateCocktail
