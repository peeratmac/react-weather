import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import currentConditions from '../../images/currentConditions.svg';
import futureOutlook from '../../images/futureOutlook.svg';
import home from '../../images/home.svg';

export class Nav extends Component {
  render() {
    const linkStyle = {
      color: 'white',
      textDecoration: 'none'
    };

    return (
      <nav>
        <h2>Weather Station</h2>
        <ul className='nav-links'>
          <Link style={linkStyle} to='/current-conditions'>
            <li>
              Current Conditions
              <img src={currentConditions} />
            </li>
          </Link>
          <Link style={linkStyle} to='/future-outlook'>
            <li>
              Future Outlook <img src={futureOutlook} />
            </li>
          </Link>
          <Link style={linkStyle} to='/'>
            <li>
              Home <img src={home} />
            </li>
          </Link>
        </ul>
      </nav>
    );
  }
}

export default Nav;
