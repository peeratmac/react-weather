import React from 'react';
import { shallow } from 'enzyme';
import { Nav } from './Nav';

describe('NAV', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Nav />);
  });

  it('should match the Nav Snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
