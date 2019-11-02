import React, { Component } from 'react';

export class Nav extends Component {
  render() {
    return (
      <div>
        <h2>Weather</h2>
        <ul>
          <li>Favorites</li>
          <li>Custom</li>
          <li>Home</li>
        </ul>
      </div>
    );
  }
}
