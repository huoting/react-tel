import React, { Component } from 'react';

class ClientList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  clickChange() {
    this.props.onChange('啦啦啦啦')
  }
  render() {
    console.log(this)
    return (
      <div className="ClientList">ClientList
      <p onClick={this.clickChange.bind(this)}>{this.props.data}</p>
      </div>
    );
  }
}
export default ClientList;
