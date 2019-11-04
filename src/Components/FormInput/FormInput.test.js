import React from 'react';
import { shallow } from 'enzyme';
import { FormInput } from './FormInput';
import { mapStateToProps, mapDispatchToProps } from './FormInput';
import { targetCity, getLatLong } from '../../actions';

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

  it.skip('should call to send weatherInfo to redux store when the Send ALL Station Data button is clicked', () => {
    wrapper.instance().grabWeatherDataWithStationID();
    wrapper.instance().forceUpdate();
    expect(mockSetWeatherInfo).toHaveBeenCalled();
  });

  it.skip('should call to send more information with a click of button', () => {
    wrapper
      .find('button')
      .at(0)
      .simulate('click');

    expect(mockSetWeatherInfo).toHaveBeenCalled();
  });

  it('should show inital state of stationIDs available to be fetched', () => {
    const initialState = {
      stationIDs: [
        2487956,
        2487889,
        2488042,
        2487796,
        2488853,
        349859,
        56558361,
        773964,
        1132447,
        773692,
        2488867
      ]
    };

    expect(mapStateToProps(initialState).stationIDs).toEqual([
      2487956,
      2487889,
      2488042,
      2487796,
      2488853,
      349859,
      56558361,
      773964,
      1132447,
      773692,
      2488867
    ]);
  });

  it('should update selectedCity as the value changes in the form input', () => {
    const mockDispatch = jest.fn();

    const actionToDispatch = targetCity({
      selectedCity: 'Denver'
    });

    const mappedProps = mapDispatchToProps(mockDispatch);

    mappedProps.targetCity({
      selectedCity: 'Denver'
    });

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('should update latitude and longitude as the value changes in the form input', () => {
    const mockDispatch = jest.fn();

    const actionToDispatch = getLatLong({
      latLong: '54.977940,-1.611620'
    });

    const mappedProps = mapDispatchToProps(mockDispatch);

    mappedProps.getLatLong({
      latLong: '54.977940,-1.611620'
    });

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});
