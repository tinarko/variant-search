import React from 'react';
import { shallow } from 'enzyme';
import AutoSearchOptions from './';

describe('<AutoSearchOptions />', () => {
  it('renders without errors', () => {
    shallow(<AutoSearchOptions />);
  });
});
