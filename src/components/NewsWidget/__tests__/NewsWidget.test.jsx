import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import NewsWidget from '../NewsWidget';

describe('Test for NewsWidget', () => {
  configure({ adapter: new Adapter() });
  it('should render correctly', () => {
    const wrapper = shallow(<NewsWidget />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
