import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import { allRoutes, asyncRouterMap } from './config'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Nprogress from 'nprogress'
import { GetToken } from '../utils/auth'
import 'nprogress/nprogress.css' // Progress 进度条样式
import { dispatchUserFun, dispatchRouteFun, dispatchBreadCrumbs } from '../store/dispatch'

import Layout from '../view/Layout'

const RouteComponent = routes => routes.map(route => {
  if (route.children && route.children.length > 0) return RouteComponent(route.children)
  return <Route key={route.path} path={route.path} component={route.component} />
})

// 带有layout的路由
const ComponentByLayout = ({history}) => {
  return (
    <Layout history={history}>
      <Switch>
        {RouteComponent(allRoutes.filter(route => route.layout))}
      </Switch>
    </Layout>
  )
}
/*404判断*/
const isExistPath = (routes, pathname) => routes.some(route => {
  if (route.path === pathname) return true
  if (route.children) return isExistPath(route.children, pathname) 
  return false
})

/*401判断*/
const isAuth = (role, routes) => {
  if (!role) return true
  if (!routes) return false
  return role.some( r => routes.indexOf(r) >= 0)
}

/*当前路径信息*/
const getRoute = (routes, pathname) => {
  const fn = (routes) => routes.map(route => {
    if (route.path === pathname && !route.redirect) return route
    if (route.children) return fn(route.children).find(v => v)
    return false
  })
  return fn(routes).find(v => v)
}

// 每个路由的权限判断
const hasPermission = (roles, route) => {
  if (route.role) {
    return roles.some(role => route.role.indexOf(role) >= 0)
  } else {
    return true
  }
}

/*设置路由*/
const setRoutesByRole = (props) => {
  const roles = props
  const filterRouter = filterAsyncRouter(asyncRouterMap, roles)
  filterRouter.reverse()
  dispatchRouteFun(filterRouter)
}

// 通过权限过滤路由
const filterAsyncRouter = (routes, roles) => {
  const accessedRouters = routes.filter(route => {
    if (hasPermission(roles, route)) {
      if (route.children && route.children.length) route.children = filterAsyncRouter(route.children, roles)
      return true
    }
    return false
  })
  return accessedRouters
}

// 获取面包屑
const filterBreadCrumbs = (pathname, routes) => {
  const filterRoutes = routes.map(route => {
    if (route.children && route.children.length > 0) {
      if (route.path === pathname) return route
      return filterBreadCrumbs(pathname, route.children)
    }
    if (route.path === pathname) return route
    return ''
  })
  return filterRoutes.find(v => {
    return v
  })
}

class Routers extends Component {
    componentDidMount() { /*装载*/
      Nprogress.start()
      this.dataInit()
    }
    componentDidUpdate() { /*更新*/
      // Nprogress.start()
      this.dataInit()
    }
    dataInit() {
      const pathname = this.props.location.pathname
      const BreadCrumb = filterBreadCrumbs(pathname, allRoutes)
      dispatchBreadCrumbs(BreadCrumb)
    }

    render() {
      const whiteList = ['/login', '/404', '/401'] // 白名单
      const { pathname } = this.props.location
      const { state: { user } } = this.props
      const routes = this.props.state.user.routes

      //当前路径路由信息
      const currRoute = getRoute(allRoutes, pathname)

      /*401判断*/
      if (user && currRoute) {
        if (!isAuth(currRoute.role, routes)) return <Redirect to="/401" />
      }

      /*404判断*/
      if (!isExistPath(allRoutes, pathname)) return <Redirect to="/404" />

      if (!whiteList.some(path => path === pathname)) { // 非白名单
        if (!GetToken()) return <Redirect to="/login" /> // 返回登录页

        /*设置路由并存到store*/
        if (!user) {
          dispatchUserFun().then((res) => {
            setRoutesByRole(res.routes)
          }).catch(() => {
          })
        }
      }
      return (
        <Switch>
          { RouteComponent(allRoutes.filter(route => !route.layout)) }
          <Route path="/" component={ComponentByLayout}></Route>
        </Switch>
      );
    }
}

export default connect(
  state => {
    return ({
      state: state
    })
  },
  dispatch => {
    return bindActionCreators({}, dispatch)
  }
)(Routers)