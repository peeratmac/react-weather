import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <nav>
        <h2>Weather</h2>
        <ul className='nav-links'>
          <Link to='/favorites'>
            <li>Favorites</li>
          </Link>
          <Link to='/customlist'>
            <li>Custom</li>
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
