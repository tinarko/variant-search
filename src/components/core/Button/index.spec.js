import React from 'react';
import { shallow } from 'enzyme';
import Button from './index';

describe('<Button />', () => {
  it('renders without errors', () => {
    shallow(<Button />);
  });

  it('adds a disabled class to the element if the disabled prop is true', () => {
    const component = shallow(<Button disabled />);
    expect(component.hasClass('disabled')).toBe(true);
  });

  it('fires the onClick function when clicked', () => {
    const onClick = jest.fn();
    const component = shallow(<Button onClick={onClick} />);
    component.simulate('click');

    expect(onClick).toHaveBeenCalled();
  });

  it('does not fire the onClick function if the disabled prop is true', () => {
    const onClick = jest.fn();
    const component = shallow(<Button disabled onClick={onClick} />);

    component.simulate('click');
    expect(onClick).not.toHaveBeenCalled();
  });
});
