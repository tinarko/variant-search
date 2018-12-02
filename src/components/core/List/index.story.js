import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, array } from '@storybook/addon-knobs/react';

import List from './';

const items = ['foo', 'bar', 'bat', 'baz'];
const rowComponent = item => <div>{item}</div>;

storiesOf('Global Core Components/List', module)
  .addDecorator(withKnobs)
  .add('Standard', () => (
    <List items={array('items', items)} rowComponent={rowComponent} />
  ));
