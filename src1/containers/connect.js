import React, { Component } from 'react';
import { storeFun } from '../store/actions'
import { connect} from 'react-redux'

class Connect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '测试状态提升1'
    };
    this.storeClick = this.storeClickFun.bind(this)
  }
  storeClickFun() {
    console.log(this.props)
    this.props.dispatch(storeFun('爱你哟哈哈哈哈'))
  }
  render() {
    console.log(this.props)
    // this.props.dispatch(storeFun('爱你哟'))
    return (
      <div className="connect">link{this.props.reducer2}
        <div onClick={this.storeClick}>点击改变store</div>
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
const FilterConnect = connect(
    mapStateToProps
)(Connect)
export default connect()(FilterConnect)
