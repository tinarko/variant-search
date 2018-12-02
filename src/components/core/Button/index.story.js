import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, color } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';
import { boolean, text, selectV2 } from '@storybook/addon-knobs/react';

import Button, { BUTTON_TYPES } from './index';

storiesOf('Global Core Components/Button', module)
  .addDecorator(withKnobs)
  .add('Standard', () => (
    <Button
      onClick={action('onClick')}
      disabled={boolean('disabled')}
      small={boolean('small')}
      fullWidth={boolean('fullWidth')}
      label={text('label', 'Click!')}
      type={selectV2('type', BUTTON_TYPES)}
    />
  ));
