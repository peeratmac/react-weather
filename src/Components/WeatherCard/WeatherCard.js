import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherCard extends Component {
  render() {
    const { cities } = this.props;

    return cities.map(city => {
      return <h1>{city.title}</h1>;
    });
  }
}

const mapStateToProps = state => ({
  cities: state.cities
});

export default connect(
  mapStateToProps,
  null
)(WeatherCard);