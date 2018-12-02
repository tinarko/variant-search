import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Table from './index';

const data = [
  { id: 1, name: 'foo', date_of_birth: '1111-11-11' },
  { id: 2, name: 'bar', date_of_birth: '2222-02-02' }
];

const rowComponent = data => (
  <tr>
    <td>{data.id}</td>
    <td>{data.name}</td>
    <td>{data.date_of_birth}</td>
    <td>
      <div
        style={{ cursor: 'pointer' }}
        onClick={action('arbitrary clickable element')}
      >
        Click me
      </div>
    </td>
  </tr>
);

storiesOf('Global Core Components/v2/Table', module)
  .add('Standard', () => (
    <Table
      data={data}
      rowComponent={rowComponent}
      columnHeaders={['ID', 'Name', 'Date of Birth', '']}
    />
  ));
