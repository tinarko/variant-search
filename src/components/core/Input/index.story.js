import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {  select, text } from '@storybook/addon-knobs/react';

import Input from './index';

const INPUT_TYPES = [
  'text',
  'search',
  'email',
  'date',
  'file',
  'number',
  'password'
];

storiesOf('Global Core Components/Input', module)
  .add('standard', () => (
      <Input
        accept={text('accept', 'image/png')}
        type={select('type', INPUT_TYPES)}
        onChange={action('onChange')}
        label={text('label', 'Type something')}
        errorText={text('errorText', 'Oh no! Something is wrong!')}
        placeholder={text('placeholder', 'Placeholder text')}
      />
  ));
