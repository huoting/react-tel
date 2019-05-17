import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import './index.scss'

import { Icon } from 'antd'

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '林'
    };
    this.clickFun = this.ClickFun.bind(this)
  }
  componentDidMount() { /*装载*/
  }
  componentDidUpdate() { /*更新*/
  }
  componentWillUnmount() { /*卸载*/
  }
  ClickFun() {
    this.setState(state => ({
      name: '夏'
    }))
  }
  render() {
    return (
      <div className="Index">
        <div className="index-contant">
          <div className="list-wrap">
            <div className="list">
              <Icon type="usergroup-add" />
              <div className="text-wrap">
                <p className="text">人数</p>
                <p className="num">42</p>
              </div>
            </div>
            <div className="list">
              <Icon type="heart" className="red" />
              <div className="text-wrap">
                <p className="text">收藏</p>
                <p className="num">10</p>
              </div>
            </div>
            <div className="list">
              <Icon type="schedule" className="blue" />
              <div className="text-wrap">
                <p className="text">日期</p>
                <p className="num">2019-05-13</p>
              </div>
            </div>
          </div>
        </div>        
      </div>
    );
  }
}
export default Index;
