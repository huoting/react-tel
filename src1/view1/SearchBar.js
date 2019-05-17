import React, { Component } from 'react';
import '../App.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.handlText = this.handlText.bind(this)
    this.handlCheckBox = this.handlCheckBox.bind(this)
  }
  componentDidMount() { // 挂载
    this.setState({
    });
  }
  componentWillUnmount() { // 卸载
  }
  handlText(event) {
    this.props.onTelchangetext(event.target.value)
  }
  handlCheckBox(event) {
    this.props.onTelCheckBox(event.target.checked)
  }
  render() {
    const inputText = this.props.inputText
    return (
      <div>
        <p>
          <input type="text" value={inputText} onChange={this.handlText} />
        </p>
        <p>
          <input type="checkbox" value="1" name="checkName" onChange={this.handlCheckBox} />
          Only show products in stock
        </p>
      </div>
    );
  }
}

export default SearchBar;
