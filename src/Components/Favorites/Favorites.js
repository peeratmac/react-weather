import React, { Component } from 'react';
import { fetchUsingStationID, fetchPopularCities } from '../../apiCalls';
import WeatherCard from '../../Components/WeatherCard/WeatherCard';
import { connect } from 'react-redux';
export class Favorites extends Component {
  returnFavorites = () => {
    return this.props.weatherInfo.map((city, i) => {
      return (
        <div>
          <h1>{city.sun_rise}</h1>
          <h1>{city.sun_set}</h1>
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <div>{this.returnFavorites}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cities: state.cities,
  stationIDs: state.stationIDs,
  weatherInfo: state.weatherInfo
});

export default connect(
  mapStateToProps,
  null
)(Favorites);
