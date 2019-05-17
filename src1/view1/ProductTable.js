import React, { Component } from 'react';
import '../App.css';
import ProductCategory from './ProductCategoryRow';

class ProductTable extends Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.state = {
    };
    this.headlerChange = this.headlerChange.bind(this)
  }
  componentDidMount() { // 挂载
    console.log(this.textInput)
    this.setState({
    });
  }
  componentWillUnmount() { // 卸载
  }
  headlerChange() {
    this.textInput.current.focus();
  }
  render() {
    return (
      <div>
        ProductTable
        <p>
          <input type="text" ref={this.textInput} />
        </p>
        <p>
          <input type="text" onClick={this.headlerChange} />
        </p>
        <ProductCategory />
      </div>
    );
  }
}

export default ProductTable;
