import React, { Component } from 'react';
import { connect } from 'react-redux';
import './WeatherCard.css';
import { fetchUsingStationID, fetchWeatherByCity } from '../../apiCalls';
import { updateFavorites } from '../../actions/index';

class WeatherCard extends Component {
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
            <h1 key={i}>{city.title}</h1>
            <h3>WeatherStationID: {city.woeid}</h3>
            <h3>Lat/Long: {city.latt_long}</h3>
            <h4></h4>
          </section>
        </div>
      );
    });
  }
}

const mapDispatchToProps = dispatch => ({});

const mapStateToProps = state => ({
  cities: state.cities,
  stationIDs: state.stationIDs
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeatherCard);
