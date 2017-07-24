import React from 'react';
import { Link } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'

const List = (props) => {
  return(
    <div>
      {props.cocktails.map( cocktail => {
        return <p><Link onClick={() => props.changeCocktail(cocktail)} to={`/cocktails/${cocktail.id}`}>{cocktail.name}</Link></p>
      })}
    </div>
  )
}

export default List
