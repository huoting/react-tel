import React, { Component } from 'react';
import '../App.css';
import ProductRow from './ProductRow';

class ProductCategory  extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount() { // 挂载
    this.setState({
    });
  }
  componentWillUnmount() { // 卸载
  }
  render() {
    return (
      <div>
        ProductCategory
        <ProductRow />
      </div>
    );
  }
}

export default ProductCategory;
