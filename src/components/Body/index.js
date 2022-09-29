import {Component} from 'react'

import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

class Body extends Component {
  leftNavbarMenu = () => (
    <div className="leftNAvBarMenu">
      <h1>Left Navbar Menu</h1>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
      </ul>
    </div>
  )

  content = () => (
    <div className="content">
      <h1>Content</h1>
      <p>Lorem ipsum</p>
    </div>
  )

  rightNavbar = () => (
    <div className="rightNAvBarMenu">
      <h1>Right Navbar Menu</h1>
      <ul>
        <li className="addItemContainer">Ad 1</li>
        <li className="addItemContainer">Ad 2</li>
      </ul>
    </div>
  )

  render() {
    return (
      <ConfigurationContext.Consumer>
        {value => {
          const {showContent, showLeftNavbar, showRightNavbar} = value
          const leftView = showLeftNavbar ? this.leftNavbarMenu() : null
          const rightView = showRightNavbar ? this.rightNavbar() : null
          const contentView = showContent ? this.content() : null
          return (
            <div className="bodyMainContainer">
              {leftView}
              {contentView}
              {rightView}
            </div>
          )
        }}
      </ConfigurationContext.Consumer>
    )
  }
}

export default Body
