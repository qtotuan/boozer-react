import React, {Component} from 'react'
import { Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

class NavBar extends Component {
  render () {
    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item><NavLink to='/cocktails'>See all Cocktails</NavLink></Menu.Item>
          <Menu.Item><NavLink to='/cocktails/new'>Create new Cocktail</NavLink></Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item name='logout' />
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}

export default NavBar
