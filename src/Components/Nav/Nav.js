import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <nav>
        <h2>Weather</h2>
        <ul className='nav-links'>
          <Link to='/list1'>
            <li>List 1</li>
          </Link>
          <Link to='/list2'>
            <li>List 2</li>
          </Link>
          <Link to='/'>
            <li>Home</li>
          </Link>
        </ul>
      </nav>
    );
  }
}

export default Nav;
