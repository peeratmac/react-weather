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

class App extends Component {
  componentDidMount = async () => {
    fetchPopularCities('a').then(cities => {
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
            <Route exact path='/list1' component={Favorites} />
            <Route exact path='/list2' component={CustomList} />
            <h1>Find Your Weather Station and Latitude Longitude</h1>
          </Switch>
          <FormInput />
          {/* <Weather weatherCards={this.props.stationIDs} /> */}
          <WeatherCard />
        </div>
      </Router>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  loadCities: cities => dispatch(loadCities(cities)),
  loadWeather: stationIDs => dispatch(loadWeather(stationIDs))
});

const mapStateToProps = state => ({
  cities: state.cities,
  stationIDs: state.stationIDs
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
