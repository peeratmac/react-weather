import React, { Component } from 'react';
import { connect } from 'react-redux';
export class CustomList extends Component {
  render() {
    const { weatherInfo } = this.props;
    return weatherInfo.map((city, i) => {
      return (
        <div>
          <h1>Future Outlook</h1>
          <h1>{city.title}</h1>
          <h2>Day 2: {city.consolidated_weather[1].weather_state_name}</h2>
          <h2>Day 3: {city.consolidated_weather[2].weather_state_name}</h2>
          <h2>Day 4: {city.consolidated_weather[3].weather_state_name}</h2>
        </div>
      );
    });
  }
}

const mapStateToProps = state => ({
  cities: state.cities,
  stationIDs: state.stationIDs,
  weatherInfo: state.weatherInformation
});

export default connect(
  mapStateToProps,
  null
)(CustomList);
