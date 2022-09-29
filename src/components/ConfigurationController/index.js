import {Component} from 'react'
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

class ConfigurationController extends Component {
  state = {content: true, left: true, right: true}

  contentChange = event => {
    this.setState({content: event.target.checked})
  }

  leftChange = event => {
    this.setState({left: event.target.checked})
  }

  rightChange = event => {
    this.setState({right: event.target.checked})
  }

  render() {
    return (
      <ConfigurationContext>
        {value => {
          const {showContent, showLeftNavbar, showRightNavbar} = value
          return (
            <div className="configMainContainer">
              <h1 className="configMainHeading">Layout</h1>
              <div className="inputContainer">
                <input
                  onChange={this.contentChange}
                  id="Content"
                  type="checkbox"
                />
                <label htmlFor="Content">Content</label>
              </div>
              <div className="inputContainer">
                <input
                  onChange={this.leftChange}
                  id="LeftNavBar"
                  type="checkbox"
                />
                <label htmlFor="LeftNavBar">Left Navbar</label>
              </div>
              <div className="inputContainer">
                <input
                  onChange={this.rightChange}
                  id="rightNavbar"
                  type="checkbox"
                />
                <label htmlFor="rightNavbar">Right Navbar</label>
              </div>
            </div>
          )
        }}
      </ConfigurationContext>
    )
  }
}

export default ConfigurationController
