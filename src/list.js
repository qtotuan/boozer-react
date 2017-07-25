import React from 'react';
import { Link } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'

const List = (props) => {
  return(
    <div>
      <Grid.Row>
        <Grid.Column floated='left' width={6}>
        <br/>
          <h2>List of Cocktails</h2>
          {props.cocktails.map( cocktail => {
            return <p><Link onClick={() => props.changeCocktail(cocktail)} to={`/cocktails/${cocktail.id}`}>{cocktail.name}</Link></p>
          })}
        </Grid.Column>
      </Grid.Row>
    </div>
  )
}

export default List
