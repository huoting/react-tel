import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="About">About
        <Link to="/login">login</Link>
        <Link to="/">index</Link>
        <Link to="/list2">list2</Link>
      </div>
    );
  }
}
export default About;
