import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom'

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.handlInput = this.handlInput.bind(this);
  }
  componentDidMount() { // 挂载
    this.setState({
    });
  }
  componentWillUnmount() { // 卸载
  }
  handlInput(event) {
    // console.log(event.target)
    this.props.onTelChange(event.target.value)
  }
  render() {
    const inputText = this.props.inputText
    return (
      <div>
        <Link to="/Prop1/1">链接</Link>
        <div>状态提升二</div>
        <div>
          <input type="text" value={inputText} onChange={this.handlInput} />
        </div>
      </div>
    );
  }
}

export default Form;
