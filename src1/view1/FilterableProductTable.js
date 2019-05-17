import React, { Component } from 'react';
import '../App.css';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class Filterable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      checkData: false
    };
    this.onChangetext = this.onChangetext.bind(this)
    this.onCheckBox = this.onCheckBox.bind(this)
  }
  componentDidMount() { // 挂载
    this.setState({
    });
  }
  componentWillUnmount() { // 卸载
  }
  onChangetext(inputText) {
    this.setState({
      searchText: inputText
    })
  }
  onCheckBox(checkData) {
    this.setState({
      checkData: checkData
    })
  }
  render() {
    return (
      <div>
        内容
        <SearchBar inputText={this.state.searchText} onTelchangetext={this.onChangetext} onTelCheckBox={this.onCheckBox} />
        <ProductTable />
      </div>
    );
  }
}

export default Filterable;
