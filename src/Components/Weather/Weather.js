import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsingStationID } from '../../apiCalls';

class Weather extends Component {
  constructor() {
    super();
    this.state = {
      weatherState: []
    };
  }

  componentDidMount() {
    // fetchUsingStationID(this.props.stationIDs[0]).then(data =>
    //   console.log(data.consolidated_weather[0].weather_state_name)
    // );
  }

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
  cities: state.cities,
  stationIDs: state.stationIDs
});

export default connect(
  mapStateToProps,
  null
)(Weather);
