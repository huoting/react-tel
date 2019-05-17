import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Tel from './tel';
// import List from './list';
// import Form from './form';
import Prop2 from './prop2';
import Prop1 from './prop1';
import FilterableTable from './view1/FilterableProductTable';
// import { connect } from 'react-redux'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '测试状态提升'
    };
    this.inputChange = this.inputChange.bind(this);
  }
  inputChange(inputText) {
    console.log(inputText)
    this.setState({
      text: inputText
    })
    console.log(this.state)
  }
  render() {
    console.log(this)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          {/* <Tel name='第一次弄' /> */}
          {/* <List /> */}
          {/* <Form /> */}
          <Prop2 inputText={this.state.text} onTelChange={this.inputChange} />
          <Prop1 inputText1={this.state.text} />
          <FilterableTable />
        </header>
      </div>
    );
  }
}
// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter
//   }
// }
// export default connect(mapStateToProps)(prop1)

export default App;
