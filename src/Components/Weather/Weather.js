import React, { Component } from 'react';
import { connect } from 'react-redux';

class Weather extends Component {
  render() {
    return (
      <section>
        <h1>WeatherComponent</h1>
        <h2>Weather Cards Below (Weather Component right now)</h2>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  cities: state.cities
});

export default connect(
  mapStateToProps,
  null
)(Weather);
