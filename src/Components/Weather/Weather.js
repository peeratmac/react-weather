import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setWeatherInfo } from '../../actions';
import { fetchUsingStationID } from '../../apiCalls';

export class Weather extends Component {
  grabWeatherDataWithStationID = () => {
    const weather = fetchUsingStationID(this.props.currentStation);
    console.log(weather);
    this.props.setWeatherInfo(weather);
  };

  render() {
    console.log(this.props);
    return (
      <section>
        <p>Weather</p>
        <h2>
          {/* {this.props.weatherInfo.map(
            x => x.consolidated_weather[0].weather_state_name
          )} */}
        </h2>
        <p>Weather</p>
      </section>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setWeatherInfo: weatherInfo => dispatch(setWeatherInfo(weatherInfo))
});

const mapStateToProps = state => ({
  cities: state.cities,
  stationIDs: state.stationIDs,
  currentStation: state.currentStation,
  weatherInfo: state.weatherInfo
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Weather);
