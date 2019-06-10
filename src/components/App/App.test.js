import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe('AreaChart', () => {
  it('should render AreaChart component', () => {
    const wrapper = shallow(<App />);
  
    expect(wrapper).toMatchSnapshot();
  });
});