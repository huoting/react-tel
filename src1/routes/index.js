import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import Prop1 from '../prop1'
import Prop2 from '../prop2'
import List from '../list'
import SearchBar from '../view1/SearchBar'

class Routers extends Component {
    render() {
      console.log(this.props)
      // const pathname = this.props.location.pathname
      // if (pathname === '/') return (
      //     <Redirect to='/404'/>
      // )
      return (
        <Switch>
            <Route exact path="/" component={Prop2}></Route>
            <Route path="/List/:id" component={List}></Route>
            <Route path="/Prop1" component={Prop1}></Route>
            <Route path="/404" component={SearchBar}></Route>
            <Redirect from="*" to='/404'/>
        </Switch>
      );
    }
}
export default Routers