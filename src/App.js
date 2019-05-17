import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, BrowserRouter } from 'react-router-dom'
// import { Route, BrowserRouter, HashRouter } from 'react-router-dom'

import Routers from './routes'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '测试状态提升'
    };
  }
  render() {
    return (
      <BrowserRouter>
        <Route path="/" component={Routers}></Route>
      </BrowserRouter>
    );
  }
}
export default connect(
  state => {
    return ({
      state: state
    })
  }
)(App)
