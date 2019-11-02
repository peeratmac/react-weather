import React from 'react';
import { shallow } from 'enzyme';
import { WeatherCard } from './WeatherCard';

describe('WEATHER CARD', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <WeatherCard
        stationIDs={[57980]}
        weatherInfo={[]}
        currentStation={47889}
        cities={[]}
      />
    );
  });

  it('should match the WeatherCard Snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
