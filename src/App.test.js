import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders Navigation component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Navigation')).toHaveLength(1);
  });

  it('renders Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Header')).toHaveLength(1);
  });

  it('renders Features component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Features')).toHaveLength(1);
  });

  it('renders About component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('About')).toHaveLength(1);
  });

  it('renders Services component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Services')).toHaveLength(1);
  });

  it('renders Gallery component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Gallery')).toHaveLength(1);
  });

  it('renders Testimonials component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Testimonials')).toHaveLength(1);
  });

  it('renders Team component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Team')).toHaveLength(1);
  });

  it('renders Contact component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Contact')).toHaveLength(1);
  });
});
