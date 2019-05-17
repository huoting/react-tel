import React, { Component } from 'react';
import { connect } from 'react-redux'

import { CollapsedGetToken} from '../../utils/auth'

import Sidebar from './Sidebar'
import Hamburger from './Hamburger'

class Layout extends Component {
  render() {
    let CollapsedGet = CollapsedGetToken()
    if (CollapsedGet === 'true') {
      CollapsedGet = true
    } else {
      CollapsedGet = false
    }
    const {children} = this.props
    return (
      <div className="Layout">
        <Sidebar />
        <div id="container" className={`${CollapsedGet?'container-hidden':''}`}>
          <Hamburger />
          {children}
        </div>
      </div>
    );
  }
}

export default connect(
  state => {
    return ({
      state: state
    })
  }
)(Layout)
