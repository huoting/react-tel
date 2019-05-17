import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import Routers from './routes'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '测试状态提升'
    };
  }
  render() {
    // console.log(this)
    return (
      <div className="App">
        <Route path="/" component={Routers}></Route>
      </div>
    );
  }
}
export default App;
