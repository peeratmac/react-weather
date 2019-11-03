import React, { Component } from 'react';
import './Favorites.scss';
import { fetchUsingStationID, fetchPopularCities } from '../../apiCalls';
import WeatherCard from '../../Components/WeatherCard/WeatherCard';
import { connect } from 'react-redux';
export class Favorites extends Component {
  componentDidMount() {
    console.log('yep');
    console.log(this.props.stationIDs);
  }

  render() {
    console.log('LIST-1', this.props);
    const { weatherInfo } = this.props;
    return weatherInfo.map((city, i) => {
      return (
        <div className='card'>
          <h1>City: {city.title}</h1>
          <h1>
            <span>
              Current Condition:{' '}
              {city.consolidated_weather[0].weather_state_name}
            </span>
          </h1>
          <h2>
            <span>
              Min Temp (Degree Celsius): {city.consolidated_weather[0].min_temp}
            </span>
          </h2>
          <h2>
            <span>
              Max Temp (Degree Celsius): {city.consolidated_weather[0].max_temp}
            </span>
          </h2>
          <h2>
            <span>Humidity (%): {city.consolidated_weather[0].humidity}</span>
          </h2>
        </div>
      );
    });
    return (
      <div>
        <h1>LIST 1 PAGE</h1>
      </div>
    );
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
