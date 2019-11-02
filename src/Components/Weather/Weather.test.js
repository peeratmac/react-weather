import React from 'react';
import { shallow } from 'enzyme';
import { Weather } from './Weather';

describe('WEATHER', () => {
  let wrapper;

  const mockSetWeatherInfo = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<Weather setWeatherInfo={mockSetWeatherInfo} />);
  });

  it('should match the Nav Snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
