import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export class Nav extends Component {
  render() {
    return (
      <nav>
        <h2>Weather Station</h2>
        <ul className='nav-links'>
          <Link to='/current-conditions'>
            <li>Current Conditions</li>
          </Link>
          <Link to='/future-outlook'>
            <li>Future Outlook</li>
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
