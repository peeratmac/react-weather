import React, { Component } from 'react';
import { connect } from 'react-redux';

class Weather extends Component {
  render() {
    // const cityTitle = this.props.cities.map(city => city.title);

    return (
      <section>
        <h1>Weather Component</h1>
        <h2></h2>
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
