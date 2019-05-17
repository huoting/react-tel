import React, { Component } from 'react';
import './App.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      textareat: 'textareat',
      selectInput: '二',
      input1: '',
      input2: ''
    };

    this.handlSubmit = this.handlSubmit.bind(this);
    this.handlChange = this.handlChange.bind(this);
    this.handlTextarea = this.handlTextarea.bind(this);
    this.handlSelect = this.handlSelect.bind(this);
  }
  componentDidMount() { // 挂载
  }
  componentWillUnmount() { // 卸载
  }
  handlSubmit(event) {
    console.log(this.state)
    console.log(`submit---inptu: ${this.state.inputValue},textarea: ${this.state.textareat},textarea: ${this.state.selectInput}`)
    event.preventDefault();
  }
  handlChange(event) {
    console.log(event.target)
    const target = event.target
    const name = target.name
    const value = target.value
    this.setState({
      [name]: value
    });
  }
  handlTextarea(event) {
    console.log(event.target)
    this.setState({
      textareat: event.target.value
    });
  }
  handlSelect(event) {
    console.log(event.target)
    this.setState({
      selectInput: event.target.value
    });
  }
  render() {
    return (
      <div>
        <div>表单</div>
        <div>
          <form onSubmit={this.handlSubmit}>
            name:
            <input type="text" name="input1" value={this.state.input1} onChange={this.handlChange} />
            <input type="text" name="input2" value={this.state.input2} onChange={this.handlChange} />
            <textarea value={this.state.textareat} onChange={this.handlTextarea} />
            <select value={this.state.selectInput} onChange={this.handlSelect}>
              <option value="一">一</option>
              <option value="二">二</option>
            </select>
            <input type="submit" value="submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
