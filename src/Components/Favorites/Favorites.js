import React, { Component } from 'react';
import './Favorites.scss';
import { fetchUsingStationID, fetchPopularCities } from '../../apiCalls';
import WeatherCard from '../../Components/WeatherCard/WeatherCard';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
export class Favorites extends Component {
  componentDidMount() {
    console.log(this.props.stationIDs);
  }

  render() {
    console.log('LIST-1', this.props);
    const { weatherInfo } = this.props;
    return weatherInfo.map((city, i) => {
      let cardStyle = {
        background: `url(https://www.metaweather.com/static/img/weather/${city.consolidated_weather[0].weather_state_abbr}.svg)`
      };
      return (
        <div className='forecast-card' style={cardStyle}>
          <h1 className='city-title'>{city.title}</h1>
          <h1>
            <span className='current-condition-label'>Current Condition: </span>
            <span className='current-condition'>
              {city.consolidated_weather[0].weather_state_name}
            </span>
          </h1>
          <h2>
            <span className='min-temp-label'>Min Temp (Degree Celsius): </span>
            <span className='min-temp'>
              {city.consolidated_weather[0].min_temp}
            </span>
          </h2>
          <h2>
            <span className='max-temp-label'>Max Temp (Degree Celsius): </span>
            <span className='max-temp'>
              {city.consolidated_weather[0].max_temp}
            </span>
          </h2>
          <h2>
            <span className='humidity-label'>Humidity (%): </span>
            <span className='humidity'>
              {city.consolidated_weather[0].humidity}
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
)(Favorites);

Favorites.propTypes = {
  cities: PropTypes.array,
  stationIDs: PropTypes.array,
  weatherInfo: PropTypes.array
};
