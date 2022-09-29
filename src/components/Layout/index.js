import {Component} from 'react'
import './index.css'

import Header from '../Header'
import Footer from '../Footer'
import Body from '../Body'

class Layout extends Component {
  render() {
    return (
      <div className="layoutMainContainer">
        <Header />
        <Body />
        <Footer />
      </div>
    )
  }
}

export default Layout
