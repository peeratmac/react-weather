import React, { Component } from 'react';
import { connect } from 'react-redux';
import './WeatherCard.css';
import { fetchUsingStationID } from '../../apiCalls';

class WeatherCard extends Component {
  render() {
    console.log('WeatherCard props', this.props);
    const { cities } = this.props;
    return cities.map((city, i) => {
      fetchUsingStationID(city.woeid).then(data =>
        console.log(data.consolidated_weather)
      );
      return (
        <div className='card'>
          <section onClick={event => console.log(event.target)}>
            <h1 key={i}>{city.title}</h1>
            <h3>WeatherStationID: {city.woeid}</h3>
            <h3>Lat/Long: {city.latt_long}</h3>
            <h4>
              {/* {fetchUsingStationID(city.woeid).then(data => data.sun_rise)} */}
            </h4>
          </section>
        </div>
      );
    });
  }
}

const mapDispatchToProps = dispatch => ({});

const mapStateToProps = state => ({
  cities: state.cities
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeatherCard);
