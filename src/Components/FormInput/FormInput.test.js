import React from 'react';
import { shallow } from 'enzyme';
import { FormInput } from './FormInput';

describe('FORM INPUT', () => {
  let wrapper;
  const mockTargetCity = jest.fn();
  const mockGetLatLong = jest.fn();
  const mockSetWeatherInfo = jest.fn();
  const mockGetCurrentStation = jest.fn();
  const mockLoadCities = jest.fn();
  const mockLoadWeather = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <FormInput
        targetCity={mockTargetCity}
        getLatLong={mockGetLatLong}
        setWeatherInfo={mockSetWeatherInfo}
        getCurrentStation={mockGetCurrentStation}
        loadCities={mockLoadCities}
        loadWeather={mockLoadWeather}
        selectedCity={'Denver'}
        latLong={'1234,-2578'}
        stationIDs={[]}
        weatherInfo={[]}
        currentStation={47889}
        cities={[]}
      />
    );
  });

  it('should match the FormInput Snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});