import {Component} from 'react'
import './index.css'

class ConfigurationController extends Component {
  render() {
    return (
      <div className="configMainContainer">
        <h1 className="configMainHeading">Layout</h1>
        <div className="inputContainer">
          <input id="Content" type="checkbox" />
          <label htmlFor="Content">Content</label>
        </div>
        <div className="inputContainer">
          <input id="LeftNavBar" type="checkbox" />
          <label htmlFor="LeftNavBar">Left Navbar</label>
        </div>
        <div className="inputContainer">
          <input id="rightNavbar" type="checkbox" />
          <label htmlFor="rightNavbar">Right Navbar</label>
        </div>
      </div>
    )
  }
}

export default ConfigurationController
