import React from 'react';
import { shallow, mount } from 'enzyme';
import Icon from './index';
import icons from './icons';

describe('<Icon />', () => {
  it('renders without errors', () => {
    shallow(<Icon />);
  });

  it("renders an empty <div/> if the provided name doesn't exist", () => {
    const component = shallow(<Icon name="foo" />);

    expect(component.find('div').length).toBe(1);
    expect(component.find('svg').length).toBe(0);
  });

  it('renders an <svg/> if the provided name exists', () => {
    expect.assertions(icons.length);

    return icons.forEach(icon => {
      const component = mount(<Icon name={icon.name} />);

      expect(component.find('svg').length).toBe(1);
    });
  });
});
