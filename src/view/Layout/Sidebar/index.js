import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import './index.scss';

import { Menu, Icon } from 'antd';

import { CollapsedGetToken} from '../../../utils/auth'

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultActive: [''],
      openKey: []
    };
    this.onOpenChange = this.onOpenChange.bind(this)
  }

  componentDidMount() { /*装载*/
    const { location: { pathname }, state: { reducerRouters } } = this.props
    this.onSelectFun(pathname)
    this.OpenKey(reducerRouters, pathname)
  }

  componentDidUpdate() { /*更新*/
    const { location: { pathname }} = this.props
    if (pathname !== this.state.defaultActive[0]) this.onSelectFun(pathname)
  }

  componentWillUnmount() { /*卸载*/
  }

  onSelectFun(index) { /*设置初始选中导航*/
    const arr = []
    arr.push(index)
    this.setState({
      defaultActive: arr
    })
  }

  OpenKey(routes, pathname) { /*设置打开的父级*/
    const openKey = routes.map(route => {
      if (route.children && route.children.length > 0) {
        const OpenKeyChild = this.OpenKeyChild(route.children, pathname, route.path).find(v => v)
        if (OpenKeyChild) return OpenKeyChild
      }
      if (route.path === pathname) return route.path
      return ''
    })
    const arrOpenkey = []
    arrOpenkey.push(openKey.find(v => v))
    this.setState({
      openKey: arrOpenkey
    })
  }
  OpenKeyChild = (routes, pathname, parentPath) => routes.map(route => {
    if (route.path === pathname) return parentPath
    return ''
  })

  onOpenChange(e) { /*触发导航的父级点击*/
    if (e.length > 1) {
      this.setState({
        openKey: e.slice(1, 2)
      })
    } else {
      this.setState({
        openKey: e
      })
    }
  }

  render() {
    const routeFun = (routers) => {
      return routers.map((route)  => {
        if (route.children && route.children.length > 0) return <Menu.SubMenu key={route.path} title={<span><Icon type="desktop"></Icon>{route.name}</span>}>
            { routeFun(route.children)}
          </Menu.SubMenu>
        return <Menu.Item key={route.path}>
                <Link className="link-href" to={route.path}><Icon type="desktop"></Icon>{route.name}</Link>
              </Menu.Item>
      })
    }
    const { state: { reducerRouters }} = this.props
    const state = this.state

    let CollapsedGet = CollapsedGetToken()
    if (CollapsedGet === 'true') {
      CollapsedGet = true
    } else {
      CollapsedGet = false
    }

    return (
      <div className={`Sidebar ${CollapsedGet?'sidebar-hidden': ''}`}>
        <div className="user-wrap"></div>
        <div className="scrollbar-content">
          <Menu mode="inline"
                onOpenChange={this.onOpenChange}
                openKeys={state.openKey}
                selectedKeys={state.defaultActive}
                theme="dark"
                inlineCollapsed={CollapsedGet}
                className="el-menu-vertical-demo">
            {
              reducerRouters.map((route) => {
                if (route.children && route.children.length > 0) {
                  return <Menu.SubMenu key={route.path} title={<span><Icon type="desktop"></Icon>{route.name}</span>}>
                            {routeFun(route.children)}
                        </Menu.SubMenu>
                }
                return <Menu.Item key={route.path}>
                        <Link className="link-href" to={route.path}><Icon type="desktop"></Icon>{route.name}</Link>
                      </Menu.Item>
              })
            }
          </Menu>
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
)(withRouter(Sidebar))
