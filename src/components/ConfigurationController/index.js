import {Component} from 'react'
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

class ConfigurationController extends Component {
  render() {
    return (
      <ConfigurationContext>
        {value => {
          const {
            onToggleShowContent,
            onToggleShowLeftNavbar,
            onToggleShowRightNavbar,
          } = value

          const contentChange = event => {
            onToggleShowContent(event.target.value)
          }
          const leftChange = event => {
            onToggleShowLeftNavbar(event.target.checked)
          }

          const rightChange = event => {
            onToggleShowRightNavbar(event.target.checked)
          }

          return (
            <div className="configMainContainer">
              <h1 className="configMainHeading">Layout</h1>
              <div className="inputContainer">
                <input onChange={contentChange} id="Content" type="checkbox" />
                <label htmlFor="Content">Content</label>
              </div>
              <div className="inputContainer">
                <input onChange={leftChange} id="LeftNavBar" type="checkbox" />
                <label htmlFor="LeftNavBar">Left Navbar</label>
              </div>
              <div className="inputContainer">
                <input
                  onChange={rightChange}
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
