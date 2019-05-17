import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ClientList from './components/ClientList'

class Client extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 1
    };
  }
  setData(res) {
    this.setState({
      data: res
    })
  }
  render() {
    return (
      <div className="List">Client
        <Link to="/about">关于</Link>
        <Link to="/">首页</Link>
        <Link to={{pathname: '/login', query: {id: 1}}}>登陆</Link>
        <div className="list-text">
          {this.state.data}
          <ClientList data={this.state.data} onChange={this.setData.bind(this)}></ClientList>
        </div>
      </div>
    );
  }
}
export default Client;
