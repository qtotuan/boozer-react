import React from 'react'

const SelectedIngredientsList = (props) => {
  return (
      <ul>
        {props.proportions.map( proportion => (
          <li>{proportion.amount} of {proportion.ingredient_name}</li>
        ))}
      </ul>
  )
}

export default SelectedIngredientsList
