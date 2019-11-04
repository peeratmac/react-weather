import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';
import { mapStateToProps, mapDispatchToProps } from './App';

describe('APP', () => {
  let wrapper;
  const mockLoadCities = jest.fn();
  const mockLoadWeather = jest.fn();
  beforeEach(() => {
    wrapper = shallow(
      <App
        cities={''}
        stationIDs={''}
        loadCities={mockLoadCities}
        loadWeather={mockLoadWeather}
      />
    );
  });

  it('should match the App Snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should show initial state of cities loaded to the App', () => {
    const initialState = {
      cities: [
        {
          title: 'Toronto',
          location_type: 'City',
          woeid: 4118,
          latt_long: '43.648560,-79.385368'
        },
        {
          title: 'Santorini',
          location_type: 'City',
          woeid: 56558361,
          latt_long: '36.406651,25.456530'
        },
        {
          title: 'Torino',
          location_type: 'City',
          woeid: 725003,
          latt_long: '45.070290,7.667680'
        }
      ]
    };

    expect(mapStateToProps(initialState).cities).toEqual([
      {
        title: 'Toronto',
        location_type: 'City',
        woeid: 4118,
        latt_long: '43.648560,-79.385368'
      },
      {
        title: 'Santorini',
        location_type: 'City',
        woeid: 56558361,
        latt_long: '36.406651,25.456530'
      },
      {
        title: 'Torino',
        location_type: 'City',
        woeid: 725003,
        latt_long: '45.070290,7.667680'
      }
    ]);
  });
});
