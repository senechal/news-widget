import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import NewsItem from '../NewsItem';

describe('Test for NewsItemt', () => {
  configure({ adapter: new Adapter() });
  it('should render correctly', () => {
    const wrapper = shallow(<NewsItem />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
