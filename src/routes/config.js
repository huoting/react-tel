import asyncComponent from './asyncComponent'
const _import_views = file => asyncComponent(() => import(`../view/${file}`))

const setChildrenRoles = routes => routes.map(route => {
    let role = route.role
    if (!role) return route

    let fn = (children, role) => {
        return children.map(child => {
            child.role = Array.from(new Set([...(child.role || []), ...role]))
            if (child.children) {
                child.children = fn(child.children, child.role)
            }
            return child
        })
    }
    if (route.children) {
        route.children = fn(route.children, role)
    }
    return route
})

const asyncRouterMapList = [
  {
    path: '/Lists',
    exact: false,
    layout: true,
    icon: 'user',
    name: '列表内容',
    role: [3],
    component: _import_views('Lists/ListCon'),
    children: [
      {
        path: '/Lists/ListCon',
        exact: false,
        layout: true,
        icon: 'user',
        name: '列表内容',
        role: [2],
        component: _import_views('Lists/ListCon')
      },
      {
        path: '/Lists/Client',
        exact: false,
        layout: true,
        icon: 'user',
        name: '客户列表',
        role: [2],
        component: _import_views('Lists/Client')
      }
    ]
  },
  {
    path: '/about',
    exact: false,
    layout: true,
    icon: 'user',
    name: '关于',
    role: [2],
    component: _import_views('index/about')
  },
  {
    path: '/',
    exact: false,
    layout: true,
    icon: '0',
    name: '首页',
    component: _import_views('index/index')
  }
]

export const constantRouterMap = [
  {
    path: '/401',
    exact: false,
    layout: false,
    icon: 'user',
    name: '401',
    component: _import_views('error/401')
  },
  {
    path: '/404',
    exact: false,
    layout: false,
    icon: 'user',
    name: '404',
    component: _import_views('error/404')
  },
  {
    path: '/login',
    exact: false,
    layout: false,
    icon: 'user',
    name: '登陆',
    component: _import_views('login/login')
  }
]

export const asyncRouterMap = setChildrenRoles(asyncRouterMapList)
export const allRoutes = asyncRouterMapList.concat(constantRouterMap)
