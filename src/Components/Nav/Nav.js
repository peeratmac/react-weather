import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <nav>
        <h2>Weather</h2>
        <ul class='nav-links'>
          <li>Favorites</li>
          <li>Custom</li>
          <li>Home</li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
