import {Component} from 'react'
import './index.css'

class Body extends Component {
  render() {
    return (
      <div className="bodyMainContainer">
        <div className="leftNAvBarMenu">
          <p>Left Navbar Menu</p>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
          </ul>
        </div>
        <div className="content">
          <h1>Content</h1>
          <p>Content description</p>
        </div>
        <div className="rightNAvBarMenu">
          <p>Right Navbar Menu</p>
          <ul>
            <li className="addItemContainer">Item 1</li>
            <li className="addItemContainer">Item 2</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Body
