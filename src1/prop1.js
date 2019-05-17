import React, { Component } from 'react';
import './App.css';
// import { storeFun } from './store/actions'
import { connect} from 'react-redux'

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
  }
  componentDidMount() { // 挂载
    this.setState({
      inputValue: this.props.inputText1
    })
  }
  componentWillUnmount() { // 卸载
  }
  render() {
    const inputValue = this.props.inputText1
    // this.props.dispatch(storeFun('爱你哟222'))
    return (
      <div>
        Topics222
        <div>状态提升一{inputValue}</div>
        <div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, action) => {
    return {
        reducer: state.reducer,
        reducer2:  state.reducer2
    }
}
const FilterForm = connect(
    mapStateToProps
)(Form)
export default connect()(FilterForm)
// export default Form;
