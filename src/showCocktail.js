import React from 'react';
import { Grid, Card } from 'semantic-ui-react'

const ShowCocktail = (props) => {
  // debugger
    if (props.cocktail.name){
      const cocktailIngredients = props.cocktail.proportions.map( ingredient =>
        ( <li>{ingredient.amount} of {ingredient.ingredient_name}</li> )
      )
      return(
        <div>
          <Grid.Row>
            <Grid.Column floated='right' width={10}>
              <br/>
              <Card>
                <Card.Content header={props.cocktail.name} />
                <Card.Content description={props.cocktail.description} />
                <Card.Content description={props.cocktail.instructions} />
                <Card.Content description={cocktailIngredients} />
              </Card>
            </Grid.Column>
          </Grid.Row>
        </div>
      )
    } else {
      return null
    }
}

export default ShowCocktail
