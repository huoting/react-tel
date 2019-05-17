import React, { Component } from 'react'
import { connect } from 'react-redux'
import './index.scss'

import { CollapsedGetToken, CollapsedSetToken} from '../../../utils/auth'
import { dispatchCollapsed } from '../../../store/dispatch'

class Svg extends Component {
  constructor(porps) {
    super(porps)
    this.state = {
      collapsed: false
    }
  }
  componentDidMount() { /*装载*/
    if (CollapsedGetToken()) {
      let br
      if (CollapsedGetToken() === 'true') {
        br = true
      } else {
        br = false
      }
      this.setState({
        collapsed: br
      })
    }
  }
  componentDidUpdate() { /*更新*/
    dispatchCollapsed(!this.state.collapsed)
  }
  componentWillUnmount() { /*卸载*/
  }
  collapsed() {
    this.setState({
      collapsed: !this.state.collapsed
    })
    dispatchCollapsed(!this.state.collapsed)
    CollapsedSetToken(!this.state.collapsed)
  }
  render() {
    return (
      <svg onClick={this.collapsed.bind(this)} className={`svg-icon ${this.state.collapsed ? 'svg-icon-transform': '' }`} viewBox="0 0 1024 1024" width="64" height="64">
        <path d="M966.8023 568.849776 57.196677 568.849776c-31.397081 0-56.850799-25.452695-56.850799-56.850799l0 0c0-31.397081 25.452695-56.849776 56.850799-56.849776l909.605623 0c31.397081 0 56.849776 25.452695 56.849776 56.849776l0 0C1023.653099 543.397081 998.200404 568.849776 966.8023 568.849776z"
            p-id="1692"></path>
        <path d="M966.8023 881.527125 57.196677 881.527125c-31.397081 0-56.850799-25.452695-56.850799-56.849776l0 0c0-31.397081 25.452695-56.849776 56.850799-56.849776l909.605623 0c31.397081 0 56.849776 25.452695 56.849776 56.849776l0 0C1023.653099 856.07443 998.200404 881.527125 966.8023 881.527125z"
            p-id="1693"></path>
        <path d="M966.8023 256.17345 57.196677 256.17345c-31.397081 0-56.850799-25.452695-56.850799-56.849776l0 0c0-31.397081 25.452695-56.850799 56.850799-56.850799l909.605623 0c31.397081 0 56.849776 25.452695 56.849776 56.850799l0 0C1023.653099 230.720755 998.200404 256.17345 966.8023 256.17345z"
              p-id="1694"></path>
      </svg>
    );
  }
}

export default connect(
  state => {
    return ({
      state: state
    })
  }
)(Svg)