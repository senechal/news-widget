import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import NewsItem from '../NewsItem';

describe('Test for NewsItemt', () => {
  configure({ adapter: new Adapter() });
  let props;
  beforeEach(() => {
    props = {
      title: 'mock title',
      url: 'http://google.com.br',
      source: {
        id: 'mock',
        name: 'Mock',
      },
      date: '2018-05-23T22:10:04Z',
    };
  });
  it('should render correctly', () => {
    const wrapper = shallow(<NewsItem {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
