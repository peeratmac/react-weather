import React, { Component } from 'react';
import {
  fetchPopularCities,
  fetchLattitudeLongtitude,
  fetchCity,
  fetchPopularWeather
} from '../../apiCalls';
import FormInput from '../../Components/FormInput/FormInput';
import Weather from '../../Components/Weather/Weather';
import WeatherCard from '../../Components/WeatherCard/WeatherCard';
import Nav from '../../Components/Nav/Nav';
import Favorites from '../../Components/Favorites/Favorites';
import CustomList from '../../Components/CustomList/CustomList';
import './App.css';
import { connect } from 'react-redux';
import { loadCities, loadWeather } from '../../actions/index';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

export class App extends Component {
  componentDidMount = async () => {
    fetchPopularCities('SAN').then(cities => {
      console.log(cities);
      this.props.loadCities(cities);
      const IDs = cities.map(city => city.woeid);
      console.log(IDs);
      this.props.loadWeather(IDs);
    });
  };

  render() {
    console.log(this.props);
    return (
      <Router>
        <div className='app'>
          <Nav />
          <Switch>
            <Route
              exact
              path='/'
              render={() => (
                <div>
                  <FormInput />
                  <WeatherCard />
                </div>
              )}
            />

            <Route path='/current-conditions' component={Favorites} />
            <Route path='/future-outlook' component={CustomList} />
            <h1>Find Your Weather Station and Latitude Longitude</h1>
          </Switch>
        </div>
      </Router>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  loadCities: cities => dispatch(loadCities(cities)),
  loadWeather: stationIDs => dispatch(loadWeather(stationIDs))
});

export const mapStateToProps = state => ({
  cities: state.cities,
  stationIDs: state.stationIDs
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

App.propTypes = {
  loadCities: PropTypes.func,
  loadWeather: PropTypes.func,
  cities: PropTypes.array,
  stationIDs: PropTypes.array
};
