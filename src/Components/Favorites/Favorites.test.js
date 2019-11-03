import React from 'react';
import { shallow } from 'enzyme';
import { Favorites } from './Favorites';

describe('FAVORITES', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Favorites cities={''} stationIDs={[]} weatherInfo={[]} />
    );
  });

  it('should match the Favorites Snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
