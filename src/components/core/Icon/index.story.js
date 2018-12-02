import _ from 'lodash/fp';
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, color } from '@storybook/addon-knobs/react';

import Icon from './index';
import icons from './icons';

const DEFAULT_ICON_SIZE = 40;

_.sortBy('name', icons).forEach(icon => {
  storiesOf('Global Core Components/Icons', module)
    .addDecorator(withKnobs)
    .add(icon.name, () => displayIcon(icon.name));
});

const displayIcon = name => (
  <div
    key={name}
    style={{
      display: 'flex',
      justifyContent: 'center'
    }}
  >
    <Icon
      name={name}
      size={number('size', DEFAULT_ICON_SIZE)}
      color={color('color', 'black')}
    />
  </div>
);
