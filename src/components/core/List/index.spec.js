import React from 'react';
import { shallow, mount } from 'enzyme';
import List from './';

describe('<List />', () => {
  it('renders without errors', () => {
    shallow(<List />);
  });

  it('renders a <li> for each item in the passed-in items array', () => {
    const items = ['foo', 'bar', 'baz'],
          component = shallow(<List items={ items } />);

    expect(component.find('li').length).toBe(items.length);
  });

  it('renders an instance of the passed in rowComponent for each item in the items array -- primitives', () => { // eslint-disable-line max-len
    const items        = ['foo', 'bar', 'baz'],
          rowComponent = data => <div>{ data }</div>,
          component    = mount(<List items={ items } rowComponent={ rowComponent } />);


    component.find('li')
      .forEach((listItem, index) => (
        expect(listItem.find('div').text()))
          .toBe(items[index])
      );
  });

  it('renders an instance of the passed in rowComponent for each item in the items array -- objects', () => { // eslint-disable-line max-len
    const items        = [{ text : 'foo'}, { text : 'bar'}, { text : 'baz' }],
          rowComponent = props => <div>{ props.text }</div>,
          component    = mount(<List items={ items } rowComponent={ rowComponent } />);


    component.find('li')
      .forEach((listItem, index) => (
        expect(listItem.find('div').text()))
          .toBe(items[index].text)
      );
  });

});
