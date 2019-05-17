import React, { Component } from 'react';
import './App.css';

class Tel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      count: 1,
      name: '',
      num: '',
      warning: true
    };
  }
  componentDidMount() { // 挂载
    this.setState({
      name: this.props.name
    })
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() { // 卸载

  }
  tick() {
    this.setState({
      count: this.state.count + 1
    });
  }
  buttonFun(num, e) {
    console.log(num)
    console.log(e)
    this.setState({
      num: num
    })
  }
  render() {
    // 第一次html条件判断开始
    const numShow = this.state.num
    let dom = null
    if (numShow === 1) {
      dom = <p>啦啦啦</p>
    } else {
      dom = <p>啦啦啦222</p>
    }
    // 第一次html条件判断结束
    return (
      <div>
        <div>我是一个组件{this.state.count}{this.state.name}</div>
        <p>{this.state.num}</p>
        {dom}
        {/* 第二种条件判断开始 */}
        {this.state.num === 1 &&
          <p>总是为1</p>
        }
        {/* 第二种条件判断结束 */}
        <button onClick={(e) => this.buttonFun(1, e)}>我是第一个事件</button>
        <button onClick={this.buttonFun.bind(this, 2)}>我是第二个事件</button>
        <p>{this.state.warning ? '我是不需要渲染出来的，但是我显示出来了' : '我没有被显示出来'}</p>
      </div>
    );
  }
}

export default Tel;
