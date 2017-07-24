import React from 'react';
import { Grid } from 'semantic-ui-react'

const ShowCocktail = (props) => {
  // debugger
    if (props.cocktail.name){
      return(
        <div>
          <h1>{props.cocktail.name}</h1>
          <p>{props.cocktail.description}</p>
          <p>{props.cocktail.instructions}</p>
          <ul>
            {props.cocktail.proportions.map( ingredient => {
              return(
                <li>{ingredient.amount} of {ingredient.ingredient_name}</li>
              )
            })}
          </ul>
        </div>
      )
    } else {
      return null
    }
}

export default ShowCocktail
