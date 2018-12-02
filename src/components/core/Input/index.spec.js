import React from 'react';
import { shallow } from 'enzyme';
import Input from './index';

describe('<Input />', () => {
  it('renders without errors', () => {
    shallow(<Input />);
  });

  it('renders a label if provided', () => {
    const label = 'foo';
    const component = shallow(<Input label={label} />);

    expect(component.find('label').contains(label)).toBe(true);
  });

  it('renders an error message if provided', () => {
    const errorText = 'foo';
    const component = shallow(<Input errorText={errorText} />);

    expect(component.find('span').contains(errorText)).toBe(true);
  });
});
