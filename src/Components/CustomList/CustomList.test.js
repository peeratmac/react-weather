import React from 'react';
import { shallow } from 'enzyme';
import { CustomList } from './CustomList';

describe('CUSTOM LIST', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <CustomList cities={''} stationIDs={[]} weatherInfo={[]} />
    );
  });

  it('should match the CustomList Snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
