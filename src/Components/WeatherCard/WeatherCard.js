import React, { Component } from 'react';
import { connect } from 'react-redux';
import './WeatherCard.scss';
import { fetchUsingStationID, fetchWeatherByCity } from '../../apiCalls';
import { updateFavorites } from '../../actions/index';

export class WeatherCard extends Component {
  handleGetWeatherWithStationID = async event => {
    // event.preventDefault();
    // const x = this.props.stationIDs[0];
    // const y = await fetchUsingStationID(x);
    // console.log(y.title);
    // return y.title;

    const x = this.props.stationIDs.map(
      async id => await fetchUsingStationID(id)
    );
    console.log(x.title);
  };

  componentDidMount() {
    // const x = this.props.stationIDs.map(
    //   async id => await fetchUsingStationID(id)
    // );
    // console.log(x.title);
    fetchWeatherByCity('London');
  }

  returnWeatherInfo = () => {
    console.log(this.props.weatherInfo);
  };

  render() {
    console.log('WeatherCard props', this.props);
    const { cities } = this.props;
    return cities.map((city, i) => {
      // fetchUsingStationID(this.props.stationIDs[i]).then(data =>
      //   console.log(data.consolidated_weather[0].weather_state_name)
      // );

      return (
        <div className='card'>
          <section onClick={event => console.log(event.target)}>
            <h1 key={i}>
              <span className='city-title'>{city.title}</span>
            </h1>
            <h3>
              <span className='weather-station-label'>Weather Station ID:</span>{' '}
              {'  '}
              <span className='weather-station-id'>{city.woeid}</span>
            </h3>
            <h3>
              <span className='lat-long-label'>Lat/Long:</span>
              {'  '}
              <span className='lat-long'>{city.latt_long}</span>
            </h3>
          </section>
        </div>
      );
    });
  }
}

const mapDispatchToProps = dispatch => ({});

const mapStateToProps = state => ({
  cities: state.cities,
  stationIDs: state.stationIDs,
  weatherInfo: state.weatherInfo,
  currentStation: state.currentStation
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeatherCard);
