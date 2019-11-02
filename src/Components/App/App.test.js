import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';

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
});
