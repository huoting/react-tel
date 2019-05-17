import React, { Component } from 'react';
import './App.css';

class Tel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrList: [1, 2, 3, 4, 5]
    };
  }
  componentDidMount() { // 挂载
  }
  componentWillUnmount() { // 卸载
  }
  render() {
    const domHtml = this.state.arrList.map((num) =>
      <p key={num.toString()}>{num}</p>
    );
    return (
      <div>
        <p>列表</p>
        <div>{domHtml}</div>
        <div>
          {
            this.state.arrList.map((num) =>
              <p key={num.toString()}>{num}</p>
            )
          }
        </div>
      </div>
    );
  }
}

export default Tel;
