import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom';
import { RemoveToken } from '../../../utils/auth'

import { Breadcrumb, Menu, Dropdown, message } from 'antd';

import './index.scss';

import Svg from '../Svg';

class Hamburger extends Component {
  signOut() {
    RemoveToken()
    message.success('成功退出!', 2)
    this.props.history.push('/login')
  }
  render() {
    const menu1 = (
      <Menu>
        <Menu.Item key="0">
          <div>个人信息</div>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="1" onClick={this.signOut.bind(this)}>
          <div>退出</div>
        </Menu.Item>
      </Menu>
    )
    const { state: {breadCrumbs} } = this.props
    let linkHome = ''
    let linkBreadcrumb = ''
    if (breadCrumbs.path !== "/") {
      linkHome = <Breadcrumb.Item><Link to="/" className="item-href">首页</Link></Breadcrumb.Item>
    } else {
      linkHome = ''
    }
    if (breadCrumbs.path) {
      linkBreadcrumb = <Breadcrumb.Item>{breadCrumbs.name}</Breadcrumb.Item>
    } else {
      linkBreadcrumb = ''
    }
    return (
      <div className="Hamburger">
        <Svg />
        <Breadcrumb className="breadcrumb" separator="/">
          {linkHome}
          {linkBreadcrumb}
        </Breadcrumb>
        <div className="user-open">
          <Dropdown overlay={menu1} trigger={['hover']} placement="bottomCenter">
            <div>
              <img src={require('../../../images/user_img.jpg')} className="img-wrap" alt="" />
            </div>
          </Dropdown>
        </div>
      </div>
    );
  }
}

export default connect(
  state => {
    return ({
      state: state
    })
  }
)(withRouter(Hamburger))
