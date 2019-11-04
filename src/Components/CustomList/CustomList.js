import React, { Component } from 'react';
import { connect } from 'react-redux';
export class CustomList extends Component {
  render() {
    const { weatherInfo } = this.props;
    return weatherInfo.map((city, i) => {
      return (
        <div className='forecast-card'>
          <h1>{city.title}</h1>
          <h2>Day 2: {city.consolidated_weather[1].weather_state_name} </h2>
          <h2>
            Temperature (Degree Celsius):
            <span className='max-temp'>
              {city.consolidated_weather[1].max_temp}
            </span>{' '}
            /{' '}
            <span className='min-temp'>
              {city.consolidated_weather[1].min_temp}
            </span>
          </h2>
          <h2>Day 3: {city.consolidated_weather[2].weather_state_name}</h2>
          <h2>
            Temperature (Degree Celsius):
            <span className='max-temp'>
              {city.consolidated_weather[2].max_temp}
            </span>{' '}
            /{' '}
            <span className='min-temp'>
              {city.consolidated_weather[2].min_temp}
            </span>
          </h2>
          <h2>Day 4: {city.consolidated_weather[3].weather_state_name}</h2>
          <h2>
            Temperature (Degree Celsius):
            <span className='max-temp'>
              {city.consolidated_weather[3].max_temp}
            </span>{' '}
            /{' '}
            <span className='min-temp'>
              {city.consolidated_weather[3].min_temp}
            </span>
          </h2>
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
